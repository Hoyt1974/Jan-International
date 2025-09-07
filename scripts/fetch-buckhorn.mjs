import {writeFile, mkdir, cp} from "fs/promises";
import {basename, join} from "path";
import {tmpdir} from "os";

const PAGES = [
  "https://www.buckhorninn.com/",
  "https://www.buckhorninn.com/lodging/",
  "https://www.buckhorninn.com/dining/",
  "https://www.buckhorninn.com/grounds/",
  "https://www.buckhorninn.com/conferences/"
];

const OUT_DIR = "public/assets";
const COUNT = 12;

function abs(u, base){ try{ return new URL(u, base).href; }catch{ return null; } }

async function getHTML(url){
  const r = await fetch(url, {redirect:"follow"});
  if(!r.ok) throw new Error(`${r.status} ${url}`);
  return await r.text();
}

function extractImageUrls(html, base){
  const urls = new Set();
  for(const m of html.matchAll(/<img[^>]+src=["']([^"'?]+?\.(?:png|jpe?g|webp))(?:\?[^"']*)?["']/gi)){
    const u = abs(m[1], base); if(u) urls.add(u);
  }
  for(const m of html.matchAll(/srcset=["']([^"']+)["']/gi)){
    const parts = m[1].split(",").map(s=>s.trim().split(" ")[0]);
    for(const p of parts){ const u = abs(p, base); if(u && /\.(png|jpe?g|webp)$/i.test(u)) urls.add(u); }
  }
  const all = Array.from(urls);
  const pngs = all.filter(u=>/\.png$/i.test(u));
  const rest = all.filter(u=>!/.png$/i.test(u));
  return [...pngs, ...rest];
}

async function downloadTo(url, outPath){
  const r = await fetch(url, {redirect:"follow"});
  if(!r.ok) throw new Error(`${r.status} ${url}`);
  const buf = new Uint8Array(await r.arrayBuffer());
  await writeFile(outPath, buf);
  return buf.length;
}

async function main(){
  const tmp = join(tmpdir(), `bhi_${Date.now()}`);
  await mkdir(tmp, {recursive:true});

  const found = new Set();
  for(const page of PAGES){
    try{
      const html = await getHTML(page);
      extractImageUrls(html, page).forEach(u=>found.add(u));
    }catch{}
  }
  const candidates = Array.from(found);
  if(!candidates.length){ console.log("No images found."); return; }

  const downloaded = [];
  for(const url of candidates){
    try{
      const name = basename(new URL(url).pathname).replace(/[^a-zA-Z0-9._-]/g,"");
      const out = join(tmp, name || `img_${Date.now()}.png`);
      const size = await downloadTo(url, out);
      downloaded.push({path:out, size, url});
    }catch{}
  }
  if(!downloaded.length){ console.log("Nothing downloaded."); return; }

  downloaded.sort((a,b)=>b.size-a.size);
  const top = downloaded.slice(0, COUNT);

  await mkdir(OUT_DIR, {recursive:true});

  const manifest = [];
  for(let i=0;i<top.length;i++){
    const src = top[i].path;
    const ext = (src.match(/\.(png|jpe?g|webp)$/i)?.[0] || ".jpg").toLowerCase();
    const name = `buckhorn${i+1}${ext}`;
    await cp(src, join(OUT_DIR, name));
    manifest.push(`/assets/${name}`);
  }

  const heroSrc = top[0].path;
  await cp(heroSrc, join(OUT_DIR, "hero.jpg"));

  await writeFile(join(OUT_DIR, "buckhorn-index.json"), JSON.stringify({images:manifest}, null, 2));
  console.log(`Saved ${manifest.length} images, hero.jpg, and buckhorn-index.json to ${OUT_DIR}`);
}

main().catch(e=>{ console.error(e); process.exit(1); });

import { ImageResponse } from "next/og";
import { site, buckhorn } from "../../lib/seo";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  console.log("[CONTACT]", { name, email, message });

  return NextResponse.json({ ok: true });
}

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "48px",
          backgroundImage: `url(${site.url}${buckhorn.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#fff",
            textShadow: "0 2px 24px rgba(0,0,0,.5)",
          }}
        >
          {buckhorn.title}
        </div>
        <div style={{ fontSize: 28, color: "#e6f0ff", marginTop: 8 }}>
          {site.name}
        </div>
      </div>
    ),
    { ...size }
  );
}


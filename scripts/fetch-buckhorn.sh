#!/usr/bin/env bash
set -euo pipefail

PAGES=(
  "https://www.buckhorninn.com/"
  "https://www.buckhorninn.com/lodging/"
  "https://www.buckhorninn.com/dining/"
  "https://www.buckhorninn.com/grounds/"
)

ROOT_DIR="$(pwd)"
WORK_DIR="$(mktemp -d)"
URLS_FILE="$WORK_DIR/urls.txt"
DL_DIR="$WORK_DIR/got"
mkdir -p "$DL_DIR"

: > "$URLS_FILE"
for p in "${PAGES[@]}"; do
  curl -Ls "$p" \
  | grep -Eoi 'src=["'\'']([^"'\'']+\.(jpg|jpeg|png|webp))["'\'']' \
  | sed -E 's/^src=["'\'']|["'\'']$//g' \
  | sed -E 's#^//#https://#' \
  >> "$URLS_FILE" || true
done

sed -i -E 's#^/+#https://www.buckhorninn.com/#' "$URLS_FILE"
sort -u "$URLS_FILE" -o "$URLS_FILE"

cd "$DL_DIR"
xargs -n1 -P6 -I{} sh -c '
  u="{}"
  n="$(basename "${u%%\?*}")"
  curl -Lfso "$n" "$u" || true
' < "$URLS_FILE"

mapfile -t PICKS < <(ls -S 2>/dev/null | head -n 7 || true)

cd "$ROOT_DIR"
mkdir -p public/assets

if [ "${#PICKS[@]}" -eq 0 ]; then
  echo "No images fetched. Keeping existing files in public/assets."
  exit 0
fi

last="${PICKS[-1]}"

for i in $(seq 0 6); do
  src="$DL_DIR/${PICKS[$i]:-$last}"
  case "$i" in
    0) cp -f "$src" public/assets/hero.png ;;
    1) cp -f "$src" public/assets/gallery1.png ;;
    2) cp -f "$src" public/assets/gallery2.png ;;
    3) cp -f "$src" public/assets/gallery3.png ;;
    4) cp -f "$src" public/assets/gallery4.png ;;
    5) cp -f "$src" public/assets/gallery5.png ;;
    6) cp -f "$src" public/assets/gallery6.png ;;
  esac
done

echo "Buckhorn images installed. Hard refresh your site (Ctrl+Shift+R)."

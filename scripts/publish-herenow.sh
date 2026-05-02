#!/usr/bin/env bash
# Publishes only the static site (index.html + assets/) to here.now — not the whole repo.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="/tmp/laiax-herenow"
rm -rf "$STAGE"
mkdir -p "$STAGE"
cp "$ROOT/index.html" "$STAGE/"
cp -r "$ROOT/assets" "$STAGE/"
"$HOME/.agents/skills/here-now/scripts/publish.sh" "$STAGE" --client cursor --title "LAIAX"

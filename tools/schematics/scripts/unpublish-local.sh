#!/usr/bin/env bash
set -euo pipefail

REGISTRY=$(npm config get @daffodil:registry 2>/dev/null || echo "")

if [ -z "$REGISTRY" ]; then
  echo "ERROR: No registry configured for @daffodil scope." >&2
  exit 1
fi

if [[ "$REGISTRY" != *"localhost"* && "$REGISTRY" != *"127.0.0.1"* ]]; then
  echo "ERROR: @daffodil registry is set to '$REGISTRY', which is not a local registry." >&2
  echo "Refusing to unpublish. Configure a local registry first." >&2
  exit 1
fi

echo "Registry: $REGISTRY"

PACKAGES=$(npx nx graph --focus=@daffodil/commerce --file=stdout | \
  jq -r '.graph.dependencies["@daffodil/commerce"] | map(.target) | . + ["@daffodil/commerce"] | .[]')

echo "Unpublishing from $REGISTRY:"
echo "$PACKAGES"
echo ""

echo "$PACKAGES" | xargs -P4 -I{} npm unpublish {} --force --registry="$REGISTRY"

echo "Done."
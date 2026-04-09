#!/usr/bin/env bash
set -euo pipefail

VERSION="0.0.0-test.local"
while [[ $# -gt 0 ]]; do
  case "$1" in
    --version) VERSION="$2"; shift 2 ;;
    *) echo "Unknown option: $1" >&2; exit 1 ;;
  esac
done
REGISTRY=$(npm config get @daffodil:registry 2>/dev/null || echo "")

if [ -z "$REGISTRY" ]; then
  echo "ERROR: No registry configured for @daffodil scope." >&2
  exit 1
fi

if [[ "$REGISTRY" != *"localhost"* && "$REGISTRY" != *"127.0.0.1"* ]]; then
  echo "ERROR: @daffodil registry is set to '$REGISTRY', which is not a local registry." >&2
  echo "Refusing to publish. Configure a local registry first." >&2
  exit 1
fi

echo "Registry: $REGISTRY"

# Save originals for restore on failure / exit.
ORIGINAL_VERSION_TS=$(cat ng-add/generators/version.ts)
ORIGINAL_PKG_VERSION=$(jq -r '.version' ../../package.json)
restore() {
  echo "$ORIGINAL_VERSION_TS" > ng-add/generators/version.ts
  contents=$(jq --arg v "$ORIGINAL_PKG_VERSION" '.version = $v' ../../package.json) && echo "$contents" > ../../package.json
}
trap restore EXIT

# Set version in source before building
sed -i "s/version = '.*'/version = '${VERSION}'/" ng-add/generators/version.ts

# Build @daffodil/commerce and its dependencies
npx nx run @daffodil/commerce:build

# Compute @daffodil/commerce dependencies
PACKAGES=$(npx nx graph --focus=@daffodil/commerce --file=stdout | \
  jq -r '.graph.dependencies["@daffodil/commerce"] | map(.target) | . + ["@daffodil/commerce"] | join(",")')

# Build glob from package names: @daffodil/core,@daffodil/driver -> ../../dist/{core,driver}/package.json
DIRS=$(echo "$PACKAGES" | tr ',' '\n' | sed 's|@daffodil/||' | paste -sd ',' -)
PKG_GLOB="../../dist/{${DIRS}}/package.json"

# Update root version to temporary verison
contents=$(jq --arg v "$VERSION" '.version = $v' ../../package.json) && echo "$contents" > ../../package.json

# set-versions-from-root
ACTIONS_REPO=/tmp/github-actions
if [ ! -d "$ACTIONS_REPO" ]; then
  git clone --depth 1 https://github.com/graycoreio/github-actions.git "$ACTIONS_REPO"
fi
env \
  "INPUT_ROOT-PACKAGE-PATH=../../package.json" \
  "INPUT_PACKAGE-GLOB=${PKG_GLOB}" \
  "INPUT_PLACEHOLDER=0.0.0-PLACEHOLDER" \
  node "$ACTIONS_REPO/set-versions-from-root/dist/index.js"

# Publish @daffodil/commerce and its dependencies to Verdaccio
npx nx run-many -t publish --projects="${PACKAGES},@daffodil/commerce"

echo "Done."

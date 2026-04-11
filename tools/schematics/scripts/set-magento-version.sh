#!/usr/bin/env bash
set -euo pipefail

VERSION="${1:-}"
if [ -z "$VERSION" ]; then
  echo "ERROR: Magento version argument is required (e.g. 2.4.3)" && exit 1
fi

CONDITION="magento-${VERSION}"

# Patch angular.json: add condition to every build configuration across all projects
ANGULAR=$(jq --arg cond "$CONDITION" '
  .projects |= with_entries(
    .value.architect.build.configurations |= with_entries(
      .value.conditions = ((.value.conditions // []) + [$cond] | unique)
    )
  )
' angular.json)
echo "$ANGULAR" > angular.json

# Patch tsconfig.json: add customConditions to compilerOptions
TSCONFIG=$(node -e "
  const fs = require('fs');
  const raw = fs.readFileSync('tsconfig.json', 'utf8');
  const stripped = raw.replace(/\/\*[\s\S]*?\*\//g, '');
  process.stdout.write(stripped);
" | jq --arg cond "$CONDITION" '
  .compilerOptions.customConditions = ((.compilerOptions.customConditions // []) + [$cond] | unique)
')
echo "$TSCONFIG" > tsconfig.json

echo "Set Magento version condition: ${CONDITION}"

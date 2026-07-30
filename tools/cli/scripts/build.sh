#!/bin/bash
set -e

DIST="../../dist/cli"

tsc -p tsconfig.json

cp collection.json "$DIST/"
cp versioning/daff.schema.json "$DIST/"
cp README.md "$DIST/"

node scripts/copy-package-json.js

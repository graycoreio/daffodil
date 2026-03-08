#!/bin/bash
set -e

DIST="../../dist/commerce"

tsc -p tsconfig.json

cp collection.json "$DIST/"
cp ng-add/schema.json "$DIST/ng-add/"
cp -r ng-add/files "$DIST/ng-add/"
cp README.md "$DIST/"

node scripts/copy-package-json.js

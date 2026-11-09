#!/bin/bash
set -e

DIST="../../dist/commerce"

tsc -p tsconfig.json

cp collection.json "$DIST/"
cp builders.json "$DIST/"
cp ng-add/schema.json "$DIST/ng-add/"
cp versioning/daff.schema.json "$DIST/versioning/"
cp ../../node_modules/@angular/build/src/builders/dev-server/schema.json "$DIST/versioning/dev-server.schema.json"
cp -r ng-add/files "$DIST/ng-add/"
cp README.md "$DIST/"

node scripts/copy-package-json.js

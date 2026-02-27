#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Scaffold base Angular apps for @daffodil/commerce e2e tests.
#
# Called by the GitHub Actions setup job. Creates 2 base apps
# (scss + css) with @daffodil/commerce installed from Verdaccio.
#
# Prerequisites:
#   - Verdaccio running on localhost:4873
#   - npm config set @daffodil:registry http://localhost:4873
#   - @daffodil/commerce published to Verdaccio
#
# Output:
#   $WORK_DIR/test-daff-app      (scss base app)
#   $WORK_DIR/test-daff-app-css  (css base app)
# ============================================================

WORK_DIR="${WORK_DIR:-/tmp/daffodil-commerce-test}"
APP_NAME="test-daff-app"

rm -rf "$WORK_DIR"
mkdir -p "$WORK_DIR"

# --- SCSS Base App ---
echo "=== Creating scss base app ==="
cd "$WORK_DIR"
npx -y @angular/cli@20 new "$APP_NAME" \
  --style=scss \
  --skip-tests \
  --defaults

echo "--- Installing @daffodil/commerce into scss base app ---"
cd "$WORK_DIR/$APP_NAME"
npm install @daffodil/commerce

# --- CSS Base App ---
echo ""
echo "=== Creating css base app ==="
cd "$WORK_DIR"
npx -y @angular/cli@20 new "${APP_NAME}-css" \
  --style=css \
  --skip-tests \
  --defaults

echo "--- Installing @daffodil/commerce into css base app ---"
cd "$WORK_DIR/${APP_NAME}-css"
npm install @daffodil/commerce

echo ""
echo "=== Base apps scaffolded in $WORK_DIR ==="

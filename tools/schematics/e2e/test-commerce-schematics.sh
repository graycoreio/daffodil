#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Scaffold base Angular apps for @daffodil/commerce e2e tests.
#
# Called by the GitHub Actions setup job. Creates base apps
# for use by the test matrix jobs.
#
# Output:
#   $WORK_DIR/test-daff-app        (scss standalone base app)
#   $WORK_DIR/test-daff-app-css    (css standalone base app)
#   $WORK_DIR/test-daff-app-module (scss module base app)
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

# --- CSS Base App ---
echo ""
echo "=== Creating css base app ==="
cd "$WORK_DIR"
npx -y @angular/cli@20 new "${APP_NAME}-css" \
  --style=css \
  --skip-tests \
  --defaults

# --- Module Base App ---
echo ""
echo "=== Creating module base app ==="
cd "$WORK_DIR"
npx -y @angular/cli@20 new "${APP_NAME}-module" \
  --style=scss \
  --skip-tests \
  --standalone=false \
  --defaults


echo ""
echo "=== Base apps scaffolded in $WORK_DIR ==="

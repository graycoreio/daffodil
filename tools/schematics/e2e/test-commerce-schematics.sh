#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Build test for @daffodil/commerce schematics
#
# Tests that `ng add @daffodil/commerce` produces a buildable
# Angular app for each driver option and app configuration.
#
# Usage:
#   ./test-commerce-schematics.sh          # run all 7 cases
#   ./test-commerce-schematics.sh 1 3 6    # run specific cases
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
WORK_DIR="${WORK_DIR:-/tmp/daffodil-commerce-e2e}"
APP_NAME="test-daff-app"
ALL_CASES=(1 2 3 4 5 6 7)
CASES=("${@:-${ALL_CASES[@]}}")

# If no args provided, use all cases
if [[ $# -eq 0 ]]; then
  CASES=("${ALL_CASES[@]}")
fi

cleanup() {
  echo "--- Cleaning up $WORK_DIR ---"
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

FAILURES=()
PASSES=()

run_ng_add() {
  local driver="$1"

  # Use "ng generate" to run the local schematic from locally built tarball.
  CI=true npx ng generate @daffodil/commerce:ng-add \
    --driver="$driver" \
    --is-new-project \
    --defaults
}

report_result() {
  local case_num="$1"
  local desc="$2"
  local status="$3"

  if [[ "$status" == "pass" ]]; then
    echo "  PASS: Case $case_num - $desc"
    PASSES+=("$case_num")
  else
    echo "  FAIL: Case $case_num - $desc"
    FAILURES+=("$case_num")
  fi
}

copy_base_app() {
  local base_dir="$1"
  local dest_dir="$2"
  rm -rf "$dest_dir"
  cp -a "$base_dir" "$dest_dir"
  cd "$dest_dir"
}

# Angular budget needs to be increased when using the demo driver
raise_budget() {
  sed -i 's/"maximumWarning": "[^"]*"/"maximumWarning": "2mb"/; s/"maximumError": "[^"]*"/"maximumError": "3mb"/' angular.json
}

# ============================================================
# Phase 1: Build & pack @daffodil/commerce
# ============================================================
echo "=== Phase 1: Building @daffodil/commerce ==="
cd "$REPO_ROOT/tools/schematics"
npm run build

# Replace 0.0.0-PLACEHOLDER versions in the built package.json so that
# `npm install <tarball>` can resolve deps from the registry instead of
# failing on a non-existent version.  Uses "*" so any installed version satisfies.
sed -i 's/0\.0\.0-PLACEHOLDER/*/g' "$REPO_ROOT/dist/commerce/package.json"

npm run pack
TARBALL="$(ls "$REPO_ROOT/dist/commerce/"*.tgz | head -1)"
echo "Built tarball: $TARBALL"

# ============================================================
# Phase 2: Scaffold base apps
# ============================================================
echo ""
echo "=== Phase 2: Scaffolding base apps ==="
rm -rf "$WORK_DIR"
mkdir -p "$WORK_DIR"

# --- Base App A: standalone with app.config.ts (default Angular 20 app) ---
echo "--- Creating standalone base app ---"
cd "$WORK_DIR"
npx -y @angular/cli@20 new "$APP_NAME" \
  --style=scss \
  --skip-tests \
  --defaults

STANDALONE_APP_DIR="$WORK_DIR/$APP_NAME"

# --- Base App B: module-based app (for case 6) ---
needs_case_6=false
for c in "${CASES[@]}"; do
  if [[ "$c" == "6" ]]; then
    needs_case_6=true
    break
  fi
done

MODULE_APP_DIR="$WORK_DIR/${APP_NAME}-module"
if [[ "$needs_case_6" == "true" ]]; then
  echo "--- Creating module-based base app ---"
  echo "Copying standalone base app to module-based app directory"
  cp -a "$STANDALONE_APP_DIR" "$MODULE_APP_DIR"

  # Create an app-module.ts to trigger module-based detection
  echo "Creating app-module.ts to trigger module-based detection"
  cat > "$MODULE_APP_DIR/src/app/app-module.ts" <<'APPMOD'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
APPMOD

  # Install the commerce tarball into module-based app
  echo "- Installing commerce tarball into module-based base app (npm)..."
  cd "$MODULE_APP_DIR"
  npm install "$TARBALL"
fi

echo ""

# Install the commerce tarball into standalone app
echo "- Installing commerce tarball into standalone base app (npm)..."
cd "$STANDALONE_APP_DIR"
npm install "$TARBALL"

# ============================================================
# Phase 3: Run test cases
# ============================================================
echo ""
echo "=== Phase 3: Running test cases ==="

for case_num in "${CASES[@]}"; do
  echo ""
  echo "--- Case $case_num ---"

  case "$case_num" in
    1)
      # Driver: demo, standalone, app.config.ts
      desc="driver=demo (standalone, app.config.ts)"
      copy_base_app "$STANDALONE_APP_DIR" "$WORK_DIR/case-1"
      raise_budget
      if run_ng_add "demo" && npx ng build 2>&1; then
        report_result "$case_num" "$desc" "pass"
      else
        report_result "$case_num" "$desc" "fail"
      fi
      ;;

    2)
      # Driver: magento, standalone, app.config.ts
      desc="driver=magento (standalone, app.config.ts)"
      copy_base_app "$STANDALONE_APP_DIR" "$WORK_DIR/case-2"
      if run_ng_add "magento" && npx ng build 2>&1; then
        report_result "$case_num" "$desc" "pass"
      else
        report_result "$case_num" "$desc" "fail"
      fi
      ;;

    3)
      # Driver: shopify, standalone, app.config.ts
      desc="driver=shopify (standalone, app.config.ts)"
      copy_base_app "$STANDALONE_APP_DIR" "$WORK_DIR/case-3"
      if run_ng_add "shopify" && npx ng build 2>&1; then
        report_result "$case_num" "$desc" "pass"
      else
        report_result "$case_num" "$desc" "fail"
      fi
      ;;

    4)
      # Driver: in-memory, standalone, app.config.ts
      desc="driver=in-memory (standalone, app.config.ts)"
      copy_base_app "$STANDALONE_APP_DIR" "$WORK_DIR/case-4"
      if run_ng_add "in-memory" && npx ng build 2>&1; then
        report_result "$case_num" "$desc" "pass"
      else
        report_result "$case_num" "$desc" "fail"
      fi
      ;;

    5)
      # --skip-package-json: schematic generates code without adding deps or running npm install.
      # Only verify the schematic completes without error (no build check since deps aren't installed).
      desc="driver=demo, --skip-package-json (schematic-only)"
      copy_base_app "$STANDALONE_APP_DIR" "$WORK_DIR/case-5"
      if CI=true npx ng generate @daffodil/commerce:ng-add \
           --driver="demo" --is-new-project --skip-package-json --defaults 2>&1; then
        report_result "$case_num" "$desc" "pass"
      else
        report_result "$case_num" "$desc" "fail"
      fi
      ;;

    6)
      # Module-based app: should be rejected with error
      desc="module-based app rejection"
      copy_base_app "$MODULE_APP_DIR" "$WORK_DIR/case-6"
      # We expect ng add to fail when run from module-based apps
      if run_ng_add "demo" 2>&1; then
        report_result "$case_num" "$desc" "fail"
      else
        report_result "$case_num" "$desc" "pass"
      fi
      ;;

    7)
      # Standalone with main.ts only (no app.config.ts) - fallback config path
      desc="standalone, main.ts fallback (no app.config.ts)"
      copy_base_app "$STANDALONE_APP_DIR" "$WORK_DIR/case-7"

      # Move app config into main.ts and delete app.config.ts
      cat > "src/main.ts" <<'MAIN'
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: []
});
MAIN
      rm -f "src/app/app.config.ts"
      raise_budget

      if run_ng_add "demo" && npx ng build 2>&1; then
        report_result "$case_num" "$desc" "pass"
      else
        report_result "$case_num" "$desc" "fail"
      fi
      ;;

    *)
      echo "  SKIP: Unknown case $case_num"
      ;;
  esac
done

# ============================================================
# Phase 4: Report results
# ============================================================
echo ""
echo "==============================="
echo "  Results: ${#PASSES[@]} passed, ${#FAILURES[@]} failed (${#CASES[@]} total)"
echo "==============================="

if [[ ${#FAILURES[@]} -gt 0 ]]; then
  echo "  Failed test cases: ${FAILURES[*]}"
  exit 1
else
  echo "  All test cases passed."
  exit 0
fi

#!/usr/bin/env bash
set -euo pipefail

VERSION="${1:-}"
if [ -z "$VERSION" ]; then
  echo "ERROR: Magento version argument is required (e.g. 2.4.3)" && exit 1
fi

# Find all .ts files containing the version-less call forms and patch them in-place
grep -rl \
  -e 'provideDaffExternalRouterMagentoDriver()' \
  -e 'getDaffExternalRouterMagentoDriverService()' \
  --include='*.ts' . \
| while IFS= read -r file; do
  sed -i \
    -e "s/provideDaffExternalRouterMagentoDriver()/provideDaffExternalRouterMagentoDriver('${VERSION}')/g" \
    -e "s/getDaffExternalRouterMagentoDriverService()/getDaffExternalRouterMagentoDriverService('${VERSION}')/g" \
    "$file"
  echo "Patched: $file"
done

echo "Set Magento version: ${VERSION}"

/**
 * Post-build script that patches the `./driver/magento` export condition in the
 * dist package.json so that `default` resolves to the v2.4.3 bundle rather than
 * the shared-models-only bundle that ng-packagr generates for the root entry point.
 *
 * Run automatically via the `postbuild` script in package.json.
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, '../../../dist/external-router/package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));

pkg.exports['./driver/magento/auto'] = {
  'magento-2.4.1': { types: './driver/magento/2.4.1/index.d.ts', default: './fesm2022/daffodil-external-router-driver-magento-2.4.1.mjs' },
  'magento-2.4.2': { types: './driver/magento/2.4.2/index.d.ts', default: './fesm2022/daffodil-external-router-driver-magento-2.4.2.mjs' },
  'magento-2.4.3': { types: './driver/magento/2.4.3/index.d.ts', default: './fesm2022/daffodil-external-router-driver-magento-2.4.3.mjs' },
};

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

import { Dgeni } from 'dgeni';
import { rimraf } from 'rimraf';

import {
  apiDocs,
  designApiPackage,
  storefrontApiPackage,
} from './src/transforms/daffodil-api-package';
import {
  designExamplePackage,
  storefrontExamplePackage,
} from './src/transforms/daffodil-design-examples-package';
import {
  packageDocsPackage,
  guideDocsPackage,
  explanationDocsPackage,
  designDocsPackage,
  storefrontDocsPackage,
} from './src/transforms/daffodil-guides-package';
import { daffodilRoutesPackage } from './src/transforms/daffodil-routes-package';

async function build() {
  await rimraf('../../dist/docs-assets/docs/*', { glob: true });
  try {
    await new Dgeni([apiDocs]).generate();
    // base docs
    await Promise.all([
      new Dgeni([packageDocsPackage]).generate(),
      new Dgeni([guideDocsPackage]).generate(),
      new Dgeni([explanationDocsPackage]).generate(),
    ]);
    // design docs
    // run them after base docs so that config between shared processors does not conflict
    // a design flaw of dgeni, it wasn't meant to be run in parallel
    // run API docs first to collect linkable symbols
    await Promise.all([
      new Dgeni([designApiPackage]).generate(),
      new Dgeni([storefrontApiPackage]).generate(),
    ]);
    await Promise.all([
      new Dgeni([designDocsPackage]).generate(),
      new Dgeni([storefrontDocsPackage]).generate(),
      new Dgeni([designExamplePackage]).generate(),
      new Dgeni([storefrontExamplePackage]).generate(),
    ]);
    await new Dgeni([daffodilRoutesPackage]).generate();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

build();

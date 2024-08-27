import { Dgeni } from 'dgeni';
import { rimraf } from 'rimraf';

import {
  apiDocs,
  designApiPackage,
} from './src/transforms/daffodil-api-package';
import { designExamplePackage } from './src/transforms/daffodil-design-examples-package';
import {
  packageDocsPackage,
  guideDocsPackage,
  explanationDocsPackage,
  designDocsPackage,
} from './src/transforms/daffodil-guides-package';

rimraf('../../dist/docs/*', { glob: true }).then(() => {
  new Dgeni([apiDocs]).generate().then(() => {
    // base docs
    Promise.all([
      new Dgeni([packageDocsPackage]).generate().catch((err) => {
        console.log(err);
        process.exit(1);
      }),
      new Dgeni([guideDocsPackage]).generate().catch((err) => {
        console.log(err);
        process.exit(1);
      }),
      new Dgeni([explanationDocsPackage]).generate().catch((err) => {
        console.log(err);
        process.exit(1);
      }),
    ]).then(() => {
      // design docs
      // run them after base docs so that config between shared processors does not conflict
      // a design flaw of dgeni, it wasn't meant to be run in parallel
      new Dgeni([designApiPackage]).generate().then(() => {
        new Dgeni([designDocsPackage]).generate().catch((err) => {
          console.log(err);
          process.exit(1);
        });
        new Dgeni([designExamplePackage]).generate().catch((err) => {
          console.log(err);
          process.exit(1);
        });
      }).catch((err) => {
        console.log(err);
        process.exit(1);
      });
    }).catch((err) => {
      console.log(err);
      process.exit(1);
    });

  }).catch((err) => {
    console.log(err);
    process.exit(1);
  });
});

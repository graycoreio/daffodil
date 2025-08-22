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
import { daffodilRoutesPackage } from './src/transforms/daffodil-routes-package';

// base docs
const runBaseDocsSequentially = async () => {
  if (process.platform === 'win32') {
    // Sequential execution on Windows
    try {
      await new Dgeni([packageDocsPackage]).generate();
      await new Dgeni([guideDocsPackage]).generate();
      await new Dgeni([explanationDocsPackage]).generate();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  } else {
    // Parallel execution on other platforms
    await Promise.all([
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
    ]);
  }
};

// design docs
const runDesignDocsSequentially = async () => {
  if (process.platform === 'win32') {
    try {
      await new Dgeni([designDocsPackage]).generate();
      await new Dgeni([designExamplePackage]).generate();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  } else {
    await Promise.all([
      new Dgeni([designDocsPackage]).generate().catch((err) => {
        console.log(err);
        process.exit(1);
      }),
      new Dgeni([designExamplePackage]).generate().catch((err) => {
        console.log(err);
        process.exit(1);
      }),
    ]);
  }
};

rimraf('../../dist/docs/*', { glob: true }).then(() => {
  // API docsgen must be run first so that symbols can be linked
  new Dgeni([apiDocs]).generate().then(() => {
    runBaseDocsSequentially().then(() => {
      // run design docs after base docs so that config between shared processors does not conflict
      // a design flaw of dgeni, it wasn't meant to be run in parallel
      new Dgeni([designApiPackage]).generate().then(async () => {
        await runDesignDocsSequentially();

        new Dgeni([daffodilRoutesPackage]).generate().catch((err) => {
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

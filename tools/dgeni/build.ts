import { Dgeni } from 'dgeni';
import { rimraf } from 'rimraf';

import { apiDocs } from './src/transforms/daffodil-api-package';
import { designExamplePackage } from './src/transforms/daffodil-design-examples-package';
import {
  packageDocsPackage,
  guideDocsPackage,
  explanationDocsPackage,
} from './src/transforms/daffodil-guides-package';
import { daffodilPalettePackage } from './src/transforms/daffodil-palette-package';

rimraf('../../dist/docs/*', { glob: true }).then(() => {
  new Dgeni([packageDocsPackage]).generate().catch(() => process.exit(1));
  new Dgeni([guideDocsPackage]).generate().catch(() => process.exit(1));
  new Dgeni([explanationDocsPackage]).generate().catch(() => process.exit(1));
  new Dgeni([apiDocs]).generate().catch(() => process.exit(1));
  new Dgeni([designExamplePackage]).generate().catch(() => process.exit(1));
  new Dgeni([daffodilPalettePackage]).generate().catch(() => process.exit(1));
});

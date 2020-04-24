import { Dgeni } from 'dgeni';
import { apiDocs } from './src/transforms/daffodil-api-package';
import { guideDocPackage } from './src/transforms/daffodil-guides-package';
import { designExamplePackage } from './src/transforms/daffodil-design-examples-package';

import * as rimraf from 'rimraf';

rimraf('../../dist/docs/**/*', function() {
	new Dgeni([guideDocPackage]).generate().catch(() => process.exit(1));
	new Dgeni([apiDocs]).generate().catch(() => process.exit(1));
	new Dgeni([designExamplePackage]).generate().catch(() => process.exit(1));
});

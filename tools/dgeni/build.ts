import { Dgeni } from 'dgeni';
import { apiDocs } from './src/transforms/daffodil-api-package';

new Dgeni([apiDocs]).generate().catch(() => process.exit(1));

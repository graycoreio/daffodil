import { Dgeni } from 'dgeni';
import { apiDocs } from './src/transforms/daffodil-api-package';
import * as rimraf  from 'rimraf';

rimraf("../../dist/docs", function () { 
  new Dgeni([apiDocs]).generate().catch(() => process.exit(1));
});

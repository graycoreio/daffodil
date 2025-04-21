import {
  DaffApiDoc,
  DaffPackageGuideDoc,
} from '../doc/public_api';

/**
 * Groups a list of API docs by roles.
 */
export const daffDocsApiArrayToDict = (docs: Array<DaffApiDoc>): DaffPackageGuideDoc['api'] =>
  docs.reduce((acc, apiDoc) => {
    if (acc[apiDoc.role]) {
      acc[apiDoc.role].push(apiDoc);
    } else {
      acc[apiDoc.role] = [apiDoc];
    }
    return acc;
  }, {});

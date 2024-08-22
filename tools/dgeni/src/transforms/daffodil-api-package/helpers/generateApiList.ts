import { Document } from 'dgeni';

import { GenerateNavListProcessor } from '../../../processors/generateNavList';

interface DaffDocsApiNavigationList {
  id: string;
  title: string;
  path: string;
  docType: string;
  docTypeShorthand: string;
  children: Array<DaffDocsApiNavigationList>;
}

export const transformApiNavList: GenerateNavListProcessor['transform'] = (docs: Array<Document>): DaffDocsApiNavigationList => ({
  id: '',
  title: '',
  path: '',
  docType: '',
  docTypeShorthand: '',
  children: docs
    .filter(doc => doc.docType === 'package')
  // sort alphabetically
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map(doc => getPackageInfo(doc)),
});

export function getPackageInfo(packageDoc): DaffDocsApiNavigationList {
  return {
    ...getExportInfo(packageDoc),
    title: packageDoc.name,
    docType: 'package',
    docTypeShorthand: 'pk',
    children: packageDoc.exports
      .filter(doc => doc.docType !== 'package')
      .map(getExportInfo),
  };
}

function getExportInfo(exportDoc): DaffDocsApiNavigationList {
  return {
    id: exportDoc.id,
    title: exportDoc.name,
    path: `${exportDoc.path[0] === '/' ? '' : '/'}${exportDoc.path}`,
    docType: getDocType(exportDoc),
    docTypeShorthand: exportDoc.docType.charAt(0),
    children: [],
  };
}

function getDocType(doc): DaffDocsApiNavigationList['docType'] {
  // We map `let` and `var` types to `const`
  if (['let', 'var'].indexOf(doc.docType) !== -1) {
    return 'const';
  }
  return doc.docType;
}

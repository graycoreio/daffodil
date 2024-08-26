import { Document } from 'dgeni';

import { GenerateNavListProcessor } from '../../../processors/generateNavList';

interface DaffDocsApiNavigationList {
  id: string;
  title: string;
  path: string;
  description?: string;
  docType: string;
  docTypeShorthand: string;
  children: Array<DaffDocsApiNavigationList>;
}

const comparePackage = (aDoc: {name: string}, bDoc: {name: string}): -1 | 0 | 1 => {
  const a = aDoc.name.split('/');
  const b = bDoc.name.split('/');
  // equalize array sizes with value that will always be sorted first
  const size = Math.max(a.length, b.length);
  const aSegs = a.concat(Array(size - a.length).fill(''));
  const bSegs = b.concat(Array(size - b.length).fill(''));
  return aSegs.reduce((acc, segment, i) =>
    acc !== 0
      ? acc
      : segment < bSegs[i]
        ? -1
        : segment > bSegs[i]
          ? 1
          : 0,
    <-1 | 0 | 1>0,
  );
};

export const transformApiNavList: GenerateNavListProcessor['transform'] = (docs: Array<Document>): DaffDocsApiNavigationList => ({
  id: '',
  title: '',
  path: '',
  docType: '',
  docTypeShorthand: '',
  children: docs
    .filter(doc => doc.docType === 'package')
    // sort alphabetically
    .sort(comparePackage)
    .map(doc => getPackageInfo(doc)),
});

export function getPackageInfo(packageDoc): DaffDocsApiNavigationList {
  return {
    ...getExportInfo(packageDoc),
    title: packageDoc.name,
    description: packageDoc.description,
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

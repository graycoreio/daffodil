import { DaffDocsApiNavList } from '@daffodil/docs-utils';

import { GenerateNavListProcessor } from '../../../processors/generateNavList';
import { DocumentWithDepth } from '../../../processors/packages';

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

export const transformApiNavList: GenerateNavListProcessor['transform'] = (docs: Array<DocumentWithDepth>): DaffDocsApiNavList => ({
  id: '',
  title: '',
  path: '',
  docType: '',
  children: docs
    .filter(doc => doc.docType === 'package' && doc.depth === 0)
    // sort alphabetically
    .sort(comparePackage)
    .map(doc => getPackageInfo(doc)),
});

export function getPackageInfo(packageDoc): DaffDocsApiNavList {
  return {
    ...getExportInfo(packageDoc),
    title: packageDoc.name,
    description: packageDoc.description,
    docType: 'package',
    children: packageDoc.exports
      .map((doc) => doc.docType === 'package' ? getPackageInfo(doc) : getExportInfo(doc)),
  };
}

function getExportInfo(exportDoc): DaffDocsApiNavList {
  return {
    id: exportDoc.id,
    title: exportDoc.name,
    path: `${exportDoc.path[0] === '/' ? '' : '/'}${exportDoc.path}`,
    docType: getDocType(exportDoc),
    children: exportDoc.docType === 'package'
      ? exportDoc.exports
        .map(getExportInfo)
      : [],
  };
}

function getDocType(doc): DaffDocsApiNavList['docType'] {
  // We map `let` and `var` types to `const`
  if (['let', 'var'].indexOf(doc.docType) !== -1) {
    return 'const';
  }
  return doc.docType;
}

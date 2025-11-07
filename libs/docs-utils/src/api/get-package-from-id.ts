import { DaffApiDoc } from '../doc/api/doc.type';

export const daffDocsGetPackageFromId = (doc: DaffApiDoc): string => {
  const pkg = doc.id.match(/(?<package>.*)\/src/).groups?.package;
  if (!pkg) {
    throw new Error(`${doc.id} does not contain a package`);
  }
  return `@daffodil/${pkg}`;
};

import { DaffDocKind } from './enum';
import { DAFF_DOC_KIND_PATH_SEGMENT_MAP } from './path-segment-map';

const DOC_KIND_REGEX = {
  [DaffDocKind.GUIDE]: /\/docs\/guides\/(?<path>.+)\.md/,
  [DaffDocKind.EXPLANATION]: /\/docs\/explanations\/(?<path>.+)\.md/,
  [DaffDocKind.COMPONENT]: /\/libs\/design\/(?<path>.+)\/README\.md/,
  [DaffDocKind.PACKAGE]: /\/libs\/(?<path>.+)\.md/,
  [DaffDocKind.API]: /\/libs\/(?<path>.+)\.ts/,
};

/**
 * Returns the kind of document based on the passed filepath.
 *
 * @param path the file path relative to the project root.
 */
export const daffDocsGetKind = (path: string): string => (<Array<keyof typeof DOC_KIND_REGEX>>Object.keys(DOC_KIND_REGEX)).find((k) => DOC_KIND_REGEX[k].test(path));

/**
 * Returns the URL that links to the document referenced by the passed path.
 *
 * @param path the file path relative to the project root.
 */
// TODO: combine with path generation logic in the creation of docs own paths
export const daffDocsGetLinkUrl = (path: string): string => {
  const kind = daffDocsGetKind(path);
  const match = DOC_KIND_REGEX[kind]?.exec(path);

  if (!match) {
    return path;
  }

  const matchPath = match.groups.path.replaceAll(/\/(?:readme|src|guides)/gi, '');

  switch (kind) {
    case DaffDocKind.GUIDE:
    case DaffDocKind.EXPLANATION:
    case DaffDocKind.API:
      return `/docs/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/${matchPath}`;

    case DaffDocKind.PACKAGE:
      return `/docs/packages/${matchPath}`;

    default:
      return path;
  }
};

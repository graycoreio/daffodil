import { DaffDocKind } from './enum';

export const DAFF_DOC_KIND_PATH_SEGMENT_MAP = <const>{
  [DaffDocKind.GUIDE]: 'guides',
  [DaffDocKind.EXPLANATION]: 'explanations',
  [DaffDocKind.PACKAGE]: 'packages',
  [DaffDocKind.API]: 'api',
  [DaffDocKind.EXAMPLE]: 'examples',
};

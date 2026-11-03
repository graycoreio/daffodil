import { ServerRoute } from '@angular/ssr';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { daffioDocsServerRoutes } from '../routing/server-routes';

const DESIGN_CHILD_SECTIONS = [
  DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT],
  'behaviors',
];

export const docsDesignServerRoutes = (parent: string): Array<ServerRoute> => [
  ...DESIGN_CHILD_SECTIONS.flatMap((child) => daffioDocsServerRoutes(`${parent}/${child}`)),
  ...daffioDocsServerRoutes(parent, DESIGN_CHILD_SECTIONS),
];

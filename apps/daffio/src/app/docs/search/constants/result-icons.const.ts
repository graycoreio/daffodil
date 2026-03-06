import { IconDefinition } from '@fortawesome/angular-fontawesome';
import {
  faClipboard,
  faFileLines,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBoxOpen,
  faCode,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';

import { DaffDocKind } from '@daffodil/docs-utils';

export const DAFF_DOCS_SEARCH_RESULT_ICONS: Record<DaffDocKind, IconDefinition> = {
  [DaffDocKind.GUIDE]: faFileLines,
  [DaffDocKind.EXPLANATION]: faFileLines,
  [DaffDocKind.PACKAGE]: faBoxOpen,
  [DaffDocKind.API]: faCode,
  [DaffDocKind.EXAMPLE]: faClipboard,
  [DaffDocKind.COMPONENT]: faCubes,
};

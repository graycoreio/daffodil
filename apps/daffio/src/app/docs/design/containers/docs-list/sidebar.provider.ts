import { DaffioSidebarRegistration } from 'apps/daffio/src/app/core/sidebar/registration/type';

import { DaffioDocsDesignListContainer } from './docs-list.component';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../../../containers/docs-list/sidebar.provider';

export const DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_ID = 'daffioDocsList';

export const DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  ...DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
  body: DaffioDocsDesignListContainer,
};

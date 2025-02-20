import { DaffioDocsDesignListContainer } from './docs-list.component';
import { DaffioSidebarSectionRegistration } from '../../../../core/sidebar/interfaces/section-registration.interface';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../../../containers/docs-list/sidebar.provider';

export const DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_ID = 'daffioDocsList';

export const DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION: DaffioSidebarSectionRegistration = {
  ...DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
  body: DaffioDocsDesignListContainer,
};

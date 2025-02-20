import { DaffioApiNavListSidebarContainer } from './component';
import { DaffioSidebarSectionRegistration } from '../../../core/sidebar/interfaces/section-registration.interface';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../../containers/docs-list/sidebar.provider';

export const DAFFIO_API_NAV_LIST_SIDEBAR_REGISTRATION: DaffioSidebarSectionRegistration = {
  ...DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
  body: DaffioApiNavListSidebarContainer,
};

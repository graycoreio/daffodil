import { DaffioApiNavListSidebarContainer } from './component';
import { DaffioSidebarRegistration } from '../../../core/sidebar/interfaces/registration.type';
import { DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION } from '../../containers/docs-list/sidebar.provider';

export const DAFFIO_API_NAV_LIST_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  ...DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION,
  body: DaffioApiNavListSidebarContainer,
};

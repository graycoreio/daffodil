import { DaffioApiNavListSidebarContainer } from './component';
import { DaffioSidebarFooterComponent } from '../../../core/sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from '../../../core/sidebar/components/sidebar-header/sidebar-header.component';
import { DAFFIO_DOCS_LIST_SIDEBAR_ID } from '../../containers/docs-list/sidebar.provider';

export const DAFFIO_API_NAV_LIST_SIDEBAR_REGISTRATION = {
  id: DAFFIO_DOCS_LIST_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioApiNavListSidebarContainer,
  footer: DaffioSidebarFooterComponent,
};

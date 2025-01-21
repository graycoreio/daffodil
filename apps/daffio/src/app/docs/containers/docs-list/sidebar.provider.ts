import { DaffioDocsListContainer } from './docs-list.component';
import { DaffioDocsSidebarFooterComponent } from '../../../core/sidebar/components/docs/footer/footer.component';
import { DaffioSidebarHeaderComponent } from '../../../core/sidebar/components/sidebar-header/sidebar-header.component';
import { DaffioSidebarRegistration } from '../../../core/sidebar/registration/type';

export const DAFFIO_DOCS_LIST_SIDEBAR_ID = 'daffioDocsList';

export const DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  id: DAFFIO_DOCS_LIST_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioDocsListContainer,
  footer: DaffioDocsSidebarFooterComponent,
  alwaysShowFooter: true,
};

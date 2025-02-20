import { DaffioDocsListContainer } from './docs-list.component';
import { DaffioDocsSidebarFooterComponent } from '../../../core/sidebar/components/docs/footer/footer.component';
import { DaffioSidebarHeaderComponent } from '../../../core/sidebar/components/sidebar-header/sidebar-header.component';
import { DaffioSidebarSectionRegistration } from '../../../core/sidebar/interfaces/section-registration.interface';

export const DAFFIO_DOCS_LIST_SIDEBAR_ID = 'daffioDocsList';

export const DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION: DaffioSidebarSectionRegistration = {
  id: DAFFIO_DOCS_LIST_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioDocsListContainer,
  footer: DaffioDocsSidebarFooterComponent,
  footerStrategy: () => true,
};

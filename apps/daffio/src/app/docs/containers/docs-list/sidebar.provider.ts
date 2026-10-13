import { DaffioDocsListContainer } from './docs-list.component';
import { DaffioDocsSidebarFooterComponent } from '../../../core/sidebar/components/docs/footer/footer.component';
import { DaffioSidebarRegistration } from '../../../core/sidebar/interfaces/registration.type';

export const DAFFIO_DOCS_LIST_SIDEBAR_ID = 'daffioDocsList';

export const DAFFIO_DOCS_LIST_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  id: DAFFIO_DOCS_LIST_SIDEBAR_ID,
  body: DaffioDocsListContainer,
  footer: DaffioDocsSidebarFooterComponent,
  footerStrategy: () => true,
};

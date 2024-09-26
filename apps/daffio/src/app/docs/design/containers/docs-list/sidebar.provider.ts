import { DaffioDocsDesignListContainer } from './docs-list.component';
import { DaffioSidebarFooterComponent } from '../../../../core/sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from '../../../../core/sidebar/components/sidebar-header/sidebar-header.component';

export const DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_ID = 'daffioDocsList';

export const DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_REGISTRATION = {
  id: DAFFIO_DOCS_DESIGN_LIST_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioDocsDesignListContainer,
  footer: DaffioSidebarFooterComponent,
};

import { DaffioDocsTocListContainer } from './toc-list.component';
import { DaffioSidebarHeaderComponent } from '../../../core/sidebar/components/sidebar-header/sidebar-header.component';
import { DaffioSidebarRegistration } from '../../../core/sidebar/registration/type';

export const DAFFIO_DOCS_TOC_SIDEBAR_ID = 'daffioDocsTableOfContents';

export const DAFFIO_DOCS_TOC_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  id: DAFFIO_DOCS_TOC_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioDocsTocListContainer,
};

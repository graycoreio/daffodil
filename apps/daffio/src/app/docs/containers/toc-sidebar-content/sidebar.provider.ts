import { DaffSidebarSideEnum } from '@daffodil/design/sidebar';

import { DaffioDocsTocSidebarContentContainer } from './toc-sidebar-content.component';
import { DaffioSidebarRegistration } from '../../../core/sidebar/interfaces/registration.type';
import { DaffioDocsTocSidebarHeaderComponent } from '../../components/table-of-contents/sidebar/sidebar-header/sidebar-header.component';

export const DAFFIO_DOCS_TOC_SIDEBAR_ID = 'daffioDocsTableOfContents';

export const DAFFIO_DOCS_TOC_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  id: DAFFIO_DOCS_TOC_SIDEBAR_ID,
  header: DaffioDocsTocSidebarHeaderComponent,
  body: DaffioDocsTocSidebarContentContainer,
  side: DaffSidebarSideEnum.Right,
};

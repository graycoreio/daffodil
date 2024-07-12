import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicSidebarComponent } from './basic-sidebar/basic-sidebar.component';
import { OverandUnderSidebarsComponent } from './over-and-under-sidebars/over-and-under-sidebars.component';
import { SideFixedSidebarComponent } from './side-fixed-sidebar/side-fixed-sidebar.component';
import { SidebarWithStickyContentComponent } from './sidebar-with-sticky-content/sidebar-with-sticky-content.component';



export const SIDEBAR_EXAMPLES = [
  BasicSidebarComponent,
  OverandUnderSidebarsComponent,
  SideFixedSidebarComponent,
  SidebarWithStickyContentComponent,
];

export const provideDaffDesignSidebarExamples = () =>
  provideDaffDocsExampleComponents(...SIDEBAR_EXAMPLES);

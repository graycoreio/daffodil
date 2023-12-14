import { ComponentExample } from '@daffodil/design';

import { BasicSidebarComponent } from './basic-sidebar/basic-sidebar.component';
import { BasicSidebarModule } from './basic-sidebar/basic-sidebar.module';
import { OverandUnderSidebarsComponent } from './over-and-under-sidebars/over-and-under-sidebars.component';
import { OverandUnderSidebarsModule } from './over-and-under-sidebars/over-and-under-sidebars.module';
import { SideFixedSidebarComponent } from './side-fixed-sidebar/side-fixed-sidebar.component';
import { SideFixedSidebarModule } from './side-fixed-sidebar/side-fixed-sidebar.module';
import { SidebarWithStickyContentComponent } from './sidebar-with-sticky-content/sidebar-with-sticky-content.component';
import { SidebarWithStickyContentModule } from './sidebar-with-sticky-content/sidebar-with-sticky-content.module';

export const SIDEBAR_EXAMPLES: ComponentExample[] = [
  { component: BasicSidebarComponent, module: BasicSidebarModule },
  { component: SideFixedSidebarComponent, module: SideFixedSidebarModule },
  { component: OverandUnderSidebarsComponent, module: OverandUnderSidebarsModule },
  { component: SidebarWithStickyContentComponent, module: SidebarWithStickyContentModule },
];

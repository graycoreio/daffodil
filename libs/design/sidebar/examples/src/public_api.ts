import { ComponentExample } from '@daffodil/design';

import { BasicSidebarComponent } from './basic-sidebar/basic-sidebar.component';
import { BasicSidebarModule } from './basic-sidebar/basic-sidebar.module';
import { FixedAndOverSidebarComponent } from './fixed-and-over-sidebar/fixed-and-over-sidebar.component';
import { FixedAndOverSidebarModule } from './fixed-and-over-sidebar/fixed-and-over-sidebar.module';
import { SidebarWithStickyComponent } from './sidebar-with-sticky/sidebar-with-sticky.component';
import { SidebarWithStickyModule } from './sidebar-with-sticky/sidebar-with-sticky.module';
import { TwoFixedSidebarsEitherSideComponent } from './two-fixed-sidebars-either-side/two-fixed-sidebars-either-side.component';
import { TwoFixedSidebarsEitherSideModule } from './two-fixed-sidebars-either-side/two-fixed-sidebars-either-side.module';
import { UnderSidebarComponent } from './under-sidebar/under-sidebar.component';
import { UnderSidebarModule } from './under-sidebar/under-sidebar.module';

export const SIDEBAR_EXAMPLES: ComponentExample[] = [
  { component: BasicSidebarComponent, module: BasicSidebarModule },
  { component: SidebarWithStickyComponent, module: SidebarWithStickyModule },
  { component: TwoFixedSidebarsEitherSideComponent, module: TwoFixedSidebarsEitherSideModule },
  { component: FixedAndOverSidebarComponent, module: FixedAndOverSidebarModule },
  { component: UnderSidebarComponent, module: UnderSidebarModule },
];

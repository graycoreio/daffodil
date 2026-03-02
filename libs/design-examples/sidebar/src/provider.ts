import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignSidebarExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-sidebar',
    component: () => import('./basic-sidebar/basic-sidebar.component').then(c => c.BasicSidebarExampleComponent),
  },
  {
    id: 'over-and-under-sidebars',
    component: () => import('./over-and-under-sidebars/over-and-under-sidebars.component').then(c => c.OverandUnderSidebarsExampleComponent),
  },
  {
    id: 'side-fixed-sidebar',
    component: () => import('./side-fixed-sidebar/side-fixed-sidebar.component').then(c => c.SideFixedSidebarExampleComponent),
  },
  {
    id: 'sidebar-sides',
    component: () => import('./sidebar-sides/sidebar-sides.component').then(c => c.SidebarSidesExampleComponent),
  },
  {
    id: 'sidebar-with-sticky-content',
    component: () => import('./sidebar-with-sticky-content/sidebar-with-sticky-content.component').then(c => c.SidebarWithStickyContentExampleComponent),
  },
));


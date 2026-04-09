import { Routes } from '@angular/router';

import { provideCartRoot } from './cart-root.provider';
import { DemoCartViewComponent } from './pages/cart-view/cart-view.component';

export const demoCartRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [provideCartRoot()],
    component: DemoCartViewComponent,
  },
];

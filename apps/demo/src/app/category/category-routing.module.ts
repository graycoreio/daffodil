import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  DaffCategoryPageIdResolver,
  DaffCategoryPageUrlResolver,
  DaffCategoryRoutingModule,
} from '@daffodil/category/routing';
import { daffDataPathUrlMatcher } from '@daffodil/external-router';

import { CategoryViewComponent } from './pages/category-view/category-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      {
        path: ':id',
        component: CategoryViewComponent,
        resolve: {
          product: DaffCategoryPageIdResolver,
        },
      },
      {
        path: '',
        component: CategoryViewComponent,
        resolve: {
          product: DaffCategoryPageUrlResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DaffCategoryRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class CategoryRoutingModule { }

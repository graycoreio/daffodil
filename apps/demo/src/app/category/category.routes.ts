import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

import {
  DaffCategoryPageIdResolver,
  DaffCategoryPageUrlResolver,
} from '@daffodil/category/routing';
import { DaffCategoryStateModule } from '@daffodil/category/state';

import { CategoryViewComponent } from './pages/category-view/category-view.component';

export const demoCategoryRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [
      importProvidersFrom(DaffCategoryStateModule),
      DaffCategoryPageIdResolver,
      DaffCategoryPageUrlResolver,
    ],
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

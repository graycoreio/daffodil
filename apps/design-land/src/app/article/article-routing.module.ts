import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandArticleComponent } from './article.component';

export const articleRoutes: Routes = [
  { path: '', component: DesignLandArticleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandArticleRoutingModule {}

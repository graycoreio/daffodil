import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './core//template/template.component';

export const appRoutes: Routes = [
  {
    path: '', component: TemplateComponent, children: [
      { path: '', pathMatch: 'full', loadChildren: './content/homepage/homepage.module#DaffioHomepageModule'}
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

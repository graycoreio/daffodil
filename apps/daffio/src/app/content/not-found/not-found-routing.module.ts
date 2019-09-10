import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DaffioNotFoundComponent } from './component/not-found.component';

const notFound: Routes = [
  { 
    path: '',
    pathMatch: 'full', 
    component: DaffioNotFoundComponent,
    data: {
      title: '404 Error',
      description: 'Oops! The page you were looking for doesn’t exist. You may have mistyped the address or the page may have moved.'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(notFound)
  ],
  exports: [
    RouterModule
  ]
})
export class DaffioNotFoundRoutingModule {}

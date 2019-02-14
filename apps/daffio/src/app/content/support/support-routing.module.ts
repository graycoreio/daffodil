import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DaffioSupportComponent } from './component/support.component';

const support: Routes = [
  { 
    path: '',
    pathMatch: 'full', 
    component: DaffioSupportComponent,
    data: {
      title: 'Support',
      description: 'Want to work with us? Fill out the contact form and we will reach out shortly!'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(support)
  ],
  exports: [
    RouterModule
  ]
})
export class DaffioSupportRoutingModule {}

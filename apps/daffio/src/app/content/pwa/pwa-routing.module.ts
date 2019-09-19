import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DaffioPwaComponent } from './pages/pwa/pwa.component';

const pwa: Routes = [
  { 
    path: '',
    pathMatch: 'full', 
    component: DaffioPwaComponent,
    data: {
      headerColor: 'secondary'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pwa)
  ],
  exports: [
    RouterModule
  ]
})
export class DaffioPwaRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DaffioDocsComponent } from './pages/docs/docs.component';

const docs: Routes = [
  { 
    path: '',
    pathMatch: 'full', 
    component: DaffioDocsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(docs)
  ],
  exports: [
    RouterModule
  ]
})
export class DaffioDocsRoutingModule {}

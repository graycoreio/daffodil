import { NgModule } from '@angular/core';
import { DaffListTitleComponent } from './components/list-title/list-title.component';
import { DaffListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    DaffListComponent,
    DaffListTitleComponent
  ],
  exports: [
    DaffListComponent,
    DaffListTitleComponent
  ]
})
export class DaffListModule { }

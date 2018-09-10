import { NgModule } from '@angular/core';
import { DaffListTitleComponent } from './components/list-title/list-title.component';
import { DaffListComponent } from './components/list/list.component';
import { DaffListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    DaffListComponent,
    DaffListTitleComponent,
    DaffListItemComponent
  ],
  exports: [
    DaffListComponent,
    DaffListTitleComponent,
    DaffListItemComponent
  ]
})
export class DaffListModule { }

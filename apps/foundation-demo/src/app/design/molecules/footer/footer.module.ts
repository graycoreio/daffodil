import { NgModule } from '@angular/core';

import { DaffFooterComponent } from './components/footer/footer.component';
import { DaffFooterIconsComponent } from './components/footer-icons/footer-icons.component';

@NgModule({
  declarations: [
    DaffFooterComponent,
    DaffFooterIconsComponent,
  ],
  exports: [
    DaffFooterComponent,
    DaffFooterIconsComponent
  ]
})
export class DaffFooterModule { }

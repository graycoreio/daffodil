import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartModule } from '@daffodil/cart';

import { DemoCartViewComponent } from './pages/cart-view/cart-view.component';
import { DaffLoadingIconModule } from '@daffodil/design';
import { CartWrapperModule } from './components/cart-wrapper/cart-wrapper.module';
import { DaffContainerModule } from '@daffodil/design';
import { DemoCartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DaffCartModule,
    DaffLoadingIconModule,
    DaffContainerModule,
    CartWrapperModule,
    DemoCartRoutingModule,
  ],
  declarations: [
    DemoCartViewComponent
  ],
  exports: [
    DemoCartViewComponent
  ]
})
export class DemoCartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoCartViewComponent } from './pages/cart-view/cart-view.component';
import { DaffLoadingIconModule } from '@daffodil/design';
import { CartModule } from './components/cart/cart.module';
import { DaffContainerModule } from '@daffodil/design';
import { DemoCartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    DaffContainerModule,
    CartModule,
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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { DemoCartRoutingModule } from './cart-routing.module';
import { CartModule } from './components/cart/cart.module';
import { DemoCartViewComponent } from './pages/cart-view/cart-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    DaffContainerModule,
    CartModule,
    DemoCartRoutingModule,
  ],
  declarations: [
    DemoCartViewComponent,
  ],
  exports: [
    DemoCartViewComponent,
  ],
})
export class DemoCartModule { }

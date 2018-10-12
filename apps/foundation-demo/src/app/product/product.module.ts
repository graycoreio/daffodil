import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { StateProductModule } from '@daffodil/state';

import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductGridViewComponent } from './pages/product-grid-view/product-grid-view.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DesignModule } from '../design/design.module';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ProductEffects } from './effects/product.effects';
import { MiscModule } from '../misc/misc.module';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { DaffContainerModule } from '../design/atoms/container/container.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    StateProductModule,
    MiscModule,
    EffectsModule.forFeature([
      ProductEffects
    ]),
    LoadingIconModule,
    DaffContainerModule
  ],
  declarations: [
    ProductGridComponent,
    ProductGridViewComponent,
    ProductViewComponent,
    ProductComponent,
    ProductCardComponent,
    AddToCartComponent,
    BestSellersComponent
  ],
  exports: [
    ProductGridComponent,
    ProductGridViewComponent,
    ProductViewComponent,
    ProductComponent,
    ProductCardComponent,
    AddToCartComponent,
    BestSellersComponent
  ]
})
export class ProductModule { }

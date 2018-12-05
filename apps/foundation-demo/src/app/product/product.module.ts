import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateProductModule } from '@daffodil/product';

import { 
  DaffContainerModule, 
  DaffButtonModule, 
  AccordionModule,
  DaffQtyDropdownModule 
} from '@daffodil/design';

import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductGridViewComponent } from './pages/product-grid-view/product-grid-view.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { MiscModule } from '../misc/misc.module';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { AddToCartNotificationModule } from '../modals/add-to-cart-notification/add-to-cart-notification.module';
import { ImageGalleryModule } from '../core/image-gallery/image-gallery.module';

@NgModule({
  imports: [
    CommonModule,
    StateProductModule,
    MiscModule,
    LoadingIconModule,
    DaffContainerModule,
    DaffButtonModule,
    DaffQtyDropdownModule,
    AccordionModule,
    AddToCartNotificationModule,
    ImageGalleryModule
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

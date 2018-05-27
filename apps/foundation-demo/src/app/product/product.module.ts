import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreProductModule } from '@daffodil/core';
import { ProductGridComponent } from './components/product-grid/product-grid.component';

import { ProductGridViewComponent } from './pages/product-grid-view/product-grid-view.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DesignModule } from '../design/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    CoreProductModule,
  ],
  declarations: [
    ProductGridComponent,
    ProductGridViewComponent,
    ProductViewComponent,
    ProductComponent,
    ProductCardComponent
  ],
  exports: [
    ProductGridComponent,
    ProductGridViewComponent,
    ProductViewComponent,
    ProductComponent,
    ProductCardComponent    
  ]
})
export class ProductModule { }

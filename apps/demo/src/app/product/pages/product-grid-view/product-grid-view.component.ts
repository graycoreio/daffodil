import { Component, ViewChild } from '@angular/core';
import { DaffProductGridContainer } from '@daffodil/product';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html'
})
export class ProductGridViewComponent {

  @ViewChild('ProductGridContainer') DaffProductGridContainer: DaffProductGridContainer;
  constructor() { }
}

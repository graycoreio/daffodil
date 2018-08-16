import { Component, ViewChild } from '@angular/core';
import { ProductGridContainer } from '@daffodil/state';

@Component({
  selector: 'foundation-product-grid-view',
  templateUrl: './product-grid-view.component.html',
  styleUrls: ['./product-grid-view.component.scss']
})
export class ProductGridViewComponent {

  @ViewChild('ProductGridContainer') ProductGridContainer: ProductGridContainer;
  constructor() { }
}

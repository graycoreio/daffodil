import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductGridContainer } from '@daffodil/core';

@Component({
  selector: 'foundation-product-grid-view',
  templateUrl: './product-grid-view.component.html'
})
export class ProductGridViewComponent {

  @ViewChild('ProductGridContainer') ProductGridContainer: ProductGridContainer;
  constructor() { }

  ngAfterViewInit() {
    this.ProductGridContainer.products$.subscribe((products) => {
      console.log(products);
    })
   }
}

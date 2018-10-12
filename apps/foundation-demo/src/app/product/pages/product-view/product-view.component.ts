import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'foundation-product-view',
  templateUrl: './product-view.component.html'
})
export class ProductViewComponent implements OnInit {

  productId: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id');
    })
  }
}

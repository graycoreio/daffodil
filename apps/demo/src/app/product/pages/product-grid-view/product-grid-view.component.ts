import { Component, OnInit } from '@angular/core';
import { DaffProductGridFacade, DaffProductUnion } from '@daffodil/product';
import { Observable } from 'rxjs';
import { DaffCategoryLoad } from '@daffodil/category';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html'
})
export class ProductGridViewComponent implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<DaffProductUnion[]>;

  constructor(private facade: DaffProductGridFacade) { }

  ngOnInit() {
    this.products$ = this.facade.products$;
    this.loading$ = this.facade.loading$;
    this.facade.dispatch(new DaffCategoryLoad("2"));
  }
}

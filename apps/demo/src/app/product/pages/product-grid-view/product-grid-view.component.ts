import { Component, OnInit } from '@angular/core';
import { DaffProductGridFacade, DaffProductUnion, DaffProductGridLoad } from '@daffodil/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html'
})
export class ProductGridViewComponent implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<DaffProductUnion[]>;

  constructor(private facade: DaffProductGridFacade) { }
xw
  ngOnInit() {
    this.products$ = this.facade.products$;
    this.loading$ = this.facade.loading$;
    this.facade.dispatch(new DaffProductGridLoad());
  }
}

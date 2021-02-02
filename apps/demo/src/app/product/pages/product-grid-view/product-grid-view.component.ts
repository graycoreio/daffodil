import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffProductGridFacade,
  DaffProductGridLoad,
  DaffProduct,
} from '@daffodil/product';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html',
})
export class ProductGridViewComponent implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<DaffProduct[]>;

  constructor(private facade: DaffProductGridFacade<DaffProduct>) { }

  ngOnInit() {
    this.products$ = this.facade.products$;
    this.loading$ = this.facade.loading$;
    this.facade.dispatch(new DaffProductGridLoad());
  }
}

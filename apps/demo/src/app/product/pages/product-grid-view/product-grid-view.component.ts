import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContainerComponent } from '@daffodil/design/container';
import { DaffSpinnerComponent } from '@daffodil/design/spinner';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridFacade,
  DaffProductGridLoad,
  DaffProductStateModule,
} from '@daffodil/product/state';

import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html',
  imports: [
    AsyncPipe,
    DaffSpinnerComponent,
    ProductGridComponent,
    DaffContainerComponent,
    DaffProductStateModule,
  ],
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

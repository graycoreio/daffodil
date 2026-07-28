import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffSpinnerComponent } from '@daffodil/design/spinner';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridFacade,
  DaffProductStateModule,
} from '@daffodil/product/state';
import { DaffRelatedProductStateModule } from '@daffodil/related-products/state';
import { DaffUpsellProductStateModule } from '@daffodil/upsell-products/state';

import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'demo-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
  imports: [
    AsyncPipe,
    DaffSpinnerComponent,
    ProductGridComponent,
    DaffProductStateModule,
    DaffRelatedProductStateModule,
    DaffUpsellProductStateModule,
  ],
})
export class BestSellersComponent implements OnInit {
  bestSellers$: Observable<DaffProduct[]>;
  loading$: Observable<boolean>;

  constructor(private facade: DaffProductGridFacade) {}

  ngOnInit() {
    this.bestSellers$ = this.facade.products$.pipe(
      map((products) => products.slice(0, 4)),
    );
    this.loading$ = this.facade.loading$;
  }
}

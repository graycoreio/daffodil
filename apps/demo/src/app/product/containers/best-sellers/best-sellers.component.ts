import {
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductGridFacade } from '@daffodil/product/state';

@Component({
  selector: 'demo-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
  standalone: false,
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

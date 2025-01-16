import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffBestSellersFacade } from '@daffodil/product/state';

@Component({
  selector: 'demo-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
  standalone: false,
})
export class BestSellersComponent implements OnInit {

  constructor(private facade: DaffBestSellersFacade<DaffProduct>) {}

  bestSellers$: Observable<DaffProduct[]>;
  loading$: Observable<boolean>;

  ngOnInit() {
    this.bestSellers$ = this.facade.bestSellers$;
    this.loading$ = this.facade.loading$;
  }
}

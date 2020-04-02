import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffBestSellersFacade, DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {

	constructor(private facade: DaffBestSellersFacade) {}

	bestSellers$: Observable<DaffProduct[]>;
	loading$: Observable<boolean>;

	ngOnInit() {
		this.bestSellers$ = this.facade.bestSellers$;
		this.loading$ = this.facade.loading$;
	}
}

import { Component, OnInit } from '@angular/core';
import { DaffProductGridFacade, DaffProductUnion, DaffProductGridLoad } from '@daffodil/product';
import { Observable } from 'rxjs';
import { DaffCategoryFacade, DaffCategoryLoad, DaffToggleCategoryFilter, DaffCategoryFilterType, DaffSortDirectionEnum } from '@daffodil/category';

@Component({
  selector: 'demo-product-grid-view',
  templateUrl: './product-grid-view.component.html'
})
export class ProductGridViewComponent implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<DaffProductUnion[]>;

  constructor(
		private facade: DaffProductGridFacade,
		private categoryFacade: DaffCategoryFacade
	) { }

  ngOnInit() {
    this.products$ = this.facade.products$;
		this.loading$ = this.facade.loading$;
		// this.categoryFacade.pageConfigurationState$.subscribe((state) => console.log(state));
		// this.categoryFacade.category$.subscribe((state) => console.log(state));
		// this.categoryFacade.products$.subscribe((products) => console.log(products));
		this.categoryFacade.getTotalProductsByCategory('4').subscribe((products) => console.log(products));
		this.categoryFacade.appliedFilters$.subscribe((products) => console.log(products));
		this.categoryFacade.products$.subscribe((products) => console.log(products));
		this.facade.dispatch(new DaffProductGridLoad());
		this.facade.dispatch(new DaffCategoryLoad({
			id: '23',
			page_size: 12,
			filter_requests: [
				{
					name: 'price',
					type: DaffCategoryFilterType.Range,
					value: ['80-*'],
				},
				{
					name: 'color',
					value: ['50'],
					type: DaffCategoryFilterType.Equal
				}
			],
			applied_sort_option: 'name',
			applied_sort_direction: DaffSortDirectionEnum.Ascending
		}))
		// this.products$.subscribe((products) => console.log(products));
	}
	
	addFilter() {
		this.facade.dispatch(new DaffToggleCategoryFilter({
				name: 'color',
				value: '51',
				type: DaffCategoryFilterType.Equal
		}))
	}
}

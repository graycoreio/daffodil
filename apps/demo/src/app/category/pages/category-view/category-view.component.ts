import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCategory } from '@daffodil/category';
import { DaffCategoryFacade } from '@daffodil/category/state';
import { DaffContainerComponent } from '@daffodil/design/container';
import { DaffSpinnerComponent } from '@daffodil/design/spinner';
import { DaffProduct } from '@daffodil/product';

import { ProductGridComponent } from '../../../product/components/product-grid/product-grid.component';

@Component({
  selector: 'demo-category-view',
  templateUrl: './category-view.component.html',
  imports: [
    AsyncPipe,
    DaffContainerComponent,
    DaffSpinnerComponent,
    ProductGridComponent,
  ],
})
export class CategoryViewComponent implements OnInit {
  category$: Observable<DaffCategory>;
  loading$: Observable<boolean>;
  products$: Observable<DaffProduct[]>;

  constructor(
    private facade: DaffCategoryFacade,
  ) {}

  ngOnInit() {
    this.category$ = this.facade.category$;
    this.products$ = this.facade.products$;
    this.loading$ = this.facade.loading$;
  }
}

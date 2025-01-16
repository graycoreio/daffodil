import {
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCategory } from '@daffodil/category';
import { DaffCategoryFacade } from '@daffodil/category/state';
import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-category-view',
  templateUrl: './category-view.component.html',
  standalone: false,
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

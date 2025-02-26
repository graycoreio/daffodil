import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
  DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  DaffArticleEncapsulatedDirective,
  DaffSkeletonableDirective,
} from '@daffodil/design';


import { DaffBreadcrumbItemDirective } from '../breadcrumb-item/breadcrumb-item.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ol[daff-breadcrumb]',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class DaffBreadcrumbComponent implements AfterContentInit {

  constructor(private destroyRef: DestroyRef) {}
  /**
   * @docs-private
   */
  @HostBinding('class.daff-breadcrumb') class = true;

  /**
   * @docs-private
   */
  @ContentChildren(DaffBreadcrumbItemDirective) breadcrumbItems!: QueryList<DaffBreadcrumbItemDirective>;

  ngAfterContentInit() {
    this.updateActiveState();

    this.breadcrumbItems.changes
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateActiveState());
  }

  private updateActiveState() {
    if (!this.breadcrumbItems.length) {
      return;
    }

    this.breadcrumbItems.forEach(item => item.setActive(false));

    this.breadcrumbItems.last.setActive(true);
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

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
  /**
   * @docs-private
   */
  @HostBinding('class.daff-breadcrumb') class = true;

  /**
   * @docs-private
   */
  @ContentChildren(DaffBreadcrumbItemDirective) breadcrumbItems!: QueryList<DaffBreadcrumbItemDirective>;

  /**
   * @docs-private
   */
  ngAfterContentInit() {
    this.updateActiveState();
    this.breadcrumbItems.changes.subscribe(() => this.updateActiveState());
  }

  private updateActiveState() {
    if (!this.breadcrumbItems.length) {
      return;
    }

    // Sets only the last breadcrumb item as active
    this.breadcrumbItems.forEach((item, index) => {
      item.setActive(index === this.breadcrumbItems.length - 1);
    });
  }
}

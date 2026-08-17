import {
  computed,
  Directive,
  Inject,
  input,
  Optional,
  SkipSelf,
} from '@angular/core';

import {
  DAFF_ROVING_TAB_INDEX_BOUNDARY,
  DaffRovingTabIndexBoundary,
} from './roving-tab-index-boundary.token';
import { DaffRovingTabIndexService } from './roving-tab-index-group.service';

/**
 * Declares that an element is an RTI target.
 * Automatically applied to `<a>` and `<button>` elements.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rti],a,button',
  host: {
    '[attr.tabindex]': 'tabindex()',
    '[attr.data-rti]': 'group()',
    '(keydown.escape)': 'leaveGroup($event)',
    '(keydown.arrowup)': 'previous($event)',
    '(keydown.arrowdown)': 'next($event)',
    '(keydown.tab)': 'next($event)',
    '(keydown.shift.tab)': 'previous($event)',
  },
})
export class DaffRovingTabIndexDirective {
  /**
   * Allows the RTI group to be overriden.
   * By default it will be the nearest ancestor or the default root group if no boundary ancestor exists.
   * @see {@link DaffRovingTabIndexBoundaryDirective}.
   */
  readonly rti = input<string>('');
  /**
   * The group in which this RTI target resides.
   * See {@link DaffRovingTabIndexBoundaryDirective} to make an element act as the boundary of an RTI group.
   */
  readonly group = computed(() => this.rti() || this.parent?.effectiveBoundary() || '');
  /**
   * @docs-private
   */
  readonly tabindex = computed(() =>
    this.service.group() === this.group()
      ? 0
      : -1,
  );

  constructor(
    private service: DaffRovingTabIndexService,
    @Optional() @SkipSelf() @Inject(DAFF_ROVING_TAB_INDEX_BOUNDARY) private parent: DaffRovingTabIndexBoundary,
  ) {}

  /**
   * @docs-private
   */
  protected leaveGroup(evt: Event) {
    if (this.service.group()) {
      evt.preventDefault();
      evt.stopPropagation();
      this.service.leave();
    }
  }

  /**
   * @docs-private
   */
  protected next(evt: Event) {
    if (this.service.group()) {
      evt.preventDefault();
      evt.stopPropagation();
      this.service.next();
    }
  }

  /**
   * @docs-private
   */
  protected previous(evt: Event) {
    if (this.service.group()) {
      evt.preventDefault();
      evt.stopPropagation();
      this.service.previous();
    }
  }
}

import {
  computed,
  Directive,
  input,
  Optional,
  SkipSelf,
} from '@angular/core';

import { DaffRovingTabIndexBoundaryDirective } from './roving-tab-index-boundary.directive';
import { DaffRovingTabIndexService } from './roving-tab-index-group.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rti],a,button',
  host: {
    '[attr.tabindex]': 'tabindex()',
    '[attr.data-rti]': 'group()',
    '(keydown.escape)': 'leaveGroup($event)',
    '(keydown.arrowup)': 'previous($event)',
    '(keydown.arrowdown)': 'next($event)',
  },
})
export class DaffRovingTabIndexDirective {
  /**
   * Allows the RTI group to be overriden.
   * By default it will be the nearest ancestor or the default root group if no boundary ancestor exists.
   * @see {@link DaffRovingTabIndexBoundaryDirective}.
   */
  readonly rti = input<string>('');
  readonly group = computed(() => this.rti() || this.parent?.effectiveBoundary() || '');
  readonly tabindex = computed(() =>
    this.service.group() === this.group()
      ? 0
      : -1,
  );

  constructor(
    private service: DaffRovingTabIndexService,
    @Optional() @SkipSelf() private parent: DaffRovingTabIndexBoundaryDirective,
  ) {}

  leaveGroup(evt: Event) {
    evt.stopPropagation();
    this.service.leave();
  }

  next(evt: Event) {
    evt.stopPropagation();
    this.service.next();
  }

  previous(evt: Event) {
    evt.stopPropagation();
    this.service.previous();
  }
}

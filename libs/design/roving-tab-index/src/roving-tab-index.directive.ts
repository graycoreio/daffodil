import {
  computed,
  Directive,
  input,
  Optional,
  signal,
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
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class DaffRovingTabIndexDirective {
  private readonly _focused = signal(false);

  /**
   * Allows the RTI group to be overriden.
   * By default it will be the nearest ancestor with an `rtiBoundary` defined.
   * @see {@link DaffRovingTabIndexBoundaryDirective}.
   */
  readonly rti = input<string>();
  readonly group = computed(() => this.parent?.rtiBoundary() || '');
  readonly tabindex = computed(() =>
    this.groupService.group() === this.group()
      ? 0
      : -1,
  );

  constructor(
    private groupService: DaffRovingTabIndexService,
    @Optional() @SkipSelf() private parent: DaffRovingTabIndexBoundaryDirective,
  ) {}

  leaveGroup(evt: Event) {
    evt.stopPropagation();
    this.groupService.leave();
  }

  next(evt: Event) {
    evt.stopPropagation();
    this.groupService.next();
  }

  previous(evt: Event) {
    evt.stopPropagation();
    this.groupService.previous();
  }

  onFocus() {
    this._focused.set(true);
  }

  onBlur() {
    this._focused.set(false);
  }
}

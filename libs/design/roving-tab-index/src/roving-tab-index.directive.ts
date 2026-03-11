import {
  computed,
  Directive,
  input,
  signal,
} from '@angular/core';

import { DaffRovingTabIndexService } from './roving-tab-index-group.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rti]',
  host: {
    '[attr.tabindex]': 'tabindex()',
    '[attr.data-rti]': 'rti()',
    '[attr.data-rti-boundary]': 'rtiBoundary()',
    '(keydown.space)': 'enterGroup($event)',
    '(keydown.escape)': 'leaveGroup($event)',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class DaffRovingTabIndexDirective {
  private readonly _focused = signal(false);

  readonly rti = input<string>('');
  readonly rtiBoundary = input<string | null>(null);
  readonly tabindex = computed(() =>
    this.groupService.group() === this.rti()
      ? 0
      : -1,
  );

  constructor(
    private groupService: DaffRovingTabIndexService,
  ) {}

  enterGroup(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    const group = this.rtiBoundary();
    if (group) {
      this.groupService.enter(group);
    }
  }

  leaveGroup(evt: Event) {
    evt.stopPropagation();
    this.groupService.leave();
  }

  onFocus() {
    this._focused.set(true);
  }

  onBlur() {
    this._focused.set(false);
  }
}

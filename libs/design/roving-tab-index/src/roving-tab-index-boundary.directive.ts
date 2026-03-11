import { CdkTrapFocus } from '@angular/cdk/a11y';
import {
  Directive,
  effect,
  input,
} from '@angular/core';

import { DaffRovingTabIndexService } from './roving-tab-index-group.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rtiBoundary]',
  host: {
    '[attr.data-rti-boundary]': 'rtiBoundary()',
    '(keydown.space)': 'enterGroup($event)',
  },
  hostDirectives: [
    CdkTrapFocus,
  ],
})
export class DaffRovingTabIndexBoundaryDirective {
  readonly rtiBoundary = input<string | null>(null);

  constructor(
    private groupService: DaffRovingTabIndexService,
    private focusTrap: CdkTrapFocus,
  ) {
    effect(() => {
      this.focusTrap.enabled = this.rtiBoundary() === this.groupService.group();
    });
  }

  enterGroup(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    const group = this.rtiBoundary();
    if (group) {
      this.groupService.enter(group);
    }
  }
}

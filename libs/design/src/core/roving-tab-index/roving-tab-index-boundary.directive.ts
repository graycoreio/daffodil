import { CdkTrapFocus } from '@angular/cdk/a11y';
import {
  computed,
  Directive,
  effect,
  forwardRef,
  input,
} from '@angular/core';

import { DaffRovingTabIndexService } from './roving-tab-index-group.service';
import { DaffRovingTabIndexDirective } from './roving-tab-index.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[rtiBoundary]',
  host: {
    '[attr.data-rti-boundary]': 'effectiveBoundary()',
    '(keydown.space)': 'enterGroup($event)',
  },
  hostDirectives: [
    CdkTrapFocus,
    forwardRef(() => DaffRovingTabIndexDirective),
  ],
})
export class DaffRovingTabIndexBoundaryDirective {
  /**
   * Don't touch this directly. Use `_uniqueId`.
   */
  private static _uniqueIdCounter = 0;

  /**
   * Don't touch this directly. Use `_uniqueId`.
   */
  private _cachedUniqueId: string | undefined;
  private get _uniqueId(): string {
    if (!this._cachedUniqueId) {
      this._cachedUniqueId = `ε-rtiBoundary-${DaffRovingTabIndexBoundaryDirective._uniqueIdCounter++}`;
    }
    return this._cachedUniqueId;
  }

  readonly rtiBoundary = input<string | null>(null);
  readonly effectiveBoundary = computed(() => this.rtiBoundary() || this._uniqueId);

  constructor(
    private groupService: DaffRovingTabIndexService,
    private focusTrap: CdkTrapFocus,
  ) {
    effect(() => {
      this.focusTrap.enabled = this.effectiveBoundary() === this.groupService.group();
    });
  }

  enterGroup(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    this.groupService.enter(this.effectiveBoundary());
  }
}

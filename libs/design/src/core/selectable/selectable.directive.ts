import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { DaffSelectable } from '../selectable/selectable';

@Directive({
  selector: '[daffSelected]',
  host: {
    '[class.daff-selected]': 'selected',
  },
})

export class DaffSelectableDirective implements DaffSelectable {
  /**
   * Controls whether the component is selected.
   */
  @Input() selected = false;

  /**
   * An event that fires after the component becomes selected.
   */
  @Output() becameSelected: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cd: ChangeDetectorRef) {}

  /**
   * Selects the component and emits the `becameSelected` event.
   */
  select() {
    this.selected = true;
    this.becameSelected.emit();
    this.cd.markForCheck();
    return this;
  }

  /**
   * Deselects the component.
   */
  deselect() {
    this.selected = false;
    this.cd.markForCheck();
    return this;
  }
}

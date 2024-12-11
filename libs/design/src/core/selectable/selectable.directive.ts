import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { DaffSelectable } from '../selectable/selectable';

@Directive({
  selector: '[daffSelected]',
  standalone: true,
})

export class DaffSelectableDirective implements DaffSelectable {
  /** Whether or not a component implementing the directive is selected */
  @Input() @HostBinding('class.daff-selected') selected = false;

  /**
   * An event that fires after the media element becomes selected.
   */
  @Output() becameSelected: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cd: ChangeDetectorRef) {}

  select() {
    this.selected = true;
    this.becameSelected.emit();
    this.cd.markForCheck();
    return this;
  }

  deselect() {
    this.selected = false;
    this.cd.markForCheck();
    return this;
  }
}

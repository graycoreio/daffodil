import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { DaffOpenable } from './openable';

@Directive({
  selector: '[daffOpenable]',
  standalone: true,
})

export class DaffOpenableDirective implements DaffOpenable {
  @Input() @HostBinding('class.daff-open') open = false;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  reveal() {
    this.open = true;
    this.toggled.emit(true);
  }

  hide() {
    this.open = false;
    this.toggled.emit(false);
  }

  toggle() {
    this.open = !this.open;
    this.toggled.emit(this.open);
  }
}

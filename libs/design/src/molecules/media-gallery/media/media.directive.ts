import { Directive, Input, Inject, Type, HostBinding, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { mediaCompatToken } from './media-compat.token';

@Directive({
  selector: '[daffMedia]'
})
export class DaffMediaDirective {
  @HostBinding('class.daff-media-gallery__media') class = true;
  @HostListener('click', ['$event']) onClick($event) {
    this.selected = true;
    this.becameSelected.emit();
    this.cd.markForCheck();
    console.log('test')
  }

  @Input() selected = false;
  @Output() becameSelected: EventEmitter<void> = new EventEmitter<void>();

  constructor( @Inject(mediaCompatToken) public component: Type<unknown>, private cd: ChangeDetectorRef) {}
}

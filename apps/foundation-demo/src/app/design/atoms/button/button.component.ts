import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef } from '@angular/core';

/**
* List of classes to add to Daff Button instances based on host attributes to style as different variants.
*/

const BUTTON_HOST_ATTRIBUTES = [
  'daff-button',
  'daff-icon-button'
];


@Component({
  selector: '' +
    'button[daff-button]' + ',' +
    'button[daff-icon-button]' + ',' +
    'a[daff-button]' + ',' +
    'a[daff-icon-button]',
  template: 'ng-content',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent implements OnInit {

    ngOnInit() {}

    constructor(private elementRef: ElementRef) {
      for (const attr of BUTTON_HOST_ATTRIBUTES) {
        if (this._hasHostAttributes(attr)) {
          (elementRef.nativeElement as HTMLElement).classList.add(attr);
        }
      }
    }

    _getHostElement() {
      return this.elementRef.nativeElement;
    }
  
    /** Gets whether the button has one of the given attributes. */
    _hasHostAttributes(...attributes: string[]) {
      return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }
}

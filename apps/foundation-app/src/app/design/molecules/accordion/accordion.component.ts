import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { letProto } from 'rxjs/operator/let';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

  @Input() title;

  active = false;

  constructor() { }

  toggleActive() {
    this.active = !this.active;
  }

  get isAccordionOpen() {
    return this.active;
  }
}

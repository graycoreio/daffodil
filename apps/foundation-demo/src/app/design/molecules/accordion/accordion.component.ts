import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { letProto } from 'rxjs/operator/let';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {

  @Input() title: string;
  @Input() initiallyActive: boolean;

  active: boolean;

  ngOnInit() {
    if(this.initiallyActive) {
      this.active = true;
    } else {
      this.active = false;
    }
  }

  constructor() { }

  toggleActive() {
    this.active = !this.active;
  }

  get isAccordionOpen() {
    return this.active;
  }
}

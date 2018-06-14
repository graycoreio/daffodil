import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { letProto } from 'rxjs/operator/let';

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionItemComponent implements OnInit {
  @Input() initiallyActive: boolean;

  open: boolean;

  ngOnInit() {
    if(this.initiallyActive) {
      this.open = true;
    } else {
      this.open = false;
    }
  }

  constructor() { }

  toggleActive() {
    this.open = !this.open;
  }

  get isOpen() {
    return this.open;
  }
}

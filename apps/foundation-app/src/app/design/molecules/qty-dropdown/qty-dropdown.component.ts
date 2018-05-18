import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss']
})
export class QtyDropdownComponent implements OnInit {

  @Input() qty: number;
  @Input() id: string;
  @Output() qtyChanged: EventEmitter<number> = new EventEmitter();

  static readonly dropdownRange = 9;
  dropdownItemCounter: number[];

  constructor() { }

  ngOnInit() {
    this.dropdownItemCounter = Array.from(Array(QtyDropdownComponent.dropdownRange),(x,i)=>i);
  }

  get showQtyInputField() : boolean {
    return this.isQtyOutsideDropdownRange();
  }

  onChange(value: String) {
    if(value === "10+") {
      this.selectInput();
    }
  }

  private isQtyOutsideDropdownRange() {
    console.log(this.qty);
    return this.qty > QtyDropdownComponent.dropdownRange;
  }

  private selectInput() {
    let that = this;
    setTimeout(function() {
      $( "#" + that.id ).select();
    });
  }
}

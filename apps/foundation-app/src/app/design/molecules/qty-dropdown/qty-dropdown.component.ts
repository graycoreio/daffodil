import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss']
})
export class QtyDropdownComponent implements OnInit {

  @Input() qty: string;
  @Input() id: string;

  static readonly dropdownRange = 9;
  showQtyInputField: boolean;
  dropdownItemCounter: string[];

  constructor() { }

  ngOnInit() {
    this.showQtyInputField = this.isQtyOutsideDropdownRange();
    this.dropdownItemCounter = new Array(QtyDropdownComponent.dropdownRange);
  }

  onChange(value: String) {
    if(value === "10+") {
      this.showQtyInputField = true;
      this.selectInput();
    }
  }

  isOptionSelectedInitially(index: string): string {
    return this.qty == index ? 'selected': null;
  }

  private isQtyOutsideDropdownRange() {
    return parseInt(this.qty) > QtyDropdownComponent.dropdownRange;
  }

  private selectInput() {
    let that = this;
    setTimeout(function() {
      $( "#" + that.id ).select();
    });
  }
}

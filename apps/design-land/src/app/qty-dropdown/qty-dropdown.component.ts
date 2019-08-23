import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'design-land-qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss']
})
export class QtyDropdownComponent implements OnInit {
  selectedValue: number = 1;
  constructor() { }

  ngOnInit() {
  }
  updateValue(qty:number){
    if(qty % 1 != 0){
      this.selectedValue = 0;
    }
    else{
      this.selectedValue = qty;
    }
  }
}

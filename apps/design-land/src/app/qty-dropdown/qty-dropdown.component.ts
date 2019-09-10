import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'design-land-qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss']
})
export class QtyDropdownComponent{
  selectedValue: number = 1;

  updateValue(qty:number){
    if(qty % 1 != 0){
      this.selectedValue = 1;
    }
    else{
      this.selectedValue = qty;
    }
  }
}

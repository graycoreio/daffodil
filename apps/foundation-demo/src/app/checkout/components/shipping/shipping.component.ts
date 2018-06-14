import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    console.log('test');
  }

}

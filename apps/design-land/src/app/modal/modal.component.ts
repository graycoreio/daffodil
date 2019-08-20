import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-land-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private showModal : boolean;
  hideModal() {
    this.showModal = false;
  }
}

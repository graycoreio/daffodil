import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input() imgUrls: string[];
  @Output() notifySelectedImg: EventEmitter<any> = new EventEmitter();

  selectedImgUrl: string;

  constructor() { }

  ngOnInit() {
    this.selectImg(this.imgUrls[0]);
  }

  selectImg(selectedImg: string) {
    this.selectedImgUrl = selectedImg;

    this.notifySelectedImg.emit(selectedImg);
  }
}

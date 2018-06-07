import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements AfterViewInit {

  @Input() imgUrls: string[];
  @Output() notifySelectedImg: EventEmitter<any> = new EventEmitter();

  selectedImgIndex: number = 0;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectImg(0);
    });
  }

  selectImg(newSelectedImgIndex: number) {
    this.removeSelectedClass(this.selectedImgIndex);
    this.selectedImgIndex = newSelectedImgIndex;
    this.addSelectedClass(this.selectedImgIndex);

    this.notifySelectedImg.emit(this.imgUrls[this.selectedImgIndex]);
  }

  private removeSelectedClass(index: number) {
    document.getElementsByClassName('image-list__image')[index].classList.remove('image-list__selected'); 
  }

  private addSelectedClass(index: number) {
    document.getElementsByClassName('image-list__image')[index].classList.add('image-list__selected');
  }
}

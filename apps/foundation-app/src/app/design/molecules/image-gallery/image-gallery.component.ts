import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements AfterViewInit {

  @Input() imgUrls: string[];

  selectedImg: string;

  ngAfterViewInit() {
    setTimeout(this.updateImageGalleryHeight);
  }

  constructor() { }

  setSelectedImg(selectedImgUrl) {
    this.selectedImg = selectedImgUrl;
  }

  onResize() {
    this.updateImageGalleryHeight();
  }

  updateImageGalleryHeight() {
    let imageGalleryWidth = (<HTMLElement>document.getElementsByClassName('image-gallery')[0]).offsetWidth;

    (<HTMLElement>document.getElementsByClassName('image-gallery__active-image')[0]).style.height = (imageGalleryWidth).toString() + 'px';
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {

  @Input() imgUrls: string[];

  selectedImg: string;

  ngOnInit() {
    console.log(this.imgUrls);
    (<HTMLElement>document.getElementsByClassName('image-gallery')[0]).style.height = '600px';
  }

  constructor() { }

  setSelectedImg(selectedImgUrl) {
    this.selectedImg = selectedImgUrl;
  }
}

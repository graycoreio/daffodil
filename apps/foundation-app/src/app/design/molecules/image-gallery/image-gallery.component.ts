import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements  OnInit {

  @Input() images: Image[] = [];
  @Input() selectedImage: Image|null = null;

  ngOnInit() {
    //Consider throwing an exception if you don't give it any images?
    if(this.images.length != 0){
      this.selectedImage = this.selectedImage 
        ? this.selectedImage
        : this.images[0];
    }
  }

  constructor() { }

  changeImage(image: Image) {
    this.selectedImage = image;
  }

  hasImages() : boolean {
    return this.images.length > 0;
  }
}

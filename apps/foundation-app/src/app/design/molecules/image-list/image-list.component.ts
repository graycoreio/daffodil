import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input() images: Image[];
  @Input() selectedImage: Image = null;

  @Output() imageSelected: EventEmitter<Image> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //Consider throwing an exception if you don't give it any images?
    if(this.images.length != 0){
      this.selectedImage = this.selectedImage 
        ? this.selectedImage
        : this.images[0];
    }
  }

  select(image) : void {
    this.imageSelected.emit(image);
  }
}

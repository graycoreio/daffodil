import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromDemoImageGallery from '../reducers/index';
import { SetSelectedImageState } from '../actions/image-gallery.actions';

@Component({
  selector: 'demo-image-gallery-container',
  templateUrl: './image-gallery.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements OnInit {

  @Input() images;
  selectedImage$: Observable<string>;

  constructor(
    private store: Store<fromDemoImageGallery.State>
  ) {}

  ngOnInit() {
    this.select(this.images[0].url);
    this.selectedImage$ = this.store.pipe(select(fromDemoImageGallery.selectSelectedImage));
  }

  select(image: string) {
    this.store.dispatch(new SetSelectedImageState(image));
  }
}

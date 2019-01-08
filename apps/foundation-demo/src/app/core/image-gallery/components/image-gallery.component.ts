import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromFoundationImageGallery from '../reducers/index';
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
    private store: Store<fromFoundationImageGallery.State>
  ) {}

  ngOnInit() {
    this.select(this.images[0].url);
    this.selectedImage$ = this.store.pipe(select(fromFoundationImageGallery.selectSelectedImage));
  }

  select(image: string) {
    this.store.dispatch(new SetSelectedImageState(image));
  }
}

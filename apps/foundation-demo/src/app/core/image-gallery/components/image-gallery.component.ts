import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromFoundationImageGallery from '../reducers/index';
import { SetSelectedImageState } from '../actions/image-gallery.actions';

@Component({
  selector: 'image-gallery-component',
  templateUrl: './image-gallery.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent {

  @Input() images;
  selectedImage$: Observable<string>;

  constructor(
    private store: Store<fromFoundationImageGallery.State>
  ) {}

  ngOnInit() {
    this.selectedImage$ = this.store.pipe(select(fromFoundationImageGallery.selectSelectedImage));
    
    this.selectedImage$.subscribe((selectedImage) => {
      if (!selectedImage) {
        this.select(this.images[0].url);
      }
    })
  }

  select(image: string) {
    this.store.dispatch(new SetSelectedImageState(image));
  }
}

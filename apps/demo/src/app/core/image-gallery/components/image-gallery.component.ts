import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';


import { SetSelectedImageState } from '../actions/image-gallery.actions';
import * as fromDemoImageGallery from '../reducers/index';

@Component({
  selector: 'demo-image-gallery-container',
  templateUrl: './image-gallery.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class ImageGalleryComponent implements OnInit {

  @Input() images: Array<{ url: string; label: string }>;

  constructor(
    private store: Store<fromDemoImageGallery.State>,
  ) {}

  ngOnInit() {
    this.select(this.images[0].url);
  }

  select(image: string) {
    this.store.dispatch(new SetSelectedImageState(image));
  }
}

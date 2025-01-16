import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { daffThumbnailCompatToken } from '@daffodil/design/media-gallery';

import { SetSelectedImageState } from '../actions/image-gallery.actions';
import * as fromDemoImageGallery from '../reducers/index';

@Component({
  selector: 'demo-image-gallery-container',
  templateUrl: './image-gallery.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      provide: daffThumbnailCompatToken, useFactory: () => ImageGalleryComponent,
    },
  ],
  standalone: false,
})
export class ImageGalleryComponent implements OnInit {

  @Input() images;

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

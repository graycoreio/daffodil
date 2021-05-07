import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import {
  DAFF_MEDIA_GALLERY_TOKEN,
  DaffMediaGalleryRegistration,
} from './media-gallery-token';

let uniqueGalleryId = 0;

@Component({
  selector: 'daff-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    { provide: DAFF_MEDIA_GALLERY_TOKEN, useExisting: DaffMediaGalleryComponent },
  ],
})
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration {
	/**
	 * Adds a class for styling the media gallery
	 */
	@HostBinding('class.daff-media-gallery') class = true;

	/**
	 * The name of the gallery
	 */
	@Input() name = `${uniqueGalleryId}`;

	constructor() {
	  uniqueGalleryId++;
	}
}

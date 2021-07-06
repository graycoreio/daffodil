import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';

import { DaffMediaGalleryRegistration } from './media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from './media-gallery-token';
import { DaffMediaGalleryRegistry } from './registry/media-gallery.registry';

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
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration, OnInit {
	/**
	 * Adds a class for styling the media gallery
	 */
	@HostBinding('class.daff-media-gallery') class = true;

	/**
	 * The name of the gallery
	 */
	@Input() name = `${uniqueGalleryId}`;

	constructor(private registry: DaffMediaGalleryRegistry) {
	  uniqueGalleryId++;
	}

	ngOnInit() {
	  this.registry.add(this);
	}
}

import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

let uniqueGalleryId = 0;

@Component({
  selector: 'daff-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffMediaGalleryComponent {
	/**
	 * Adds a class for styling the media gallery
	 */
	@HostBinding('class.daff-media-gallery') class = true;

	/**
	 * The name of the gallery
	 */
	@Input() name = uniqueGalleryId;

	constructor() {
	  uniqueGalleryId++;
	}
}

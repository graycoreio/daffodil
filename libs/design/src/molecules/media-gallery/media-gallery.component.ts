import {
	Component,
	HostBinding,
	ChangeDetectionStrategy,
	Input
} from '@angular/core';

let uniqueGalleryId = 0;

@Component({
	selector: 'daff-media-gallery',
	templateUrl: './media-gallery.component.html',
	styleUrls: ['./media-gallery.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffMediaGalleryComponent {
	@HostBinding('class.daff-media-gallery') class = true;

	/**
	 * The name of the gallery
	 */
	@Input('name') _name = '';

	get name() {
		return this._name ? this._name : uniqueGalleryId.toString();
	}
	
	constructor() {
		uniqueGalleryId++;
	}
}

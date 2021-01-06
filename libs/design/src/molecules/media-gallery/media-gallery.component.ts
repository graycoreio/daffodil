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

	/**
	 * The name of the gallery
	 */
	@Input('name') _name: string = "";

	get name() {
		return this._name ? this._name : uniqueGalleryId.toString();
	}

	@HostBinding('class.daff-media-gallery') class = true;
	
	constructor() {
		uniqueGalleryId++;
	}
}

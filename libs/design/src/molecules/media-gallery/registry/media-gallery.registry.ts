import { Injectable } from '@angular/core';
import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DaffMediaGalleryDict {
	[galleryName: string]: {
		gallery: DaffMediaGalleryComponent;
		thumbnail: DaffThumbnailDirective[];
	}
}

@Injectable()
export class DaffMediaGalleryRegistry {
	private _galleries$: BehaviorSubject<DaffMediaGalleryDict> = new BehaviorSubject({});

	galleries$: Observable<DaffMediaGalleryDict>;

	constructor() {
		this.galleries$ = this._galleries$.asObservable();
	}

	/**
	 * @description
	 * Adds a media element to the internal registry.
	 */
	add(gallery: DaffMediaGalleryComponent, thumbnail: DaffThumbnailDirective) {
		let galleries = this._galleries$.getValue();

		galleries = {
			...galleries,
			[gallery.name]: {
				gallery: gallery,
			thumbnail: galleries[gallery.name] ? [
					...galleries[gallery.name].thumbnail,
					thumbnail
				] : [thumbnail]
			}
		};

		if(galleries[gallery.name].thumbnail.length === 1) {
			thumbnail.select();
		}

		this._galleries$.next(galleries);
	}

	/**
	 * @description
	 * Removes a media element from the internal registry.
	 */
	remove(thumbnail: DaffThumbnailDirective) {
		const galleries = this._galleries$.getValue();
		const index = this._galleries$.getValue()[thumbnail.gallery.name].thumbnail.indexOf(thumbnail);

		//This should never happen, but we don't need to remove it if it doesn't exist.
		if(index === -1){
			return;	
		} 

		this._galleries$.next({
			...this._galleries$.getValue(),
			[thumbnail.gallery.name]: {
				...this._galleries$.getValue()[thumbnail.gallery.name],
				thumbnail: [
					...galleries[thumbnail.gallery.name].thumbnail.slice(0, index),
					...galleries[thumbnail.gallery.name].thumbnail.slice(index + 1)
				]
			}
		});
	}

	/**
	 * @description
	 * Selects a media element for a given gallery.
	 */
	select(thumbnail: DaffThumbnailDirective) {
		const galleries = this._galleries$.getValue();
		const index = this._galleries$.getValue()[thumbnail.gallery.name].thumbnail.indexOf(thumbnail);

		if(thumbnail.selected){
			return;
		}

		//This should never happen, but we don't need to remove it if it doesn't exist.
		if(index === -1){
			return;	
		} 


		this._galleries$.next({
			...this._galleries$.getValue(),
			[thumbnail.gallery.name]: {
				...this._galleries$.getValue()[thumbnail.gallery.name],
				thumbnail: [
					...this._galleries$.getValue()[thumbnail.gallery.name].thumbnail.filter(m => m !== thumbnail).map(m => m.deselect()),
					thumbnail.select()
				]
			}
		});
	}
}

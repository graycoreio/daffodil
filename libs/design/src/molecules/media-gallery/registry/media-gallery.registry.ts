import { Injectable } from '@angular/core';
import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffMediaDirective } from "../media/media.directive";
import { BehaviorSubject, Observable } from 'rxjs';

export interface DaffMediaGalleryDict {
	[galleryName: string]: {
		gallery: DaffMediaGalleryComponent;
		media: DaffMediaDirective[];
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
	add(gallery: DaffMediaGalleryComponent, media: DaffMediaDirective) {
		let galleries = this._galleries$.getValue();
		
		galleries = {
			...galleries,
			[gallery.name]: {
				gallery: gallery,
			media: galleries[gallery.name] ? [
					...galleries[gallery.name].media,
					media
				] : [media]
			}
		};

		this._galleries$.next(galleries);
	}

	/**
	 * @description
	 * Removes a media element from the internal registry.
	 */
	remove(media: DaffMediaDirective) {
		let galleries = this._galleries$.getValue();
		const index = this._galleries$.getValue()[media.gallery.name].media.indexOf(media);

		//This should never happen, but we don't need to remove it if it doesn't exist.
		if(index == -1){
			return;	
		} 

		this._galleries$.next({
			...this._galleries$.getValue(),
			[media.gallery.name]: {
				...this._galleries$.getValue()[media.gallery.name],
				media: [
					...galleries[media.gallery.name].media.slice(0, index),
					...galleries[media.gallery.name].media.slice(index + 1)
				]
			}
		});
	}

	/**
	 * @description
	 * Selects a media element for a given gallery.
	 */
	select(media: DaffMediaDirective) {
		let galleries = this._galleries$.getValue();
		const index = this._galleries$.getValue()[media.gallery.name].media.indexOf(media);

		if(media.selected){
			return;
		}

		//This should never happen, but we don't need to remove it if it doesn't exist.
		if(index == -1){
			return;	
		} 


		this._galleries$.next({
			...this._galleries$.getValue(),
			[media.gallery.name]: {
				...this._galleries$.getValue()[media.gallery.name],
				media: [
					...this._galleries$.getValue()[media.gallery.name].media.filter(m => m !== media).map(m => m.deselect()),
					media.select()
				]
			}
		});
	}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

export interface DaffMediaGalleryDict {
	[galleryName: string]: BehaviorSubject<DaffMediaGallery>;
}

export interface DaffMediaGallery {
	gallery: DaffMediaGalleryComponent;
	thumbnails: DaffThumbnailDirective[];
}

@Injectable()
export class DaffMediaGalleryRegistry {
	galleries: DaffMediaGalleryDict = {};

	/**
	 * @description
	 * Adds a media element to the internal registry.
	 */
	add(gallery: DaffMediaGalleryComponent, thumbnail: DaffThumbnailDirective) {
	  if(this.galleries[gallery.name]) {
	    let newGallery = this.galleries[gallery.name].getValue();

	    newGallery = {
	      ...newGallery,
	      thumbnails: [
	        ...newGallery.thumbnails.filter(t => t !== thumbnail),
	        thumbnail,
	      ],
	    };
	    this.galleries[gallery.name].next(newGallery);
	  } else {
	    this.galleries[gallery.name] = new BehaviorSubject({
	      gallery,
	      thumbnails: [thumbnail],
	    });
	  }

	  if(this.galleries[gallery.name].getValue().thumbnails.length === 1) {
	    thumbnail.select();
	  }
	}

	/**
	 * @description
	 * Removes a media element from the internal registry.
	 */
	remove(thumbnail: DaffThumbnailDirective) {
	  if(!this.galleries[thumbnail.gallery.name]) {
	    return;
	  }
	  const gallery = this.galleries[thumbnail.gallery.name].getValue();
	  const index = gallery.thumbnails.indexOf(thumbnail);

	  if(index === -1) {
	    return;
	  }

	  this.galleries[thumbnail.gallery.name].next({
	    ...gallery,
	    thumbnails: [
	      ...gallery.thumbnails.slice(0, index),
	      ...gallery.thumbnails.slice(index + 1),
	    ],
	  });
	}

	/**
	 * @description
	 * Selects a media element for a given gallery.
	 */
	select(thumbnail: DaffThumbnailDirective) {
	  if(!this.galleries[thumbnail.gallery.name]) {
	    return;
	  }

	  const gallery = this.galleries[thumbnail.gallery.name].getValue();
	  const index = gallery.thumbnails.indexOf(thumbnail);

	  if(thumbnail.selected || index === -1){
	    return;
	  }

	  this.galleries[thumbnail.gallery.name].next({
	    ...gallery,
	    thumbnails: [
	      ...gallery.thumbnails.filter(m => m !== thumbnail).map(m => m.deselect()),
	      thumbnail.select(),
	    ],
	  });
	}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DaffThumbnailRegistration } from '../thumbnail/thumbnail-registration.interface';

export interface DaffMediaGalleryDict {
  [galleryName: string]: BehaviorSubject<DaffMediaGallery>;
}

export interface DaffMediaGallery {
  gallery: DaffMediaGalleryRegistration;
  thumbnails: DaffThumbnailRegistration[];
}

export const isGallery = (element: DaffThumbnailRegistration | DaffMediaGalleryRegistration): element is DaffMediaGalleryRegistration => !('gallery' in element);

@Injectable({ providedIn: 'root' })
export class DaffMediaGalleryRegistry {
  galleries: DaffMediaGalleryDict = {};

  /**
   * @description
   * Adds a media element to the internal registry.
   */
  add(gallery: DaffMediaGalleryRegistration, thumbnail?: DaffThumbnailRegistration) {
    if(this.galleries[gallery.name]) {
      let newGallery = this.galleries[gallery.name].getValue();

      if(thumbnail) {
        newGallery = {
          ...newGallery,
          thumbnails: [
            ...newGallery.thumbnails.filter(t => t !== thumbnail),
            thumbnail,
          ],
        };
      }

      this.galleries[gallery.name].next(newGallery);
    } else {
      this.galleries[gallery.name] = new BehaviorSubject({
        gallery,
        thumbnails: thumbnail ? [thumbnail] : [],
      });
    }

    if(this.galleries[gallery.name].getValue().thumbnails.length === 1) {
      thumbnail.select();
    }
  }

  /**
   * @description
   * Removes a thumbnail or gallery from the internal registry.
   */
  remove(element: DaffThumbnailRegistration | DaffMediaGalleryRegistration) {
    if(isGallery(element)) {
      this.removeGallery(element);
    } else {
      this.removeThumbnail(element);
    }
  }

  private removeThumbnail(thumbnail: DaffThumbnailRegistration) {
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

  private removeGallery(gallery: DaffMediaGalleryRegistration) {
    delete this.galleries[gallery.name];
  }

  /**
   * @description
   * Selects a media element for a given gallery.
   */
  select(thumbnail: DaffThumbnailRegistration) {
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

import {
  InjectionToken,
  Type,
} from '@angular/core';
export interface DaffMediaGalleryRegistration {
	name: string;
}
export interface DaffThumbnailRegistration {
	gallery: DaffMediaGalleryRegistration;
	selected: boolean;
	component: Type<unknown>;
	select: () => DaffThumbnailRegistration;
	deselect: () => DaffThumbnailRegistration;
}
export const DAFF_MEDIA_GALLERY_TOKEN = new InjectionToken<DaffMediaGalleryRegistration>('DAFF_MEDIA_GALLERY_TOKEN');

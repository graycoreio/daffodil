import { InjectionToken } from '@angular/core';

import { DaffMediaGalleryRegistration } from './media-gallery-registration.interface';

export const DAFF_MEDIA_GALLERY_TOKEN = new InjectionToken<DaffMediaGalleryRegistration>('DAFF_MEDIA_GALLERY_TOKEN');

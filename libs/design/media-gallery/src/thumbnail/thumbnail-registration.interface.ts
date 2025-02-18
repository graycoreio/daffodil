import { Type } from '@angular/core';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';

export interface DaffThumbnailRegistration {
  gallery: DaffMediaGalleryRegistration;
  selected: boolean;
  select: () => DaffThumbnailRegistration;
  deselect: () => DaffThumbnailRegistration;
}

import { Type } from '@angular/core';

import { DaffMediaGalleryRegistration } from '../media-gallery-registration.interface';

export interface DaffThumbnailRegistration {
  gallery: DaffMediaGalleryRegistration;
  selected: boolean;
  component: Type<unknown>;
  select: () => DaffThumbnailRegistration;
  deselect: () => DaffThumbnailRegistration;
}

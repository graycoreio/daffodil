import { createSingleInjectionToken } from '@daffodil/core';

import { DaffMediaGalleryRegistration } from './media-gallery-registration.interface';

export const {
  token: DAFF_MEDIA_GALLERY_TOKEN,
  provider: daffProvideMediaGalleryToken,
} = createSingleInjectionToken<DaffMediaGalleryRegistration>('DAFF_MEDIA_GALLERY_TOKEN');

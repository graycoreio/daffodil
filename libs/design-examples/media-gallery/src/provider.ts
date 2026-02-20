import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignMediaGalleryExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-media-gallery',
    component: () => import('./basic-media-gallery/basic-media-gallery.component').then(c => c.BasicMediaGalleryExampleComponent),
  },
  {
    id: 'iterated-media-gallery',
    component: () => import('./iterated-media-gallery/iterated-media-gallery.component').then(c => c.IteratedMediaGalleryExampleComponent),
  },
  {
    id: 'media-gallery-with-video',
    component: () => import('./media-gallery-with-video/media-gallery-with-video.component').then(c => c.MediaGalleryWithVideoExampleComponent),
  },
  {
    id: 'mismatched-sizes-media-gallery',
    component: () => import('./mismatched-sizes-media-gallery/mismatched-sizes-media-gallery.component').then(c => c.MismatchedSizesMediaGalleryExampleComponent),
  },
  {
    id: 'skeleton-media-gallery',
    component: () => import('./skeleton-media-gallery/skeleton-media-gallery.component').then(c => c.SkeletonMediaGalleryExampleComponent),
  },
));


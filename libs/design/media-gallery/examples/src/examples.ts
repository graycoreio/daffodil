import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicMediaGalleryComponent } from './basic-media-gallery/basic-media-gallery.component';
import { MismatchedSizesMediaGalleryComponent } from './mismatched-sizes-media-gallery/mismatched-sizes-media-gallery.component';
import { SkeletonMediaGalleryComponent } from './skeleton-media-gallery/skeleton-media-gallery.component';


export const MEDIA_GALLERY_EXAMPLES = [
  BasicMediaGalleryComponent,
  MismatchedSizesMediaGalleryComponent,
  SkeletonMediaGalleryComponent,
];

export const provideDaffDesignMediaGalleryExamples = () =>
  provideDaffDocsExampleComponents(...MEDIA_GALLERY_EXAMPLES);

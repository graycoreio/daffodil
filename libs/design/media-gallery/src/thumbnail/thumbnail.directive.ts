import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  OnInit,
  isDevMode,
} from '@angular/core';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';

let uniqueThumbnailId = 0;

/**
 * A structural directive marking thumbnails for the `DaffMediaGalleryComponent`.
 *
 * ```html
 * <ng-template daffThumbnail></ng-template>
 * ```
 */
@Directive({
  selector: '[daffThumbnail]',
})
export class DaffThumbnailDirective implements OnInit {

  /**
   * The id of the thumbnail.
   */
  get id(): string {
    return this.gallery.id + '-thumbnail-' + uniqueThumbnailId;
  }

  /**
   * The id of the thumbnail panel.
   */
  get panelId(): string {
    return this.id + '-el';
  }

  /**
   * The file path to a thumbnail, presumably an image.
   */
  @Input() thumbnailSrc = undefined;


  /**
   * The button label for the thumbnail.
   */
  @Input() label: string = undefined;

  @Input() isVideo = false;

  /**
   * @docs-private
   */
  constructor(
    @Inject(DAFF_MEDIA_GALLERY_TOKEN) public gallery: DaffMediaGalleryRegistration,
    public templateRef: TemplateRef<unknown>,
  ) {
    uniqueThumbnailId++;
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    if(!this.label && isDevMode()) {
      console.warn('The thumbnail ' + this.id + ' is missing a label.');
    }
  }
}

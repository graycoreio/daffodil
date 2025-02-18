import {
  Directive,
  Inject,
  Input,
  TemplateRef,
} from '@angular/core';

import { DaffSelectableDirective } from '@daffodil/design';

import { DaffThumbnailRegistration } from './thumbnail-registration.interface';
import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';

/**
 * A directive marking thumbnails for the `DaffMediaRendererComponent`. Needs to be wrapped in a `daff-media-gallery` component
 * and needs to be placed on a component that is provided as a `daffThumbnailCompatToken`.
 */
@Directive({
  selector: '[daffThumbnail]',
  standalone: true,
  hostDirectives: [{
    directive: DaffSelectableDirective,
    inputs: ['selected'],
    outputs: ['becameSelected'],
  }],
})
export class DaffThumbnailDirective implements DaffThumbnailRegistration {
  /**
   * The file path to a thumbnail, presumably an image.
   */
  @Input('daffThumbnail') thumbnail = undefined;

  /**
   * The button label for the thumbnail.
   */
  @Input() label: string = undefined;

  constructor(
    @Inject(DAFF_MEDIA_GALLERY_TOKEN) public gallery: DaffMediaGalleryRegistration,
    private selectedDirective: DaffSelectableDirective,
    public templateRef: TemplateRef<unknown>,
  ) {}

  public get selected() {
    return this.selectedDirective.selected;
  }

  public select() {
    this.selectedDirective.select();
    return this;
  }

  public deselect() {
    this.selectedDirective.deselect();
    return this;
  }
}

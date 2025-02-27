import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  OnInit,
  isDevMode,
} from '@angular/core';

import { DaffSelectableDirective } from '@daffodil/design';

import { DaffThumbnailRegistration } from './thumbnail-registration.interface';
import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';

let uniqueThumbnailId = 0;

/**
 * A directive marking thumbnails for the `DaffMediaGalleryComponent`.
 * Needs to be wrapped in a `daff-media-gallery` component.
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
export class DaffThumbnailDirective implements DaffThumbnailRegistration, OnInit {

  /**
   * The id of the thumbnail.
   */
  get id(): string {
    return (this.gallery.id ?? this.gallery.name) + '-thumbnail-' + uniqueThumbnailId;
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

  constructor(
    @Inject(DAFF_MEDIA_GALLERY_TOKEN) public gallery: DaffMediaGalleryRegistration,
    private selectedDirective: DaffSelectableDirective,
    public templateRef: TemplateRef<unknown>,
  ) {
    uniqueThumbnailId++;
  }

  ngOnInit() {
    if(!this.label && isDevMode()) {
      console.warn('The thumbnail ' + this.id + ' is missing a label.');
    }
  }

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

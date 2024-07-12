import {
  Directive,
  Inject,
  Type,
  HostBinding,
  HostListener,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { DaffSelectableDirective } from '@daffodil/design';

import { daffThumbnailCompatToken } from './thumbnail-compat.token';
import { DaffThumbnailRegistration } from './thumbnail-registration.interface';
import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

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
export class DaffThumbnailDirective implements OnInit, OnDestroy, DaffThumbnailRegistration {
  constructor(
    @Inject(daffThumbnailCompatToken) public component: Type<unknown>,
    private registry: DaffMediaGalleryRegistry,
    @Inject(DAFF_MEDIA_GALLERY_TOKEN) public gallery: DaffMediaGalleryRegistration,
    private selectedDirective: DaffSelectableDirective,
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

  /**
   * Adds a class for styling a thumbnail
   */
  @HostBinding('class.daff-thumbnail') class = true;

  /**
   * Adds a click event to trigger selection of the media element.
   *
   * @param event: MouseEvent
   */
  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    this.registry.select(this);
  }

  ngOnInit(): void {
    this.registry.add(this.gallery, this);
  }

  ngOnDestroy(): void {
    this.registry.remove(this);
  }
}

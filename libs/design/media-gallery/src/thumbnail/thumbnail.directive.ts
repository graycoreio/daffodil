import {
  Directive,
  Inject,
  Type,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';

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
})
export class DaffThumbnailDirective implements OnInit, OnDestroy, DaffThumbnailRegistration {

  /**
   * Adds a class for styling a selected thumbnail
   */
  @HostBinding('class.daff-thumbnail--selected') get selectedClass() {
    return this.selected;
  };

  constructor(
    @Inject(daffThumbnailCompatToken) public component: Type<unknown>,
    private cd: ChangeDetectorRef,
    private registry: DaffMediaGalleryRegistry,
    @Inject(DAFF_MEDIA_GALLERY_TOKEN) public gallery: DaffMediaGalleryRegistration,
  ) {}

  /**
   * Adds a class for styling a thumbnail
   */
  @HostBinding('class.daff-thumbnail') class = true;

  /**
   * A prop for determining whether or not the media element is selected.
   */
  selected = false;

  /**
   * An event that fires after the media element becomes selected.
   */
  @Output() becameSelected: EventEmitter<void> = new EventEmitter<void>();

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

  select() {
    this.selected = true;
    this.becameSelected.emit();
    this.cd.markForCheck();
    return this;
  }

  deselect() {
    this.selected = false;
    this.cd.markForCheck();
    return this;
  }
}

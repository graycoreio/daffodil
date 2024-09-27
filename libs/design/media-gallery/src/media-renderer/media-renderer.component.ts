import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Type,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectionStrategy,
  OnDestroy,
  Inject,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

/**
 * Dynamically renders the selected `DaffThumbnailDirective` in a `daff-media-gallery` any time the selected thumbnail
 * changes.
 */
@Component({
  selector: 'daff-media-renderer',
  template: '<ng-template></ng-template>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffMediaRendererComponent implements OnInit, OnDestroy {

  /**
   * Private tracker for indicating when the component is destroyed.
   */
  private _destroy$ = new Subject();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private registry: DaffMediaGalleryRegistry,
    @Inject(DAFF_MEDIA_GALLERY_TOKEN) private gallery: DaffMediaGalleryRegistration,
  ) {}

  /**
   * The slot that the "component" is rendered into.
   */
  @ViewChild(TemplateRef, { static: true, read: ViewContainerRef })
  slot: ViewContainerRef;

  ngOnInit() {
    this.registry.galleries[this.gallery.name]
      .pipe(takeUntil(this._destroy$))
      .subscribe((gallery) => {

        /**
         * Clear out the slot for the dynamically rendered thumbnail
         */
        this.slot.clear();

        const _selectedThumbnail = gallery.thumbnails.filter(media => media.selected).shift();

        /**
         * If there's no selected media, render nothing.
         */
        if(!_selectedThumbnail) {
          return;
        }

        const _selectedThumbnailComponent = _selectedThumbnail.component;

        /**
         * Create the component to insert.
         */
        const component = this.componentFactoryResolver.resolveComponentFactory(
        <Type<unknown>>_selectedThumbnailComponent.constructor,
        );
        const componentRef = this.slot.createComponent(component);

        /**
         * Fill the component with it's values from the original component
         */
        component.inputs.forEach(input => {
          componentRef.instance[input.propName] = _selectedThumbnailComponent[input.propName];
        });

        /**
         * Trigger a change detection on the component tree, outside the cycle to address
         * the fact that the component was created outside a typical CD loop.
         */
        componentRef.changeDetectorRef.detectChanges();
      });
  }

  /**
   * Used to unsubscribe from the dynamic component.
   */
  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}


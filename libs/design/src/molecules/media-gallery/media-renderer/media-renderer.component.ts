import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  Subscription,
  Subject,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

/**
 * Dynamically renders the selected `DaffThumbnailDirective` in a `daff-media-gallery` any time the selected thumbnail
 * changes.
 */
@Component({
  selector: 'daff-media-renderer',
  templateUrl: './media-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffMediaRendererComponent implements OnInit, OnDestroy {

  /**
   * Private tracker for indicating when the component is destroyed.
   */
	 private _destroy$ = new Subject();

	/**
	 * The constructor function of the component to render.
	 */
	@Input() component: Type<unknown>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private registry: DaffMediaGalleryRegistry,
		private gallery: DaffMediaGalleryComponent,
	) {}

	/**
	 * The slot that we render the "component" into.
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

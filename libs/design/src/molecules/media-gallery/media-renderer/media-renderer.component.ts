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
} from '@angular/core';

import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

@Component({
  selector: 'daff-media-renderer',
  templateUrl: './media-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffMediaRendererComponent implements OnInit {
	@Input() component: Type<unknown>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private registry: DaffMediaGalleryRegistry,
		private gallery: DaffMediaGalleryComponent,
	) {}

	@ViewChild(TemplateRef, { static: true, read: ViewContainerRef })
	slot: ViewContainerRef;

	ngOnInit() {
	  this.registry.galleries[this.gallery.name].subscribe((gallery) => {

	    /**
					 * We first clear out the slot
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
					 * Then we create the component to insert.
					 */
	    const component = this.componentFactoryResolver.resolveComponentFactory(
				<Type<unknown>>_selectedThumbnailComponent.constructor,
	    );
	    const componentRef = this.slot.createComponent(component);

	    /**
					 * We fill the component with it's values from the original component
					 */
	    component.inputs.forEach(input => {
	      componentRef.instance[input.propName] = _selectedThumbnailComponent[input.propName];
	    });

	    /**
					 * We trigger a change detection on the component tree, outside the cycle to address
					 * the fact that the component was created outside a typical CD loop.
					 */
	    componentRef.changeDetectorRef.detectChanges();
	  });
	}
}

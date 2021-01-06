import {
	Component,
	OnInit,
	ComponentFactoryResolver,
	Input,
	Type,
	ViewChild,
	ViewContainerRef,
	AfterViewInit,
	TemplateRef,
	ChangeDetectionStrategy,
	SimpleChanges,
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
		private gallery: DaffMediaGalleryComponent
	) {}

	@ViewChild(TemplateRef, { static: true, read: ViewContainerRef })
	slot: ViewContainerRef;

	ngOnInit() {
		this.registry.galleries$.subscribe((galleries) => {

			/**
			 * We first clear out the slot
			 */
			this.slot.clear();

			const _selectedMedia = galleries[this.gallery.name].media.filter(media => media.selected).shift();

			/**
			 * If there's no selected media, render nothing.
			 */
			if(!_selectedMedia) {
				return;
			}

			let _selectedMediaComponent = _selectedMedia.component;
			
			/**
			 * Then we create the component to insert.
			 */
			let component = this.componentFactoryResolver.resolveComponentFactory(
				_selectedMediaComponent.constructor as Type<unknown>
			);
			const componentRef = this.slot.createComponent(component);
			
			/**
			 * We fill the component with it's values from the original component
			 */
			component.inputs.forEach(input => {
				componentRef.instance[input.propName] = _selectedMediaComponent[input.propName];
			});

			/**
			 * We trigger a change detection on the component tree, outside the cycle to addresse
			 * the fact that the component was created outside a typical CD loop.
			 */
			componentRef.changeDetectorRef.detectChanges();
		})
	}
}

import {
	Directive,
	Input,
	Inject,
	Type,
	HostBinding,
	HostListener,
	Output,
	EventEmitter,
	ChangeDetectorRef,
	OnInit,
	OnDestroy
} from '@angular/core';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';
import { daffThumbnailCompatToken } from './thumbnail-compat.token';
import { DaffMediaGalleryComponent } from '../media-gallery.component';

@Directive({
	selector: '[daffThumbnail]',
})
export class DaffThumbnailDirective implements OnInit, OnDestroy {

	/**
	 * A prop for determining whether or not the media element is selected.
	 */
	@Input() selected = false;

	/**
	 * Adds a class for styling a gallery item
	 */
	@HostBinding('class.daff-thumbnail') class = true;

	/**
	 * Adds a class for styling a gallery item
	 */
	@HostBinding('class.daff-thumbnail--selected') get selectedClass() {
		return this.selected;
	};
	

	/**
	 * Adds a click event to trigger selection of the media element.
	 * @param $event 
	 */
	@HostListener('click', ['$event']) onClick($event: MouseEvent) {
		this.registry.select(this);
	}

	/**
	 * Adds a click event to trigger selection of the media element.
	 * @param $event 
	 */
	@HostListener('mouseover', ['$event']) onHover($event: MouseEvent) {
		this.registry.select(this);
	}

	/**
	 * An event that fires after the media element becomes selected.
	 */
	@Output() becameSelected: EventEmitter<void> = new EventEmitter<void>();

	constructor(
		@Inject(daffThumbnailCompatToken) public component: Type<unknown>,
		private cd: ChangeDetectorRef,
		private registry: DaffMediaGalleryRegistry,
		public gallery: DaffMediaGalleryComponent
	) {}


	ngOnInit(): void {
		this.registry.add(this.gallery, this);
	}

	ngOnDestroy(): void {
		this.registry.select(this);
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

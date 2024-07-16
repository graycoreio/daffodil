import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
} from '@angular/core';

import {
  daffSkeletonableMixin,
  DaffSkeletonable,
  DaffArticleEncapsulatedDirective,
} from '@daffodil/design';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

let uniqueGalleryId = 0;

/**
 * An _elementRef and an instance of renderer2 are needed for the link set mixins
 */
class DaffMediaGalleryBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffMediaGalleryBase = daffSkeletonableMixin((DaffMediaGalleryBase));

@Component({
  selector: 'daff-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    { provide: DAFF_MEDIA_GALLERY_TOKEN, useExisting: DaffMediaGalleryComponent },
  ],
  // todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['skeleton'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
})
export class DaffMediaGalleryComponent extends _daffMediaGalleryBase implements DaffMediaGalleryRegistration, DaffSkeletonable, OnInit, OnDestroy {
  /**
   * Adds a class for styling the media gallery
   */
  @HostBinding('class.daff-media-gallery') class = true;

  /**
   * The name of the gallery
   */
  @Input() name = `${uniqueGalleryId}`;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private registry: DaffMediaGalleryRegistry,
  ) {
	  	super(elementRef, renderer);
	  	uniqueGalleryId++;
  }

  ngOnInit() {
	  this.registry.add(this);
  }

  ngOnDestroy() {
	  this.registry.remove(this);
  }
}

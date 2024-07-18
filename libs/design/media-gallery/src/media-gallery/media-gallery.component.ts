import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffSkeletonableDirective,
} from '@daffodil/design';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

let uniqueGalleryId = 0;

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
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
})
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration, OnInit, OnDestroy {
  /**
   * Adds a class for styling the media gallery
   */
  @HostBinding('class.daff-media-gallery') class = true;

  /**
   * The name of the gallery
   */
  @Input() name = `${uniqueGalleryId}`;

  constructor(private registry: DaffMediaGalleryRegistry) {
    uniqueGalleryId++;
  }

  ngOnInit() {
	  this.registry.add(this);
  }

  ngOnDestroy() {
	  this.registry.remove(this);
  }
}

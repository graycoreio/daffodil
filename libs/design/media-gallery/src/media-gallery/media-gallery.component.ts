import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffSkeletonableDirective,
} from '@daffodil/design';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

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
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
  imports: [
    DaffThumbnailDirective,
    NgTemplateOutlet,
  ],
})
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration, AfterContentInit {
  /**
   * Adds a class for styling the media gallery
   * @docs-private
   */
  @HostBinding('class.daff-media-gallery') class = true;

  /**
   * The name of the gallery
   */
  @Input() name = `${uniqueGalleryId}`;

  /**
   * @docs-private
   */
  @ContentChildren(DaffThumbnailDirective) _thumbnails: QueryList<DaffThumbnailDirective>;

  constructor() {
    uniqueGalleryId++;
  }

  /**
   * @docs-private
   */
  _selectedThumbnail: DaffThumbnailDirective = undefined;

  /**
   * Select a specific thumbnail for this gallery.
   */
  selectThumbnail(thumbnail: DaffThumbnailDirective) {
    this._selectedThumbnail?.deselect();
    thumbnail.select();
    this._selectedThumbnail = thumbnail;
  }

  /**
   * @docs-private
   */
  ngAfterContentInit(): void {
    if(this._thumbnails.first) {
      this.selectThumbnail(this._thumbnails.first);
    }
  }
}

import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChildren,
  ElementRef,
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
  private _id: string;

  /**
   * @docs-private
   */
  @HostBinding('attr.role')
  role = 'tablist';

  /**
   * The id of the gallery.
   */
  @HostBinding('attr.id')
  @Input()
  get id() {
    return this._id;
  }
  set id(val: string | undefined | null) {
    if(!val){
      return;
    }
    this._id = val;
  };

  /**
   * Adds a class for styling the media gallery
   * @docs-private
   */
  @HostBinding('class.daff-media-gallery') class = true;

  /**
   * The name of the gallery.
   * @deprecated use `id` instead.
   */
  @Input() name: string;

  /**
   * @docs-private
   */
  @ContentChildren(DaffThumbnailDirective) _thumbnails: QueryList<DaffThumbnailDirective>;

  /**
   * @docs-private
   */
  @ViewChildren('thumbnailButtons', { read: ElementRef }) private _thumbnailButtons: QueryList<ElementRef<HTMLElement>>;

  constructor(private skeletonDirective: DaffSkeletonableDirective) {
    uniqueGalleryId++;
    this.name = 'gallery-' + uniqueGalleryId;
  }

  get skeleton() {
    return this.skeletonDirective.skeleton;
  }

  /**
   * @docs-private
   */
  _selectedThumbnail: DaffThumbnailDirective = undefined;

  /**
   * @docs-private
   */
  private _selectedIndex: number = undefined;

  private focusSelected() {
    this._thumbnailButtons.get(this._selectedIndex)?.nativeElement.focus();
  }

  /**
   * Select a specific entry in the media gallery by its index (starting at 0).
   */
  selectIndex(index: number) {
    if(this._thumbnails.get(index)){
      this._selectedIndex = index;
      this._selectedThumbnail?.deselect();
      this._thumbnails.get(index).select();
      this._selectedThumbnail = this._thumbnails.get(index);
    }
  }

  /**
   * Select a specific thumbnail for this gallery.
   */
  selectThumbnail(thumbnail: DaffThumbnailDirective) {
    if(!thumbnail){
      return;
    }
    this._selectedThumbnail?.deselect();
    thumbnail.select();
    this._selectedThumbnail = thumbnail;
    this._selectedIndex = this._thumbnails.toArray().findIndex((el) => el === thumbnail);
  }

  /**
   * @docs-private
   */
  ngAfterContentInit(): void {
    if(this._thumbnails.first) {
      this.selectThumbnail(this._thumbnails.first);
    }
  }

  /**
   * Navigate to the next element in the list of thumbnails.
   */
  next(focus: boolean = true) {
    this.selectIndex((this._selectedIndex + 1 + this._thumbnails.length) % this._thumbnails.length);
    this.focusSelected();
  }

  /**
   * Navigate to the previous element in the list of thumbnails.
   */
  previous(focus: boolean = true) {
    this.selectIndex((this._selectedIndex + -1 + this._thumbnails.length) % this._thumbnails.length);
    this.focusSelected();
  }

  /**
   * Select the first element
   */
  selectFirst(focus: boolean = true) {
    this.selectIndex(0);
    this.focusSelected();
  }

  /**
   * Select the last element of the gallery.
   */
  selectLast(focus: boolean = true) {
    this.selectIndex(this._thumbnails.length - 1);
    this.focusSelected();
  }
}

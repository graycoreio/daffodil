/* eslint-disable quote-props */
import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  QueryList,
  ViewChildren,
  ElementRef,
  Output,
  EventEmitter,
  contentChildren,
  signal,
  computed,
  Signal,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffSelectableDirective,
  DaffSkeletonableDirective,
} from '@daffodil/design';

import { DaffMediaGalleryRegistration } from '../helpers/media-gallery-registration.interface';
import { DAFF_MEDIA_GALLERY_TOKEN } from '../helpers/media-gallery-token';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

let uniqueGalleryId = 0;

/**
 * The `DaffMediaGalleryComonent` is used to display a group of thumbnails in a gallery format.
 *
 * ```html
 * <daff-media-gallery>
 *  <ng-template daffThumbnail thumbnailSrc="/thumbnail-path.jpg" label="Your description">
 *    <daff-image src="/image-path.jpg" alt="Your description" width="100" height="100"></daff-image>
 *  </ng-template>
 * </daff-media-gallery>
 * ```
 */
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
  host: {
    'class': 'daff-media-gallery',
    '[attr.id]': 'id',
  },
  imports: [
    DaffThumbnailDirective,
    NgTemplateOutlet,
    DaffSelectableDirective,
  ],
})
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration {
  /**
   * The internal ID of the gallery.
   */
  private _id = 'media-gallery-' + uniqueGalleryId;

  /**
   * Custom ID for the media gallery that overrides the auto-generated one. When using this input, it is your responsibility to ensure that the ID is unique.
   */
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
   * An event indicating that the selected media gallery element has changed.
   */
  @Output() elementChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * @docs-private
   */
  _thumbnails = contentChildren(DaffThumbnailDirective);

  /**
   * @docs-private
   */
  @ViewChildren('thumbnailButtons', { read: ElementRef }) private _thumbnailButtons: QueryList<ElementRef<HTMLElement>>;

  /**
   * @docs-private
   */
  constructor(private skeletonDirective: DaffSkeletonableDirective) {
    uniqueGalleryId++;
  }

  /**
   * @docs-private
   *
   * Whether or not the component its currently displaying its skeleton state.
   */
  get skeleton() {
    return this.skeletonDirective.skeleton;
  }

  /**
   * @docs-private
   */
  _selectedThumbnail: Signal<DaffThumbnailDirective> = computed(() => {
    const idx = this._selectedIndex();
    if(!idx) {
      return this._thumbnails().at(0);
    }
    return this._thumbnails().at(idx);
  });

  private _selectedIndex = signal<number | null>(null);

  private focusSelected() {
    this._thumbnailButtons.get(this._selectedIndex())?.nativeElement.focus();
  }

  /**
   * Select a specific entry in the media gallery by its index.
   *
   * @param index The index to set, starting at 0.
   */
  selectIndex(index: number) {
    this._selectedIndex.set(index);
    this.elementChange.emit(index);
  }

  /**
   * Navigate to the next element in the list of thumbnails.
   *
   * @param focus Whether to move focus to the newly selected item.
   */
  next(focus: boolean = true) {
    this._selectedIndex.update((curr) => ((curr ?? 0) + 1 + this._thumbnails().length) % this._thumbnails().length);
    this.elementChange.emit(this._selectedIndex());

    if(focus) {
      this.focusSelected();
    }
  }

  /**
   * Navigate to the previous element in the list of thumbnails.
   *
   * @param focus Whether to move focus to the newly selected item.
   */
  previous(focus: boolean = true) {
    this._selectedIndex.update((curr) => ((curr ?? 0) - 1 + this._thumbnails().length) % this._thumbnails().length);
    this.elementChange.emit(this._selectedIndex());

    if(focus) {
      this.focusSelected();
    }
  }

  /**
   * Select the first element.
   *
   * @param focus Whether to move focus to the newly selected item.
   */
  selectFirst(focus: boolean = true) {
    this._selectedIndex.set(0);
    this.elementChange.emit(this._selectedIndex());

    if(focus) {
      this.focusSelected();
    }
  }

  /**
   * Select the last element of the gallery.
   *
   * @param Whether to move focus to the newly selected item.
   */
  selectLast(focus: boolean = true) {
    this._selectedIndex.set(this._thumbnails().length - 1);
    this.elementChange.emit(this._selectedIndex());

    if(focus) {
      this.focusSelected();
    }
  }
}

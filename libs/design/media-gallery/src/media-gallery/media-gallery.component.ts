
import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  contentChildren,
  viewChildren,
  signal,
  computed,
  input,
  output,
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
 *    <img daff-image ngSrc="/image-path.jpg" alt="Your description" width="100" height="100" />
 *  </ng-template>
 * </daff-media-gallery>
 * ```
 */
@Component({
  selector: 'daff-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrl: './media-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

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
    class: 'daff-media-gallery',
    '[attr.id]': 'id()',
  },
  imports: [
    DaffThumbnailDirective,
    NgTemplateOutlet,
    DaffSelectableDirective,
  ],
})
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration {
  /**
   * The auto-generated ID of the gallery.
   */
  private _defaultId = 'media-gallery-' + uniqueGalleryId;

  /**
   * Custom ID for the media gallery that overrides the auto-generated one. When using this input, it is your responsibility to ensure that the ID is unique.
   */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  customId = input<string | undefined | null>(undefined, { alias: 'id' });

  /**
   * @docs-private
   *
   * The resolved ID of the gallery: the custom ID when provided, otherwise the auto-generated one.
   */
  id = computed(() => this.customId() || this._defaultId);

  /**
   * An event indicating that the selected media gallery element has changed.
   */
  elementChange = output<number>();

  /**
   * @docs-private
   */
  _thumbnails = contentChildren(DaffThumbnailDirective);

  /**
   * @docs-private
   */
  private _thumbnailButtons = viewChildren('thumbnailButtons', { read: ElementRef });

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

  /**
   * @docs-private
   *
   * Whether the given thumbnail is the currently selected one.
   */
  _isSelected(thumbnail: DaffThumbnailDirective): boolean {
    return thumbnail === this._selectedThumbnail();
  }

  private focusSelected() {
    const index = this._selectedIndex();
    if(index !== null) {
      this._thumbnailButtons().at(index)?.nativeElement.focus();
    }
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

import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  HostBinding,
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
 * ```html
 * <daff-media-gallery></daff-media-gallery>
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
  imports: [
    DaffThumbnailDirective,
    NgTemplateOutlet,
    DaffSelectableDirective,
  ],
})
export class DaffMediaGalleryComponent implements DaffMediaGalleryRegistration {

  /**
   * @docs-private
   */
  @HostBinding('attr.role') role = 'tablist';

  /**
   * The internal id of the gallery.
   */
  private _id: string;

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
   * @docs-private
   *
   * Adds a class for styling the media gallery
   */
  @HostBinding('class.daff-media-gallery') private class = true;

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
   * Select a specific entry in the media gallery by its index (starting at 0).
   */
  selectIndex(index: number) {
    this._selectedIndex.set(index);
    this.elementChange.emit(index);
  }

  /**
   * Navigate to the next element in the list of thumbnails.
   */
  next(focus: boolean = true) {
    this._selectedIndex.update((curr) => ((curr ?? 0) + 1 + this._thumbnails().length) % this._thumbnails().length);
    this.elementChange.emit(this._selectedIndex());
    this.focusSelected();
  }

  /**
   * Navigate to the previous element in the list of thumbnails.
   */
  previous(focus: boolean = true) {
    this._selectedIndex.update((curr) => ((curr ?? 0) - 1 + this._thumbnails().length) % this._thumbnails().length);
    this.elementChange.emit(this._selectedIndex());
    this.focusSelected();
  }

  /**
   * Select the first element
   */
  selectFirst(focus: boolean = true) {
    this._selectedIndex.set(0);
    this.elementChange.emit(this._selectedIndex());
    this.focusSelected();
  }

  /**
   * Select the last element of the gallery.
   */
  selectLast(focus: boolean = true) {
    this._selectedIndex.set(this._thumbnails().length - 1);
    this.elementChange.emit(this._selectedIndex());
    this.focusSelected();
  }
}

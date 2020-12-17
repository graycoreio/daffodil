import { Component, ContentChildren, QueryList, AfterContentInit, Type, HostBinding, AfterContentChecked } from '@angular/core';
import { DaffMediaDirective } from './media/media.directive';

@Component({
  selector: 'daff-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class DaffMediaGalleryComponent implements AfterContentInit {
  @HostBinding('class.daff-media-gallery') class = true;

  @ContentChildren(DaffMediaDirective) mediaList: QueryList<DaffMediaDirective>;

  ngAfterContentInit(): void {
    this.mediaList.changes.subscribe((mediaList: DaffMediaDirective[]) => {
      const media = mediaList.filter((item) => item.selected)[0];
      this._component = media.component;
      console.log('test');
    });
  }

  _component: Type<any>;
}

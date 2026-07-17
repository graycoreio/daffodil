
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

@Component({
  template: `
    <daff-media-gallery>
      <ng-template daffThumbnail label="First">
        <div>First</div>
      </ng-template>
      <ng-template daffThumbnail>
        <div>Second</div>
      </ng-template>
    </daff-media-gallery>
  `,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
  ],
})
class DefaultWrapperComponent {}

describe('@daffodil/design/media-gallery | DaffMediaGalleryComponent | Defaults', () => {
  let fixture: ComponentFixture<DefaultWrapperComponent>;
  let de: DebugElement;
  let thumbnail: NodeListOf<HTMLButtonElement>;
  let selectedThumbnail: ReturnType<HTMLElement['querySelector']>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DefaultWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWrapperComponent);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    thumbnail = de.nativeElement.querySelectorAll('.daff-thumbnail');
    selectedThumbnail = de.nativeElement.querySelector('.daff-media-gallery__selected-thumbnail');
  });

  it('should add a class of "daff-media-gallery" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-media-gallery': true,
    }));
  });

  it('should select the first element by default', () => {
    expect(thumbnail[0].classList.contains('daff-selected')).toBeTrue();
    expect(selectedThumbnail.id).toBeTruthy();
  });

  it('should not select the second element by default', () => {
    expect(thumbnail[1].classList.contains('daff-selected')).toBeFalse();
    expect(thumbnail[1].ariaSelected).toEqual('false');
  });

  it('should automatically set an id on each thumbnail', () => {
    expect(thumbnail[1].id).toBeTruthy();
  });
});

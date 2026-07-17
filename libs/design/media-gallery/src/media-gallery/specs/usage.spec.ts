import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_MEDIA_GALLERY_COMPONENTS,
  DaffMediaGalleryComponent,
} from '@daffodil/design/media-gallery';

@Component({
  template: `
    <daff-media-gallery [name]="nameValue()" [skeleton]="skeleton()" [id]="idValue()">
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
class WrapperComponent {
  nameValue = signal<string>(undefined);
  skeleton = signal(false);
  idValue = signal<string>(undefined);
}

describe('@daffodil/design/media-gallery | DaffMediaGalleryComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;
  const stubName = 'some name';
  let thumbnailButtons: NodeListOf<HTMLButtonElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.nameValue.set(stubName);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    component = de.componentInstance;
    thumbnailButtons = de.nativeElement.querySelectorAll('.daff-thumbnail');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take skeleton as an input', () => {
    wrapper.skeleton.set(true);
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-skeleton')).toEqual(true);
  });

  it('should render a list of buttons for each thumbnail provided', () => {
    fixture.detectChanges();
    expect(thumbnailButtons.length).toEqual(2);
  });

  it('thumbnail buttons should have aria-labels if provided', () => {
    fixture.detectChanges();
    expect(thumbnailButtons[0].ariaLabel).toEqual('First');
  });

  it('thumbnail buttons should have aria-controls', () => {
    fixture.detectChanges();
    expect(thumbnailButtons[0].getAttribute('aria-controls')).toBeTruthy();
  });

  it('should use the gallery id for thumbnail ids if the gallery has an input id', () => {
    wrapper.idValue.set('test-gallery');
    fixture.detectChanges();
    expect(thumbnailButtons[1].id).toContain('test-gallery');
  });

  it('should set an id on the gallery if an id is set', () => {
    wrapper.idValue.set('test-gallery');
    fixture.detectChanges();
    expect(de.nativeElement.id).toEqual('test-gallery');
  });

  it('should report whether a thumbnail is the selected one', () => {
    const thumbnails = component._thumbnails();
    component.selectIndex(1);
    fixture.detectChanges();

    expect(component._isSelected(thumbnails[1])).toBeTrue();
    expect(component._isSelected(thumbnails[0])).toBeFalse();
  });

  describe('navigation', () => {
    it('should navigate to the second element from the first element on next', () => {
      component.next();
      fixture.detectChanges();
      expect(document.activeElement).toEqual(thumbnailButtons[1]);
    });

    it('should wrap around from the last element to the first element on next', () => {
      component.selectLast();
      component.next();
      fixture.detectChanges();
      expect(document.activeElement).toEqual(thumbnailButtons[0]);
    });

    it('should navigate to the first element from the second element on previous', () => {
      component.selectFirst();
      component.next();
      component.previous();
      fixture.detectChanges();
      expect(document.activeElement).toEqual(thumbnailButtons[0]);
    });

    it('should wrap around from the first element to the last element on previous', () => {
      component.selectFirst();
      component.previous();
      fixture.detectChanges();
      expect(document.activeElement).toEqual(thumbnailButtons[1]);
    });
  });

  it('should select a specific thumbnail when that thumbnail is clicked', () => {
    component.selectFirst();
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('.daff-thumbnail'));
    buttons.at(1).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(buttons.at(1).attributes['aria-selected']).toEqual('true');
  });
});

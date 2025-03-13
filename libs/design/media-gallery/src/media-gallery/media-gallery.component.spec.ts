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

import { DaffMediaGalleryComponent } from './media-gallery.component';
import { DaffThumbnailDirective } from '../thumbnail/thumbnail.directive';

@Component({
  template: `
    <daff-media-gallery [name]="nameValue" [skeleton]="skeleton" [id]="idValue">
      <ng-template daffThumbnail label="First">
        <div>First</div>
      </ng-template>
      <ng-template daffThumbnail>
        <div>Second</div>
      </ng-template>
    </daff-media-gallery>
  `,
  imports: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
  ],
})
class WrapperComponent {
  nameValue: string;
  skeleton = false;
  idValue: string;
}

describe('@daffodil/design/media-gallery | DaffMediaGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;
  const stubName = 'some name';
  let thumbnailButtons: NodeListOf<HTMLButtonElement>;
  let panelEl: ReturnType<HTMLElement['querySelector']>;

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
    wrapper.nameValue = stubName;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    component = de.componentInstance;
    thumbnailButtons = de.nativeElement.querySelectorAll('.daff-thumbnail');
    panelEl = de.nativeElement.querySelector('.daff-media-gallery__selected-thumbnail');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a daff-media-gallery class to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-media-gallery': true,
    }));
  });

  it('should take skeleton as an input', () => {
    wrapper.skeleton = true;
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

  it('should select the first element by default', () => {
    fixture.detectChanges();
    expect(thumbnailButtons[0].classList.contains('daff-selected')).toBeTrue();
    expect(panelEl.id).toBeTruthy();
  });

  it('should not select the second element by default', () => {
    fixture.detectChanges();
    expect(thumbnailButtons[1].classList.contains('daff-selected')).toBeFalse();
    expect(thumbnailButtons[1].ariaSelected).toEqual('false');
  });

  it('should an id on each thumbnail automatically', () => {
    fixture.detectChanges();
    expect(thumbnailButtons[1].id).toBeTruthy();
  });

  it('should use the gallery id for thumbnail ids if the gallery has an input id', () => {
    wrapper.idValue = 'test-gallery';
    fixture.detectChanges();
    expect(thumbnailButtons[1].id).toContain('test-gallery');
  });

  it('should set an id on the gallery if an id is set', () => {
    wrapper.idValue = 'test-gallery';
    fixture.detectChanges();
    expect(de.nativeElement.id).toEqual('test-gallery');
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


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

import { DaffThumbnailDirective } from '../../thumbnail/thumbnail.directive';
import { DaffMediaGalleryComponent } from '../media-gallery.component';

@Component({
  template: '<daff-media-gallery></daff-media-gallery>',
  imports: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
  ],
})
class DefaultWrapperComponent {}

describe('DaffMediaGalleryComponent | Defaults', () => {
  let wrapper: DefaultWrapperComponent;
  let fixture: ComponentFixture<DefaultWrapperComponent>;
  let de: DebugElement;
  let component: DaffMediaGalleryComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DefaultWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-media-gallery'));
    component = de.componentInstance;
  });

  it('should add a class of "daff-media-gallery" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-media-gallery': true,
    }));
  });

  it('should have a role of tablist', () => {
    expect(component.role).toBe('tablist');
  });
});

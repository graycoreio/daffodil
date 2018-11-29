import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffGalleryImageComponent } from './gallery-image.component';

@Component({template: '<daff-gallery-image class="host-component" [selected]="selectedValue"><div class="inner-element"></div></daff-gallery-image>'})
class TestGalleryImageWrapper {
  selectedValue: boolean = true;
}

describe('DaffGalleryImageComponent', () => {
  let component: TestGalleryImageWrapper;
  let fixture: ComponentFixture<TestGalleryImageWrapper>;
  let hostElement;
  let galleryImage: DaffGalleryImageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestGalleryImageWrapper,
        DaffGalleryImageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGalleryImageWrapper);
    component = fixture.componentInstance;

    hostElement = fixture.debugElement.query(By.css('.host-component'));
    galleryImage = fixture.debugElement.query(By.css('daff-gallery-image')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an image-gallery__gallery-image class to host element', () => {
    expect(hostElement.nativeElement.classList.contains('image-gallery__gallery-image')).toBeTruthy();
  });

  it('should transclude', () => {
    expect(hostElement.query(By.css('.inner-element'))).not.toBeNull();
  });

  it('should be able to take selected as input', () => {
    expect(galleryImage.selected).toEqual(true);
  });

  describe('when selected is true', () => {
    
    it('should add the image-gallery__gallery-image--selected class to host element', () => {
      component.selectedValue = true
      fixture.detectChanges();

      expect(hostElement.nativeElement.classList.contains('image-gallery__gallery-image--selected')).toBeTruthy();
    });
  });

  describe('when selected is false', () => {
    
    it('should not add the image-gallery__gallery-image--selected class to host element', () => {
      component.selectedValue = false;
      fixture.detectChanges();

      expect(hostElement.nativeElement.classList.contains('image-gallery__gallery-image--selected')).toBeFalsy();
    });
  });
});

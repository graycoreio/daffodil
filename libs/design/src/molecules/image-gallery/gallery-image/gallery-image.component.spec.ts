import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffGalleryImageComponent } from './gallery-image.component';

@Component({template: '<daff-gallery-image class="host-component" [selected]="selectedValue"><div class="inner-element"></div></daff-gallery-image>'})
class WrapperComponent {
  selectedValue = true;
}

describe('DaffGalleryImageComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let hostElement;
  let component: DaffGalleryImageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffGalleryImageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    hostElement = fixture.debugElement.query(By.css('.host-component'));
    component = fixture.debugElement.query(By.css('daff-gallery-image')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add an daff-image-gallery__daff-gallery-image class to host element', () => {
    expect(hostElement.nativeElement.classList.contains('daff-image-gallery__daff-gallery-image')).toBeTruthy();
  });

  it('should transclude', () => {
    expect(hostElement.query(By.css('.inner-element'))).not.toBeNull();
  });

  it('should be able to take selected as input', () => {
    expect(component.selected).toEqual(true);
  });

  describe('when selected is true', () => {
    
    it('should add the daff-image-gallery__daff-gallery-image--selected class to host element', () => {
      wrapper.selectedValue = true
      fixture.detectChanges();

      expect(hostElement.nativeElement.classList.contains('daff-image-gallery__daff-gallery-image--selected')).toBeTruthy();
    });
  });

  describe('when selected is false', () => {
    
    it('should not add the daff-image-gallery__daff-gallery-image--selected class to host element', () => {
      wrapper.selectedValue = false;
      fixture.detectChanges();

      expect(hostElement.nativeElement.classList.contains('daff-image-gallery__daff-gallery-image--selected')).toBeFalsy();
    });
  });
});

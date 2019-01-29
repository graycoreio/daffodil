import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffImageGalleryComponent } from './image-gallery.component';
import { Component } from '@angular/core';
import { DaffImageListComponent } from '../../image-list/public_api';
import { DaffGalleryImageComponent } from '../gallery-image/gallery-image.component';

@Component({ template: 
  `<daff-image-gallery>
    <div daff-active-image class="test-active-image"></div>
    <daff-gallery-image class="test-gallery-image"></daff-gallery-image>
   </daff-image-gallery>`})
class WrapperComponent {}

describe('DaffImageGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffImageListComponent,
        DaffImageGalleryComponent,
        DaffGalleryImageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render [daff-active-image] inside .daff-image-gallery__active-image', () => {
    const activeImageElement = fixture.debugElement.query(By.css('.daff-image-gallery__active-image'));

    expect(activeImageElement.query(By.css('.test-active-image'))).not.toBeNull();
  });

  it('should render daff-gallery-image inside .daff-image-gallery__image-list', () => {
    const imageListElement = fixture.debugElement.query(By.css('.daff-image-gallery__image-list'));

    expect(imageListElement.query(By.css('.test-gallery-image'))).not.toBeNull();
  });
});

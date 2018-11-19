import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImageGalleryComponent } from './image-gallery.component';
import { Component } from '@angular/core';
import { ImageListComponent } from '../../image-list/public_api';

@Component({ template: 
  `<daff-image-gallery>
    <div daff-active-image class="test-active-image"></div>
    <div daff-gallery-image class="test-gallery-image"></div>
   </daff-image-gallery>`})
class TestImageGalleryComponentWrapper {}

describe('ImageGalleryComponent', () => {
  let component: TestImageGalleryComponentWrapper;
  let fixture: ComponentFixture<TestImageGalleryComponentWrapper>;
  let imageGallery: ImageGalleryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestImageGalleryComponentWrapper,
        ImageListComponent,
        ImageGalleryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageGalleryComponentWrapper);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    imageGallery = fixture.debugElement.query(By.css('daff-image-gallery')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render [daff-active-image] inside .image-gallery__active-image', () => {
    let activeImageElement = fixture.debugElement.query(By.css('.image-gallery__active-image'));

    expect(activeImageElement.query(By.css('.test-active-image'))).not.toBeNull();
  });

  it('should render [daff-gallery-image] inside .image-gallery__image-list', () => {
    let imageListElement = fixture.debugElement.query(By.css('.image-gallery__image-list'));

    expect(imageListElement.query(By.css('.test-gallery-image'))).not.toBeNull();
  });
});

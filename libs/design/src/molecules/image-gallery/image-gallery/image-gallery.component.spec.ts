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
class TestDaffImageGalleryComponentWrapper {}

describe('DaffImageGalleryComponent', () => {
  let component: TestDaffImageGalleryComponentWrapper;
  let fixture: ComponentFixture<TestDaffImageGalleryComponentWrapper>;
  let imageGallery: DaffImageGalleryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDaffImageGalleryComponentWrapper,
        DaffImageListComponent,
        DaffImageGalleryComponent,
        DaffGalleryImageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffImageGalleryComponentWrapper);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    imageGallery = fixture.debugElement.query(By.css('daff-image-gallery')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render [daff-active-image] inside .daff-image-gallery__active-image', () => {
    let activeImageElement = fixture.debugElement.query(By.css('.daff-image-gallery__active-image'));

    expect(activeImageElement.query(By.css('.test-active-image'))).not.toBeNull();
  });

  it('should render daff-gallery-image inside .daff-image-gallery__daff-image-list', () => {
    let imageListElement = fixture.debugElement.query(By.css('.daff-image-gallery__daff-image-list'));

    expect(imageListElement.query(By.css('.test-gallery-image'))).not.toBeNull();
  });
});

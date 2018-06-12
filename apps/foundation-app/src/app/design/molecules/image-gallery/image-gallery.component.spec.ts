import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryComponent } from './image-gallery.component';
import { Component, Input, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Image } from '../../interfaces/image';
import { ImageFactory } from '../../testing/factories/image.factory';

@Component({template: '<image-gallery [images]="images" [selectedImage]="selectedImageValue"></image-gallery>'})
class TestImageGalleryWrapper {
  images: Image[] = [];
  selectedImageValue: Image;
}

@Component({selector: 'image-list', template: ''})
class MockImageListComponent {
  @Input() images: Image[];
  @Input() selectedImage: Image;
}

fdescribe('ImageGalleryComponent', () => {
  let component: TestImageGalleryWrapper;
  let fixture: ComponentFixture<TestImageGalleryWrapper>;

  let imageGalleryComponent: DebugElement;
  let stubImages: Image[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestImageGalleryWrapper,
        ImageGalleryComponent,
        MockImageListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageGalleryWrapper);
    component = fixture.componentInstance;

    stubImages = [
      new ImageFactory().create(),
      new ImageFactory().create(),
    ];

    component.images = stubImages;
    component.selectedImageValue = stubImages[0];
    
    fixture.detectChanges();

    imageGalleryComponent = fixture.debugElement.query(By.css('.image-gallery'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('using the `image-gallery` component inside another component', () => {

    it('should be able to take images as input', () => {
      expect(imageGalleryComponent.componentInstance.images).toEqual(stubImages);
    });
  
    it('should be able to take a selectedImage as input', () => {
      expect(imageGalleryComponent.componentInstance.selectedImage).toEqual(component.selectedImageValue);
    });
  });

  describe('ngOnInit', () => {

    it('should default the selectedImage to the first image if the selectedImage is not set', () => {
        imageGalleryComponent.componentInstance.selectedImage = null;
        expect(imageGalleryComponent.componentInstance.selectedImage).toBe(null);
        imageGalleryComponent.componentInstance.ngOnInit();
        expect(imageGalleryComponent.componentInstance.selectedImage).toBe(stubImages[0]);
    });

    it('should not set a selected image if there are no images passed in.', () => {
      imageGalleryComponent.componentInstance.images = [];
      imageGalleryComponent.componentInstance.selectedImage = null;

      imageGalleryComponent.componentInstance.ngOnInit();

      expect(imageGalleryComponent.componentInstance.images).toEqual([]);
      expect(imageGalleryComponent.componentInstance.selectedImage).toBe(null);
    });
  });

  describe('when a selectedImage is set', () => {

    let selectedImage;

    beforeEach(() => {
      selectedImage = fixture.debugElement.query(By.css('img'));
    });

    it('should show the selected image', () => {
      expect(selectedImage.nativeElement.src).toEqual(imageGalleryComponent.componentInstance.selectedImage.url);
    });

    it('should set an alt tag on the image', () => {
      expect(selectedImage.nativeElement.alt).toEqual(imageGalleryComponent.componentInstance.selectedImage.label);
    })
  });

  describe('when images is not set or empty', () => {

    it('should not show a selected image', () => {
      component.images = [];
      component.selectedImageValue = null;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('image-gallery') === null).toBe(false);
    });
  });

  describe('changeImage', () => {

    it('should set selectedImage to argument', () => {
      let selectedImage = 'selectedImage';
      imageGalleryComponent.componentInstance.changeImage(selectedImage);
      expect(imageGalleryComponent.componentInstance.selectedImage).toEqual(selectedImage);
    });
  });

  describe('on `image-list`', () => {

    let imageListComponent;

    beforeEach(() => {
      imageListComponent = fixture.debugElement.query(By.css('image-list'));
    });

    it('sets images', () => {
      expect(imageListComponent.componentInstance.images).toEqual(stubImages);
    });

    it('sets selectedImage', () => {
      expect(imageListComponent.componentInstance.selectedImage).toEqual(stubImages[0]);
    });
  });
});

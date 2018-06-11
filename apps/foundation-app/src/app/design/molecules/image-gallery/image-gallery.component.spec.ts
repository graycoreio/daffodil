import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ImageGalleryComponent } from './image-gallery.component';
import { Component, Input, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Image } from '../../interfaces/image';
import { ImageFactory } from '../../testing/factories/image.factory';

@Component({template: '<image-gallery [images]="images"></image-gallery>'})
class TestImageGalleryWrapper {
  images: Image[] = [];
}

@Component({selector: 'image-list', template: ''})
class MockImageListComponent {
  @Input() images: Image[];
  @Input() selectedImage: Image;
}

describe('ImageGalleryComponent', () => {
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
    imageGalleryComponent = fixture.debugElement.query(By.css('.image-gallery'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('using the `image-gallery` component inside another component', () => {
    it('should be able to take images as input', () => {
      expect(imageGalleryComponent.componentInstance.images).toEqual(stubImages);
    });
  
    xit('should be able to take a selectedImage as input', () => {
      expect(imageGalleryComponent.componentInstance.selectedImage).toEqual(null);
    });
  });

  describe('ngOnInit', () => {
    it('should default the selectedImage to the first image if the selectedImage is not set', () => {
        imageGalleryComponent.componentInstance.selectedImage = null;
        expect(imageGalleryComponent.componentInstance.selectedImage).toBe(null);
        imageGalleryComponent.componentInstance.ngOnInit();
        expect(imageGalleryComponent.componentInstance.selectedImage).toBe(stubImages[0]);
    });

    it('it not set a selected image if there are no images passed in.', () => {
      imageGalleryComponent.componentInstance.images = [];
      imageGalleryComponent.componentInstance.selectedImage = null;

      imageGalleryComponent.componentInstance.ngOnInit();

      expect(imageGalleryComponent.componentInstance.images).toEqual([]);
      expect(imageGalleryComponent.componentInstance.selectedImage).toBe(null);
    });
  });


  xdescribe('when a selectedImage is set', () => {
    it('should show the selected image', () => {
      
    });

    it('should set an alt tag on the image', () => {

    })
  });

  xdescribe('when images is not set or empty', () => {
    it('should show nothing', () => {

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
    it('sets images', () => {
      let imageListComponent = fixture.debugElement.query(By.css('image-list'));
      expect(imageListComponent.componentInstance.images).toEqual(stubImages);
    });
  });
});

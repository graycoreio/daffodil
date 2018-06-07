import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ImageGalleryComponent } from './image-gallery.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<image-gallery [imgUrls]="imgUrlsValue"></image-gallery>'})
class TestImageGalleryWrapper {
  imgUrlsValue: string[];
}

@Component({selector: 'image-list', template: ''})
class MockImageListComponent {
  @Input() imgUrls: string[];
}

describe('ImageGalleryComponent', () => {
  let component: TestImageGalleryWrapper;
  let fixture: ComponentFixture<TestImageGalleryWrapper>;
  let stubImgUrls: string[];
  let imageGalleryComponent;

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
    stubImgUrls = [
      "imgUrl",
      "imgUrl"
    ]
    component.imgUrlsValue = stubImgUrls;
    imageGalleryComponent = fixture.debugElement.query(By.css('.image-gallery'));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take imgUrls as input', () => {
    expect(imageGalleryComponent.componentInstance.imgUrls).toEqual(stubImgUrls);
  });

  describe('ngAfterViewInit', () => {
    
    it('should call updateImageGalleryHeight', fakeAsync(() => {
      tick(500);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        spyOn(imageGalleryComponent.componentInstance, 'updateImageGalleryHeight').and.callThrough();
        expect(imageGalleryComponent.componentInstance.updateImageGalleryHeight).toHaveBeenCalled();
      })
    }));
  });

  describe('setSelectedImg', () => {
    
    it('should set selectedImg to argument', () => {
      let selectedImage = 'selectedImgUrl';
      imageGalleryComponent.componentInstance.setSelectedImg(selectedImage);

      expect(imageGalleryComponent.componentInstance.selectedImg).toEqual(selectedImage);
    });
  });

  describe('onResize', () => {
    
    it('calls updateImageGalleryHeight', () => {
      spyOn(imageGalleryComponent.componentInstance, 'updateImageGalleryHeight');
      imageGalleryComponent.componentInstance.onResize();

      expect(imageGalleryComponent.componentInstance.updateImageGalleryHeight).toHaveBeenCalled();
    });
  });

  describe('updateImageGalleryHeight', () => {

    let imageGalleryWidth;
    
    beforeEach(() => {
      imageGalleryWidth = 100;
      let imageGalleryWidthString = imageGalleryWidth + 'px';
      (<HTMLElement>document.getElementsByClassName('image-gallery')[0]).style.width = imageGalleryWidthString;

      imageGalleryComponent.componentInstance.updateImageGalleryHeight();
    });

    it('should set the image-gallery__active-image class element to the width of the image-gallery', () => {
      expect((<HTMLElement>document.getElementsByClassName('image-gallery')[0]).offsetHeight).toEqual(imageGalleryWidth);
    });
  });

  describe('on <image-list>', () => {
    
    it('sets imgUrls', () => {
      let imageListComponent = fixture.debugElement.query(By.css('image-list'));

      expect(imageListComponent.componentInstance.imgUrls).toEqual(stubImgUrls);
    });
  });
});

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ImageListComponent } from './image-list.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Image } from '../../interfaces/image';
import { ImageFactory } from '../../testing/factories/image.factory';

@Component({template: '<image-list [images]="images" (imageSelected)="selectedImgFunction($event)"></image-list>'})
class TestImageListWrapper {
  images: Image[];
  selectedImgFunction: Function;
}

describe('ImageListComponent', () => {
  let component: TestImageListWrapper;
  let fixture: ComponentFixture<TestImageListWrapper>;
  let imageListComponent: DebugElement;
  let stubImages: Image[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestImageListWrapper,
        ImageListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageListWrapper);
    component = fixture.componentInstance;
    stubImages = [
      new ImageFactory().create(),
      new ImageFactory().create(),
    ];

    component.selectedImgFunction = () => {};
    component.images = stubImages;

    spyOn(component, 'selectedImgFunction');
    
    imageListComponent = fixture.debugElement.query(By.css('image-list'));
    spyOn(imageListComponent.componentInstance, 'select').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('using a `image-list` component', () => {
    it('should be able to take images as input', () => {
      expect(imageListComponent.componentInstance.images).toEqual(stubImages);
    });
  
    it('should call a function when imageSelected is emitted with the correct arguments', () => {
      imageListComponent.componentInstance.imageSelected.emit(stubImages[0]);
      expect(component.selectedImgFunction).toHaveBeenCalledWith(stubImages[0]);
    });
  });

  describe('select', () => {
    xit('should make imageSelected emit the selected image', () => {
      imageListComponent.componentInstance.select(stubImages[0]);
      expect(imageListComponent.componentInstance.imageSelected).toHaveBeenCalledWith(stubImages[0]);
    })
  });

  describe('when an img is clicked', () => {
    xit('should call select with clicked image', () => {
      
    });
  });
});

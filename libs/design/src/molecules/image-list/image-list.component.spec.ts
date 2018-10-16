import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ImageListComponent } from './image-list.component';
import { Image } from '../../interfaces/image';
import { ImageFactory } from '../../testing/factories/image.factory';

@Component({template: '<image-list [images]="images" [selectedImage]="selectedImageValue" (imageSelected)="selectedImgFunction($event)"></image-list>'})
class TestImageListWrapper {
  images: Image[];
  selectedImageValue: Image;
  selectedImgFunction: Function;
}

describe('ImageListComponent', () => {
  let component: TestImageListWrapper;
  let fixture: ComponentFixture<TestImageListWrapper>;
  let imageListComponent: ImageListComponent;
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
    component.selectedImageValue = stubImages[1]
    spyOn(component, 'selectedImgFunction');
    imageListComponent = fixture.debugElement.query(By.css('image-list')).componentInstance;
    spyOn(imageListComponent, 'select').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take images as input', () => {
    expect(imageListComponent.images).toEqual(stubImages);
  });

  describe('ngOnInit', () => {
    
    describe('when selectedImage is given as Input', () => {

      it('should set selectedImage as selectedImage', () => {
        expect(imageListComponent.selectedImage).toEqual(stubImages[1]);
      });
    });

    describe('when selectedImage is not given as Input', () => {
      
      it('should set selectedImage to the first image', () => {
        fixture = TestBed.createComponent(TestImageListWrapper);
        component = fixture.componentInstance;
        component.images = stubImages;
        fixture.detectChanges();
        imageListComponent = fixture.debugElement.query(By.css('image-list')).componentInstance;

        expect(imageListComponent.selectedImage).toEqual(stubImages[0]);
      });
    });
  });

  describe('when imageSelected is emitted', () => {
    
    it('should call the given function', () => {
      imageListComponent.imageSelected.emit(stubImages[0]);
      expect(component.selectedImgFunction).toHaveBeenCalledWith(stubImages[0]);
    });
  });

  describe('select', () => {

    it('should call imageSelected.emit', () => {
      spyOn(imageListComponent.imageSelected, 'emit');

      imageListComponent.select(stubImages[0]);
      expect(imageListComponent.imageSelected.emit).toHaveBeenCalledWith(stubImages[0]);
    })
  });

  describe('when an img is clicked', () => {

    it('should call select with clicked image', () => {
      let images = fixture.debugElement.queryAll(By.css('img'));
      images[0].nativeElement.click();

      expect(imageListComponent.select).toHaveBeenCalledWith(stubImages[0]);
    });
  });
});

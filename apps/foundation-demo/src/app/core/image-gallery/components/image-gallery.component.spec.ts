import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffSidebarModule } from '@daffodil/design';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { ImageGalleryComponent } from './image-gallery.component';
import * as fromFoundationImageGallery from '../reducers/index';
import { SetSelectedImageState } from '../actions/image-gallery.actions';

let stubImages = [
  { url: '/assets/mh01-black_main.jpg', label: 'testlabel'},
  { url: '/assets/mh01-gray_alt1.jpg', label: 'testlabel1'}
]

@Component({template: '<image-gallery-container [images]="imagesValue"></image-gallery-container>'})
class TestImageGalleryComponentWrapper {
  imagesValue: Object[] = stubImages;
}

@Component( {selector: 'daff-gallery-image', template: '<ng-content></ng-content>'})
class MockDaffGalleryImage {
  @Input() selected: boolean;
}

@Component( {selector: 'daff-image-gallery', template: '<ng-content></ng-content>'})
class MockDaffImageGallery {}

describe('ImageGalleryComponent', () => {
  let component: TestImageGalleryComponentWrapper;
  let fixture: ComponentFixture<TestImageGalleryComponentWrapper>;
  let imageGalleryContainer: ImageGalleryComponent;
  let activeImageIndex: number = 0;
  let daffGalleryImages;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationImageGallery: combineReducers(fromFoundationImageGallery.reducers),
        }),
        DaffSidebarModule
      ],
      declarations: [ 
        TestImageGalleryComponentWrapper,
        ImageGalleryComponent,
        MockDaffGalleryImage,
        MockDaffImageGallery
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageGalleryComponentWrapper);
    component = fixture.componentInstance;  
    fixture.detectChanges();
    
    store = TestBed.get(Store);

    imageGalleryContainer = fixture.debugElement.query(By.css('image-gallery-container')).componentInstance;
    daffGalleryImages = fixture.debugElement.queryAll(By.css('daff-gallery-image'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take images as input', () => {
    expect(imageGalleryContainer.images).toEqual(stubImages);
  });

  it('should render a daff-gallery-image for every image in images', () => {
    expect(daffGalleryImages.length).toEqual(stubImages.length);
  });

  describe('on daff-gallery-image', () => {

    beforeEach(() => {
      spyOn(fromFoundationImageGallery, 'selectSelectedImage').and.returnValue(stubImages[activeImageIndex].url);      
    });

    describe('when daff-gallery-image is the selectedImage', () => {
      
      it('should set selected to true', () => {
        expect(daffGalleryImages[activeImageIndex].componentInstance.selected).toBeTruthy();
      });
    });

    describe('when daff-gallery-image is not the selectedImage', () => {

      it('should set selected to false', () => {
        expect(daffGalleryImages[1].componentInstance.selected).toBeFalsy();
      });
    });
  });

  describe('when img is clicked', () => {
    
    it('should call select with image.url', () => {
      spyOn(imageGalleryContainer, 'select');
      daffGalleryImages[activeImageIndex].query(By.css('img')).nativeElement.click();

      expect(imageGalleryContainer.select).toHaveBeenCalledWith(imageGalleryContainer.images[activeImageIndex].url);
    });
  });

  describe('ngOnInit', () => {

    beforeEach(() => {
      spyOn(imageGalleryContainer, 'select');      
    });
    
    describe('when selectedImage is null', () => {

      beforeEach(() => {
        spyOn(fromFoundationImageGallery, 'selectSelectedImage').and.returnValue(null);
      });
      
      it('should call select with the first image', () => {
        imageGalleryContainer.ngOnInit();

        expect(imageGalleryContainer.select).toHaveBeenCalledWith(imageGalleryContainer.images[0].url);
      });
    });

    describe('when selectedImage is defined', () => {
      
      beforeEach(() => {
        spyOn(fromFoundationImageGallery, 'selectSelectedImage').and.returnValue(stubImages[1].url);
        
        imageGalleryContainer.ngOnInit();
      });

      it('should not call select', () => {
        expect(imageGalleryContainer.select).not.toHaveBeenCalled();
      });

      it('should initialize selectedImage$', () => {
        imageGalleryContainer.selectedImage$.subscribe((selectedImage) => {
          expect(selectedImage).toEqual(stubImages[1].url);
        })
      });
    });
  });

  describe('select', () => {
    
    beforeEach(() => {
      spyOn(store, 'dispatch');
    });

    it('should call store.dispatch', () => {
      let stubSelectedImage = stubImages[1].url;
      imageGalleryContainer.select(stubSelectedImage);

      expect(store.dispatch).toHaveBeenCalledWith(new SetSelectedImageState(stubSelectedImage));
    });
  });
});

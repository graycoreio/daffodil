import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffImageGalleryModule } from '@daffodil/design';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ImageGalleryComponent } from './image-gallery.component';
import { SetSelectedImageState } from '../actions/image-gallery.actions';
import * as fromDemoImageGallery from '../reducers';
import { cold } from 'jasmine-marbles';

const stubImages = [
  { url: '/assets/mh01-black_main.jpg', label: 'testlabel'},
  { url: '/assets/mh01-gray_alt1.jpg', label: 'testlabel1'}
]

@Component({template: '<demo-image-gallery-container [images]="imagesValue"></demo-image-gallery-container>'})
class WrapperComponent {
  imagesValue: Object[] = stubImages;
}

describe('ImageGalleryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let imageGalleryContainer: ImageGalleryComponent;
  const activeImageIndex = 0;
  let daffGalleryImages;
  let store: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffImageGalleryModule
      ],
      declarations: [ 
        WrapperComponent,
        ImageGalleryComponent
      ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;  
    
    store = TestBed.get(Store);
    store.overrideSelector(fromDemoImageGallery.selectSelectedImage, stubImages[activeImageIndex].url);

    fixture.detectChanges();

    imageGalleryContainer = fixture.debugElement.query(By.css('demo-image-gallery-container')).componentInstance;
    daffGalleryImages = fixture.debugElement.queryAll(By.css('daff-gallery-image'));
  });

  afterAll(() => store.resetSelectors());

  it('should create', () => {
    expect(imageGalleryContainer).toBeTruthy();
  });

  it('should be able to take images as input', () => {
    expect(imageGalleryContainer.images).toEqual(stubImages);
  });

  it('should render a daff-gallery-image for every image in images', () => {
    expect(daffGalleryImages.length).toEqual(stubImages.length);
  });

  describe('on daff-gallery-image', () => {
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
      imageGalleryContainer.ngOnInit();
    });
      
    it('should call select with the first image', () => {
      expect(imageGalleryContainer.select).toHaveBeenCalledWith(imageGalleryContainer.images[0].url);
    });
    
    it('should initialize selectedImage$', () => {
      const expected = cold('a', { a: imageGalleryContainer.images[0].url });
      expect(imageGalleryContainer.selectedImage$).toBeObservable(expected);

    });
  });

  describe('select', () => {
    
    beforeEach(() => {
      spyOn(store, 'dispatch');
    });

    it('should call store.dispatch', () => {
      const stubSelectedImage = stubImages[1].url;
      imageGalleryContainer.select(stubSelectedImage);

      expect(store.dispatch).toHaveBeenCalledWith(new SetSelectedImageState(stubSelectedImage));
    });
  });
});

import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';

import * as fromDemoImageGallery from './index';
import { SetSelectedImageState } from '../actions/image-gallery.actions';

describe('selectImageGalleryState', () => {

  let store: Store<fromDemoImageGallery.State>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoImageGallery: combineReducers(fromDemoImageGallery.reducers),
        })
      ]
    });

    store = TestBed.get(Store);
  }));
    
  describe('demoImageGalleryStateSelector', () => {

    let expectedImageGalleryState;

    beforeEach(() => {
      expectedImageGalleryState = {
        selectedImage: ''
      }
    });
    
    it('returns the image gallery state', () => {
      store.pipe(select(fromDemoImageGallery.demoImageGalleryStateSelector)).subscribe((selectedImageGalleryState) => {
        expect(selectedImageGalleryState).toEqual(expectedImageGalleryState);
      });
    });
  });

  describe('selectSelectedImage', () => {

    let stubSelectedImage: string;

    beforeEach(() => {
      stubSelectedImage = 'url';
      store.dispatch(new SetSelectedImageState(stubSelectedImage));
    });
    
    it('selects the selected image', () => {
      store.pipe(select(fromDemoImageGallery.selectSelectedImage)).subscribe((selectedImage) => {
        expect(selectedImage).toEqual(stubSelectedImage);
      });
    });
  });
});

import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromFoundationImageGallery from './index';
import { SetSelectedImageState } from "../actions/image-gallery.actions";

describe('selectImageGalleryState', () => {

  let store: Store<fromFoundationImageGallery.State>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationImageGallery: combineReducers(fromFoundationImageGallery.reducers),
        })
      ]
    });

    store = TestBed.get(Store);
  }));
    
  describe('foundationImageGalleryStateSelector', () => {

    let expectedImageGalleryState;

    beforeEach(() => {
      expectedImageGalleryState = {
        selectedImage: ''
      }
    });
    
    it('returns the image gallery state', () => {
      store.pipe(select(fromFoundationImageGallery.foundationImageGalleryStateSelector)).subscribe((selectedImageGalleryState) => {
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
      store.pipe(select(fromFoundationImageGallery.selectSelectedImage)).subscribe((selectedImage) => {
        expect(selectedImage).toEqual(stubSelectedImage);
      });
    });
  });
});

import { initialState, reducer, getSelectedImage } from '../reducers/image-gallery.reducer';
import { SetSelectedImageState } from '../actions/image-gallery.actions';

describe('Image Gallery | Image Gallery Reducer', () => {

  let imgUrl: string;

  beforeEach(() => {
    imgUrl = 'url';
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when SetSelectedImageState action is triggered', () => {
    let result;

    beforeEach(() => {
      const setSelectedImageState: SetSelectedImageState = new SetSelectedImageState(imgUrl);

      result = reducer(initialState, setSelectedImageState);
    });

    it('sets selectedImage to payload', () => {
      expect(result.selectedImage).toEqual(imgUrl);
    });
  });

  describe('getSelectedImage', () => {
    
    it('returns selectedImage', () => {
      expect(getSelectedImage(initialState)).toEqual(initialState.selectedImage);
    });
  });
});

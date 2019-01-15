import { ImageGalleryActionTypes, ImageGalleryActions } from '../actions/image-gallery.actions';

export interface State {
  selectedImage: string
}

export const initialState: State = {
  selectedImage: ''
};

export function reducer(state = initialState, action: ImageGalleryActions): State {
  switch (action.type) {
    case ImageGalleryActionTypes.SetSelectedImageStateAction: 
      return { ...state, selectedImage: action.payload}
    default:
      return state;
  }
}

export const getSelectedImage = (state: State) => state.selectedImage;

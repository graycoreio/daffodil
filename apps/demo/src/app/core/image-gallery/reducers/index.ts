import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromFoundationImageGallery from './image-gallery.reducer';

export interface FoundationImageGalleryState {
  foundationImageGallery: fromFoundationImageGallery.State;
}

export interface State {
  foundationImageGallery: FoundationImageGalleryState
}

export const reducers : ActionReducerMap<FoundationImageGalleryState> = {
  foundationImageGallery: fromFoundationImageGallery.reducer
}

/**
 * Foundation ImageGallery State
 */
export const selectFoundationImageGalleryState: MemoizedSelector<object, FoundationImageGalleryState> = createFeatureSelector<FoundationImageGalleryState>('foundationImageGallery');

/**
 * Foundation ImageGallery ImageGallery State
 */
export const foundationImageGalleryStateSelector = createSelector(
  selectFoundationImageGalleryState,
  (state: FoundationImageGalleryState) => state.foundationImageGallery
);

export const selectSelectedImage: MemoizedSelector<object, string> = createSelector(
  foundationImageGalleryStateSelector,
  fromFoundationImageGallery.getSelectedImage
);

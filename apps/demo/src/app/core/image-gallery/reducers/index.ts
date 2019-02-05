import { ActionReducerMap, createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import * as fromDemoImageGallery from './image-gallery.reducer';

export interface DemoImageGalleryState {
  demoImageGallery: fromDemoImageGallery.State;
}

export interface State {
  demoImageGallery: DemoImageGalleryState
}

export const reducers : ActionReducerMap<DemoImageGalleryState> = {
  demoImageGallery: fromDemoImageGallery.reducer
}

/**
 * Demo ImageGallery State
 */
export const selectDemoImageGalleryState: MemoizedSelector<object, DemoImageGalleryState> = createFeatureSelector<DemoImageGalleryState>('demoImageGallery');

/**
 * Demo ImageGallery ImageGallery State
 */
export const demoImageGalleryStateSelector = createSelector(
  selectDemoImageGalleryState,
  (state: DemoImageGalleryState) => state.demoImageGallery
);

export const selectSelectedImage: MemoizedSelector<object, string> = createSelector(
  demoImageGalleryStateSelector,
  fromDemoImageGallery.getSelectedImage
);

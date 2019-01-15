import { Action } from '@ngrx/store';

export enum ImageGalleryActionTypes {
  SetSelectedImageStateAction = "[Foundation-ImageGallery] Set SelectedImage State Action"
}

export class SetSelectedImageState implements Action {
  readonly type = ImageGalleryActionTypes.SetSelectedImageStateAction;
  
  constructor(public payload: string){}
}

export type ImageGalleryActions =
    | SetSelectedImageState;

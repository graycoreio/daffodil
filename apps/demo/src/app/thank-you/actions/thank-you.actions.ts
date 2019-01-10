import { Action } from '@ngrx/store';

export enum ThankYouActionTypes {
  NavigatingToThankYouAction = "[Foundation-Thank-You] Navigating To Thank You Action"
}

export class NavigatingToThankYou implements Action {
  readonly type = ThankYouActionTypes.NavigatingToThankYouAction;
}

export type ThankYouActions =
  | NavigatingToThankYou;

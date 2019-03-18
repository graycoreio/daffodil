import { Action } from '@ngrx/store';

export enum AddToCartNotificationActionTypes {
  OpenAddToCartNotificationAction = "[Demo-Add-To-Cart-Notification] Show Add To Cart Notification Action",
  CloseAddToCartNotificationAction = "[Demo-Add-To-Cart-Notification] Close Add To Cart Notification Action"
}

export class OpenAddToCartNotification implements Action {
  readonly type = AddToCartNotificationActionTypes.OpenAddToCartNotificationAction;

  constructor() {}
}

export class CloseAddToCartNotification implements Action {
  readonly type = AddToCartNotificationActionTypes.CloseAddToCartNotificationAction;

  constructor() {}
}

export type AddToCartNotificationActions =
    | OpenAddToCartNotification
    | CloseAddToCartNotification;

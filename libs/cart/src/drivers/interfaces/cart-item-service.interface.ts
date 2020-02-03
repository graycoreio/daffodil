import { DaffCartItem } from "../../models/cart-item";
import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface DaffCartItemServiceInterface<T extends DaffCartItem> {
  list(): Observable<T[]>;
  get(id: T["item_id"]): Observable<T>;
  update(itemId: T["item_id"], changes: any): Observable<T>;
  delete(itemId: T["item_id"]): Observable<void>;
}

export const DaffCartItemDriver 
  = new InjectionToken<DaffCartItemServiceInterface<any>>('DaffCartItemDriver');

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DaffPersistenceService } from '../persistence.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DaffLocalStorageService implements DaffPersistenceService {
  constructor(@Inject(PLATFORM_ID) platformId: string){
    if(!isPlatformBrowser(platformId)){
      throw new Error('The DaffLocalStorageService can only be instantiated in the browser.');
    }
  }

  /**
   * Persist the given item into local storage. 
   */
  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  /**
   * Retrieve the given item from localstorage.
   */
  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  /**
   * Remove a given item from localstorage
   */
  removeItem(key: string): any {
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear();
  }
}

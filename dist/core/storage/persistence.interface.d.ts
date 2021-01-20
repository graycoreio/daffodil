import { InjectionToken } from '@angular/core';
export interface DaffPersistenceService {
    setItem(key: string, value: any): void;
    getItem(key: string): any;
    clear(): void;
    removeItem(key: string): void;
}
export declare const DaffPersistenceServiceToken: InjectionToken<DaffPersistenceService>;

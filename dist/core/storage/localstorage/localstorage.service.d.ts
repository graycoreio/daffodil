import { DaffPersistenceService } from '../persistence.interface';
export declare class DaffLocalStorageService implements DaffPersistenceService {
    constructor(platformId: string);
    /**
     * Persist the given item into local storage.
     */
    setItem(key: string, value: any): void;
    /**
     * Retrieve the given item from localstorage.
     */
    getItem(key: string): any;
    /**
     * Remove a given item from localstorage
     */
    removeItem(key: string): any;
    clear(): void;
}

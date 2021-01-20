import { DaffPersistenceService } from '../persistence.interface';
export declare class DaffErrorStorageService implements DaffPersistenceService {
    static readonly ERROR_MESSAGE = "The DaffErrorStorageService always throws an error.";
    setItem(key: string, value: any): void;
    getItem(key: string): any;
    removeItem(key: string): any;
    clear(): void;
    private throwError;
}

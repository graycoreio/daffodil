import { DaffPersistenceService } from '../persistence.interface';
/**
 * A storage service meant to be loaded into SSR contexts.
 * It will always throw the {@link DaffServerSideStorageError}.
 */
export declare class DaffServerErrorStorageService implements DaffPersistenceService {
    static readonly ERROR_MESSAGE = "The DaffServerErrorStorageService always throws an error.";
    setItem(key: string, value: any): void;
    getItem(key: string): any;
    removeItem(key: string): any;
    clear(): void;
    private throwError;
}

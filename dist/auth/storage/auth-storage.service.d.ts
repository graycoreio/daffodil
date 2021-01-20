import { DaffPersistenceService } from '@daffodil/core';
export declare class DaffAuthStorageService {
    private storageService;
    private readonly AUTH_STORAGE_TOKEN;
    constructor(storageService: DaffPersistenceService);
    getAuthToken(): string;
    setAuthToken(value: string): void;
    removeAuthToken(): void;
}

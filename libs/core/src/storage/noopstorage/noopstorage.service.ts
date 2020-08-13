import { DaffPersistenceService } from "../persistence.interface";

export class DaffNoopStorageService implements DaffPersistenceService {
  setItem(key : string, value: any): void {};
  getItem(key: string): any {};
  clear(): void {};
  removeItem(key: string): void {};
}
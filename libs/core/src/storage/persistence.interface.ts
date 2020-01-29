export interface DaffPersistenceService {
  setItem(key : string, value: any): void;
  getItem(key: string): any;
  clear(): void;
  removeItem(key: string): void;
}
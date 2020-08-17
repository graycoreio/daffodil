import { DaffPersistenceService } from "../persistence.interface";

export class DaffMemoryStorageService implements DaffPersistenceService {
  memory: { [x: string]: any } = {};

  setItem(key: string, value: any): void {
    this.memory[key] = value;
  }

  getItem(key: string) {
    return this.memory[key];
  }

  clear(): void {
    this.memory = {};
  }

  /**
   * We abuse destructuring to remove the key
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */
  removeItem(key: string): void {
    const { [key]: value, ...noKey } = this.memory;
    this.memory = noKey;
  }
}
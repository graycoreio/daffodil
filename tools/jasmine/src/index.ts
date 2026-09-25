/* eslint-disable @typescript-eslint/no-namespace */
import { idempotenceMatcher } from './idempotence.js';

export {
  createTestScheduler,
  runMarbles,
} from './test-scheduler.js';

//jasmine
declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeIdempotent(): void;
    }
  }
}

export const setup = () => {
  jasmine.getEnv().beforeAll(() => jasmine.addMatchers({
    toBeIdempotent: idempotenceMatcher,
  }));
};

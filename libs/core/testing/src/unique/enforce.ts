import {
  UniqueEnforcer,
  EnforceOptions,
} from 'enforce-unique';

type Func = (...args: Array<any>) => any;

const store = new Map<Func, UniqueEnforcer>();

/**
 * Wraps `UniqueEnforcer` to provide function-specific instances.
 */
export const enforceUnique = <T extends Func>(func: T, options?: EnforceOptions): ReturnType<T> => {
  if (!store.has(func)) {
    store.set(func, new UniqueEnforcer());
  }

  return store.get(func)?.enforce(func, options);
};

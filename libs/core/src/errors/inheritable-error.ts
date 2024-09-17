/**
 * A class which allows you to appropriately check the inheritance of an error.
 *
 * In typescript, when you try to extend an error with a specialized error class,
 * if you try to call something like:
 *
 * ```ts
 * class MyError extends Error {}
 *
 * let myError = new MyError();
 *
 * myError instanceof MyError; // returns false
 * ```
 *
 * You will see unexpected things. This class fixes that issue as described here
 * https://github.com/microsoft/TypeScript/issues/13965
 */
export class DaffInheritableError extends Error {
  __proto__: Error;

  recoverable = false;

  constructor(message?: string) {
    super(message);
    const trueProto = new.target.prototype;

    Object.setPrototypeOf(this, trueProto);
  }
}

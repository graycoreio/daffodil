/**
 * A type which describes a function which would return an instance of a class
 * Typically, we call this the "new" method in a language. 
 * 
 * A sample usage:
 * ```ts
 * class MyClass {
 *  readonly myProp: string = 'prop';
 *  name: string;
 *  constructor(name: string){
 *    this.name = name;
 *  }
 * } 
 * 
 * const map = {
 *   "key": Myclass
 * }
 * 
 * let instance = new map["key"];
 * instance instanceof MyClass //true
 * 
 * ```
 */
export type Constructable<T> = new(...args: any[]) => T;
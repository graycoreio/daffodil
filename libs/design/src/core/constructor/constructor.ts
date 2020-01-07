/**
 * A basic constructor type useful for mixins
 * See https://blog.mariusschulz.com/2017/05/26/typescript-2-2-mixin-classes
 * for a really good explanation of why mixins are useful.
 */

export type Constructor<T = {}> = new (...args: any[]) => T;
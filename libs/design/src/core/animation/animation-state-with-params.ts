/**
 * A type representing what Angular accepts on an animation template binding.
 * This type should likely be moved to `@angular/animations`.
 */
export interface AnimationStateWithParams<T = unknown, V = Record<string | number, unknown>>{
  value: T;
  params: V;
}

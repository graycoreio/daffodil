import { Action } from '@ngrx/store';

/**
 * Specifies a function to run in response to a particular action.
 * Used to add feature-specific SEO behavior.
 */
export interface DaffSeoUpdateActionPair<T extends Action = Action, V = unknown> {
  /**
   * The type of action to respond to.
   */
  action: T['type'];
  /**
   * A function that gets SEO info from the particular action.
   */
  getData: (action: T) => V;
}

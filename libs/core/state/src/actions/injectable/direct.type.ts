import { Action } from '@ngrx/store';

/**
 * An injection of an action that matches the desired payload and does not require transformation.
 */
export interface ActionDirectInjection<Act extends Action = Action> {
  /**
   * The action type.
   */
  type: Act['type'];
}

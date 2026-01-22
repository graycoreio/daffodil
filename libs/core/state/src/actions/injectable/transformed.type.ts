import { Action } from '@ngrx/store';

/**
 * An injection of an action that does not match the desired payload and therefore requires transformation.
 */
export interface ActionTransformedInjection<Payload, Act extends Action = Action> {
  /**
   * The action type.
   */
  type: Act['type'];

  /**
   * A function that gets the payload from the action.
   */
  transform: (action: Act) => Payload;
}

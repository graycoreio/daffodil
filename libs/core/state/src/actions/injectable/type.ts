import { ActionDirectInjection } from './direct.type';
import { ActionTransformedInjection } from './transformed.type';

/**
 * An injectable action registration.
 * Allows downstream libraries and apps define custom actions that will be automatically integrated into the declaring library's reducers and effects.
 */
export type ActionInjection<Payload> = ActionDirectInjection | ActionTransformedInjection<Payload>;

import { DaffContactUnion } from '@daffodil/contact';

/**
 * A weak type, specifying the fields that drivers are be guaranteed to act upon.
 */
export interface DaffContactBlueprintRequest {
  name?: string;
  email: string;
  phone?: string;
  message?: string;
}

/**
 * The type used by the DaffContactDriver to send requests to implementing services.
 */
export type DaffContactRequest = DaffContactBlueprintRequest | DaffContactUnion;

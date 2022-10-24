/**
 * Represents a customer in the in-memory database.
 */
export interface DaffInMemoryDbCustomer {
  email: string;
  password: string;
  token?: string;
}

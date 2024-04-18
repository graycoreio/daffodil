import { SchemaContext } from './context';

/**
 * A generic schema. Note that schemas can either be single
 * entities or arrays of entities.
 */
export type Schema<T> = SchemaContext<T> | SchemaContext<T>[];

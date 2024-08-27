import { Processor } from 'dgeni';

/**
 * A type of processor that will only process docs of a specfic type.
 * All other doc types will be ignored and pass through unchanged.
 */
export interface FilterableProcessor extends Processor {
  /**
   * The types of docs to process.
   */
  docTypes: Array<string>;
}

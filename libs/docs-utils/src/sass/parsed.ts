import { DaffDocsSassType } from './type.enum';

export interface DaffDocsSassParsedValue {
  raw: string;
  parsed: string;
  type: DaffDocsSassType.VARIABLE | DaffDocsSassType.COLOR | DaffDocsSassType.STRING | DaffDocsSassType.UNKNOWN;
}

export interface DaffDocsSassParsedMap {
  [key: string]: string | DaffDocsSassParsedMap;
}

export interface DaffDocsSassParsedMapValue {
  raw: string;
  parsed: DaffDocsSassParsedMap;
  type: DaffDocsSassType.MAP;
}

export type DaffDocsSassParsed = DaffDocsSassParsedValue | DaffDocsSassParsedMapValue;

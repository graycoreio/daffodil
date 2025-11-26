import { DaffDocsSassParsed } from './parsed';

export interface DaffDocsSassItem {
  context: {
    type: string;
    name: string;
    value: string;
    parsedValue: DaffDocsSassParsed;
    [key: string]: any;
  };
  group: Array<string>;
  description: string;
  access: 'public' | 'private';
  file: {
    path: string;
    name: string;
  };
  [key: string]: any;
}

import { DaffPersonalAddress } from '@daffodil/geography';

export interface DaffCartAddress extends DaffPersonalAddress {
  address_id: number;
  address_type: string; //todo: is actually an enum
}
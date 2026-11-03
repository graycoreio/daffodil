import { MagentoTokenBaseCardAddress } from './customer-address.type';

export enum MagentoTokenBaseCardLongType {
  AMERICAN_EXPRESS = 'American Express',
  DISCOVER = 'Discover',
  DINERS_CLUB = 'Diners Club',
  JCB = 'JCB',
  MASTERCARD = 'MasterCard',
  VISA = 'Visa',
}

export enum MagentoTokenBaseCardTypeCode {
  AMERICAN_EXPRESS = 'AE',
  DISCOVER = 'DI',
  DINERS_CLUB = 'DC',
  JCB = 'JCB',
  MASTERCARD = 'MC',
  VISA = 'VI',
}

export interface MagentoTokenBaseCard {
  __typename?: 'TokenBaseCard';
  hash: string;
  address: MagentoTokenBaseCardAddress;
  customer_email: string;
  customer_id: number;
  method: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  last_use: string;
  expires: string;
  label: string;
  additional: {
    cc_type: MagentoTokenBaseCardTypeCode;
    cc_owner: string;
    cc_last4: string;
    cc_exp_year: string;
    cc_exp_month: string;
  };
}

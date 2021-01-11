export interface MagentoOrderPayment {
  __typename?: 'OrderPaymentMethod';
  name: string;
  type: string;
  additional_data: KeyValue[];
};

export interface KeyValue {
  __typename?: 'KeyValue';
  name: string;
  value: string;
};

export interface MagentoAttributeValueText {
  __typename: 'AttributeValue';
  code: string;
  value: string;
}

export interface MagentoAttributeSelectedOptions {
  __typename: 'AttributeSelectedOptions';
  code: string;
  selected_options: Array<{label: string; value: string}>;
}

export type MagentoAttributeValue = MagentoAttributeValueText | MagentoAttributeSelectedOptions;

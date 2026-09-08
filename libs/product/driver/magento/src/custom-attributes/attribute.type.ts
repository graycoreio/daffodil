export enum MagentoAttributeFrontendInputEnum {
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  FILE = 'FILE',
  GALLERY = 'GALLERY',
  HIDDEN = 'HIDDEN',
  IMAGE = 'IMAGE',
  MEDIA_IMAGE = 'MEDIA_IMAGE',
  MULTILINE = 'MULTILINE',
  MULTISELECT = 'MULTISELECT',
  PRICE = 'PRICE',
  SELECT = 'SELECT',
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA',
  WEIGHT = 'WEIGHT',
  UNDEFINED = 'UNDEFINED',
}

export interface MagentoAttributeOption {
  value: string;
  label: string;
}

export interface MagentoAttribute {
  code: string;
  label: string;
  frontend_input: MagentoAttributeFrontendInputEnum;
  options: Array<MagentoAttributeOption>;
}

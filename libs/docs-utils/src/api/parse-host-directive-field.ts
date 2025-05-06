import { DaffDocsApiHostDirectiveInheritedField } from '../doc/public_api';

const REGEX = /(?<field>\w+)(: (?<alias>\w+))?/;

export const daffDocsApiParseHostDirectiveField = (field: string): DaffDocsApiHostDirectiveInheritedField => {
  const result = REGEX.exec(field).groups;
  return {
    field: result.field,
    parentField: result.alias,
  };
};

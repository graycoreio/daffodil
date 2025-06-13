export const validateFieldPresence = <T = unknown>(model: T, ...fields: Array<keyof T>): boolean =>
  fields.reduce((acc, field) => acc && !!model[field], true);

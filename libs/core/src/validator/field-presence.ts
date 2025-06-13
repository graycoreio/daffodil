/**
 * Validates whether all the specified fields are defined in the passed object.
 * Uses `Object.hasOwn` to do the check, so even if a field has been set to `null`
 * or `undefined`, they will be treated as present.
 */
export const validateFieldPresence = <T extends Record<string, unknown>>(model: T, ...fields: Array<keyof T>): boolean =>
  fields.reduce((acc, field) => acc && Object.hasOwn(model, field), true);

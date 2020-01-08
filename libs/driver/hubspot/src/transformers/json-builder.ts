import { FieldValue } from '../models/hubspot-request'


export const jsonBuilder = (payload: object): FieldValue[] => {
  return Object.keys(payload).map((key) => ({'name': key, 'value': payload[key]}));
}
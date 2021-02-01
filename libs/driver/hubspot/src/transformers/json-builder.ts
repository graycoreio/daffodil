import { FieldValue } from '../models/hubspot-request';


export const jsonBuilder = (payload: Record<string, any>): FieldValue[] => Object.keys(payload).map((key) => ({ name: key, value: payload[key] }));

import { createSelector } from '@ngrx/store';
import { DaffNewsletter } from '../models/newsletter.model';

const selectFirstName = (state: DaffNewsletter) => state;
const selectLastName = (state: DaffNewsletter) => state;
const selectAddress = (state: DaffNewsletter) => state;

export const selectNewsletterFirstName = createSelector(
  selectFirstName,
  (state: DaffNewsletter) => state.firstName
  
);
export const selectNewsletterLastName = createSelector(
  selectFirstName,
  (state: DaffNewsletter) => state.lastName
  
);
export const selectNewsletterAddress = createSelector(
  selectLastName,
  (state: DaffNewsletter) => state.address
  
);
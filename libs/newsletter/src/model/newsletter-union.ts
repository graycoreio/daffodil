import { DaffNewsletterSubmission } from './newsletter.model';

export interface DaffNewsletterUnion extends DaffNewsletterSubmission {
  [x:string]: any;
}
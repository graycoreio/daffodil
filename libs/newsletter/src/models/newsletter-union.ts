import { DaffNewsletterSubmission } from './newsletter.model';

export type DaffNewsletterUnion = DaffNewsletterSubmission & {
  [x: string]: any;
}

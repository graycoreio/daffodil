import { Observable } from "rxjs";
import { DaffNewsletterSubmission } from "../../models/newsletter.model";

export interface DaffNewsletterServiceInterface<T extends DaffNewsletterSubmission, V> {
	send(email: T): Observable<V>;
}
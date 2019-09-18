import { Observable } from "rxjs";

export interface DaffNewsletterServiceInterface<T, V> {
	send(email: T): Observable<V>;
}
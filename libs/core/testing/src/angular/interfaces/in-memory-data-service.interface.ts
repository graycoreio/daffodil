import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

/**
 * An interface for defining in memory services that use the angular in memory web api.
 */
export interface DaffInMemoryDataServiceInterface {
	get?(reqInfo: RequestInfo): Observable<any>;
	post?(reqInfo: RequestInfo): Observable<any>;
	put?(reqInfo: RequestInfo): Observable<any>;
	delete?(reqInfo: RequestInfo): Observable<any>;
}
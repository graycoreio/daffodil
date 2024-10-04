import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

/**
 * An interface for defining in memory services that use the angular in memory web api.
 */
export interface DaffInMemoryDataServiceInterface {
  /**
   * The R in CRUD.
   */
  get?(reqInfo: RequestInfo): Observable<any>;

  /**
   * The C in CRUD.
   */
  post?(reqInfo: RequestInfo): Observable<any>;

  /**
   * The U in CRUD.
   */
  put?(reqInfo: RequestInfo): Observable<any>;

  /**
   * The D in CRUD.
   */
  delete?(reqInfo: RequestInfo): Observable<any>;
}

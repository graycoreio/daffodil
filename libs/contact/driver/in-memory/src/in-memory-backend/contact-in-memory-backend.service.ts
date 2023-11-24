import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
} from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffContactRequest } from '@daffodil/contact/driver';
import { DaffContactResponse } from '@daffodil/contact/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendContactService implements InMemoryDbService {
  submissions: DaffContactRequest[] = [];

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      submissions: this.submissions,
    };
  }

  post(reqInfo: { body: DaffContactRequest }): Observable<DaffContactResponse> | Error {
    //validate that its not empty
    if(reqInfo === undefined){
      return Error('Payload is undefined');
      //validate that it doesn't already exist
    } else if(this.submissions.indexOf(reqInfo.body) !== -1){
      return Error('Already contains submission');
    } else{
      this.submissions.push(reqInfo.body);
      return of({ message: 'Success!' });
    }
  }
}

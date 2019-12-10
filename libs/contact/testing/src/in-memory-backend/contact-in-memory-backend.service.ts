import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { DaffContactUnion } from '@daffodil/contact';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendContactService implements InMemoryDbService {
  forums: DaffContactUnion[] = [];

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      forums: this.forums
    };
  }
  //validate that its not empty
  //validate that it doesn't already exist
  post(reqInfo: any) {
    if(reqInfo === undefined){
      return Error('Payload is undefined');
    }
    else if(this.forums.indexOf(reqInfo.body)){
      return Error('Already contains submission');
    }
    else{
      this.forums.push(reqInfo.body);
      return of(reqInfo.body);
    }
  }
}
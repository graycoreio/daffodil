import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendNewsletterService implements InMemoryDbService {
  newsletters: DaffNewsletterUnion[] = [];

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      newsletters: this.newsletters
    };
  }
  //validate that its not empty
  //validate that it doesn't already exist
  post(reqInfo: any) {
    if(reqInfo === undefined){
      return Error('Payload is undefined');
    }
    else if(this.newsletters.indexOf(reqInfo.body)){
      return Error('Already contains submission');
    }
    else{
      this.newsletters.push(reqInfo.body);
      return of(reqInfo.body);
    }
  }
}
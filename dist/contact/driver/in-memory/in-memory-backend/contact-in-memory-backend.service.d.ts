import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DaffContactUnion } from '@daffodil/contact';
export declare class DaffInMemoryBackendContactService implements InMemoryDbService {
    forums: DaffContactUnion[];
    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl;
    createDb(): any;
    post(reqInfo: any): any;
}

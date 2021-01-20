import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
export declare class DaffInMemoryBackendNewsletterService implements InMemoryDbService {
    newsletters: DaffNewsletterUnion[];
    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl;
    createDb(): any;
    post(reqInfo: any): any;
}

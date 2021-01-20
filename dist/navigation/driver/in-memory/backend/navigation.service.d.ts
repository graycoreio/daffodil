import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
export declare class DaffInMemoryBackendNavigationService implements InMemoryDbService {
    private navigationTreeFactory;
    navigationTree: DaffNavigationTree;
    constructor(navigationTreeFactory: DaffNavigationTreeFactory);
    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl;
    createDb(): any;
    get(reqInfo: any): any;
}

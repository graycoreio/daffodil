import { ApolloQueryResult } from 'apollo-client';
import { MagentoCheckTokenResponse } from '../queries/public_api';
export declare const validateCheckTokenResponse: (response: ApolloQueryResult<MagentoCheckTokenResponse>) => ApolloQueryResult<MagentoCheckTokenResponse>;

import { ApolloQueryResult } from 'apollo-client';
import { MagentoGetGuestOrdersResponse } from '../queries/public_api';
export declare const validateGetOrdersResponse: (response: ApolloQueryResult<MagentoGetGuestOrdersResponse>) => ApolloQueryResult<MagentoGetGuestOrdersResponse>;

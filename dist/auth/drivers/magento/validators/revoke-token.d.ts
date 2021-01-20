import { ApolloQueryResult } from 'apollo-client';
import { MagentoRevokeCustomerTokenResponse } from '../queries/public_api';
export declare const validateRevokeTokenResponse: (response: ApolloQueryResult<MagentoRevokeCustomerTokenResponse>) => ApolloQueryResult<MagentoRevokeCustomerTokenResponse>;

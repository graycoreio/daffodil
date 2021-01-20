import { ApolloQueryResult } from 'apollo-client';
import { MagentoGenerateTokenResponse } from '../queries/public_api';
export declare const validateGenerateTokenResponse: (response: ApolloQueryResult<MagentoGenerateTokenResponse>) => ApolloQueryResult<MagentoGenerateTokenResponse>;

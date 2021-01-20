import { ApolloQueryResult } from 'apollo-client';
import { MagentoGetCountriesResponse } from '../queries/public_api';
export declare const validateGetCountriesResponse: (response: ApolloQueryResult<MagentoGetCountriesResponse>) => ApolloQueryResult<MagentoGetCountriesResponse>;

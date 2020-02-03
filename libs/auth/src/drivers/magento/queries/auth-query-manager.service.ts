import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { MutationOptions } from 'apollo-client';

import { DaffAuthQueryManagerInterface } from '../../interfaces/auth-query-manager.interface';
import { DaffAccountRegistration } from '../../../models/account-registration';
import { GenerateTokenResponse } from '../models/outputs/generate-token-response';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthGraphQlQueryManagerService implements DaffAuthQueryManagerInterface {
  generateATokenMutation(email: string, password: string): MutationOptions<GenerateTokenResponse> {
    return {
      mutation: gql`
        mutation GenerateAToken($email: String!, $password: String!) {
          generateCustomerToken(
            email: $email,
            password: $password
          ) {
            token
          }
        }
      `,
      variables: {
        email,
        password
      }
    }
  }

  createACustomerMutation({
    customer,
    password
  }: DaffAccountRegistration) {
    return {
      mutation: gql`
        mutation CreateACustomer(
          $email: String!,
          $password: String!,
          $firstname: String!,
          $lastname: String!,
        ) {
          createCustomer(input: {
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            password: $password
          })
        }
      `,
      variables: {
        email: customer.email,
        password,
        firstname: customer.firstName,
        lastname: customer.lastName
      }
    }
  }
}

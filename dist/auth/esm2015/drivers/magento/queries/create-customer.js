/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const createCustomerMutation = gql `
  mutation CreateCustomer(
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
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWN1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vcXVlcmllcy9jcmVhdGUtY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7QUFFOUIsTUFBTSxPQUFPLHNCQUFzQixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Q0FjeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUN1c3RvbWVyTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uIENyZWF0ZUN1c3RvbWVyKFxuICAgICRlbWFpbDogU3RyaW5nISxcbiAgICAkcGFzc3dvcmQ6IFN0cmluZyEsXG4gICAgJGZpcnN0bmFtZTogU3RyaW5nISxcbiAgICAkbGFzdG5hbWU6IFN0cmluZyEsXG4gICkge1xuICAgIGNyZWF0ZUN1c3RvbWVyKGlucHV0OiB7XG4gICAgICBmaXJzdG5hbWU6ICRmaXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZTogJGxhc3RuYW1lLFxuICAgICAgZW1haWw6ICRlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcbiAgICB9KVxuICB9XG5gO1xuIl19
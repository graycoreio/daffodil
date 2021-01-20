/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const generateTokenMutation = gql `
  mutation GenerateToken($email: String!, $password: String!) {
    generateCustomerToken(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2dlbmVyYXRlLXRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7O0FBRTlCLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7OztDQVN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb2tlbk11dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiBHZW5lcmF0ZVRva2VuKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgZ2VuZXJhdGVDdXN0b21lclRva2VuKFxuICAgICAgZW1haWw6ICRlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcbiAgICApIHtcbiAgICAgIHRva2VuXG4gICAgfVxuICB9XG5gO1xuIl19
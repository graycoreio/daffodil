/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/** @type {?} */
export var generateTokenMutation = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation GenerateToken($email: String!, $password: String!) {\n    generateCustomerToken(\n      email: $email,\n      password: $password\n    ) {\n      token\n    }\n  }\n"], ["\n  mutation GenerateToken($email: String!, $password: String!) {\n    generateCustomerToken(\n      email: $email,\n      password: $password\n    ) {\n      token\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2dlbmVyYXRlLXRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOztBQUU5QixNQUFNLEtBQU8scUJBQXFCLEdBQUcsR0FBRywrUEFBQSxvTEFTdkMsSUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb2tlbk11dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiBHZW5lcmF0ZVRva2VuKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgZ2VuZXJhdGVDdXN0b21lclRva2VuKFxuICAgICAgZW1haWw6ICRlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcbiAgICApIHtcbiAgICAgIHRva2VuXG4gICAgfVxuICB9XG5gO1xuIl19
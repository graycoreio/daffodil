import type { MethodMemberDoc } from 'dgeni-packages/typescript/api-doc-types/MethodMemberDoc';

export const inferMethodType = (method: MethodMemberDoc): string =>
  method.typeChecker.typeToString(method.typeChecker.getReturnTypeOfSignature(<any>method));


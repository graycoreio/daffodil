import type { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';
import { TypeFlags } from 'typescript';

export const inferPropType = (prop: PropertyMemberDoc): string => {
  const inferredType = prop.typeChecker.getTypeAtLocation(prop.declaration);
  // eslint-disable-next-line no-bitwise
  return inferredType.getFlags() & TypeFlags.Any ? prop.type : prop.typeChecker.typeToString(inferredType);
};

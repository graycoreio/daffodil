import {
  Declaration,
  TypeFlags,
  Type,
} from 'dgeni-packages/node_modules/typescript';
import type { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';

const contextlessTypeInference = (prop: PropertyMemberDoc): Type => prop.typeChecker.getTypeAtLocation(prop.declaration);

export const inferPropType = (prop: PropertyMemberDoc, container?: Declaration): string => {
  let inferredType: Type;
  if (container) {
    // props can have different types (for example narrowing a type param) depending on the container
    // so try to get the type in the context of the container, even though it can fail
    const klass = prop.typeChecker.getTypeAtLocation(container);
    const p = klass.getProperty(prop.name);
    inferredType = p
      ? prop.typeChecker.getTypeOfSymbolAtLocation(p, <any>klass)
      : contextlessTypeInference(prop);
  } else {
    inferredType = contextlessTypeInference(prop);
  }
  // eslint-disable-next-line no-bitwise
  return inferredType.getFlags() & TypeFlags.Any ? prop.type : prop.typeChecker.typeToString(inferredType);
};

import { ApolloError } from "apollo-client";
import { DaffCartMagentoErrorMap } from "./map";

export const lookupDaffCartError = (code: string ) => {
  return DaffCartMagentoErrorMap[code];
}

const transformGraphQlError = (error: ApolloError): Error => {
  switch(error.graphQLErrors.length) {
    case 0:
      return error;
    default: 
      const lookup = lookupDaffCartError(error.graphQLErrors[0].extensions.category);
      return lookup ? new lookup(error.message) : error;
  }
}

export const transformError = (error: any): Error => {
  if(error.graphQLErrors){
    return transformGraphQlError(error);
  }
  else {
    return error;
  }
}
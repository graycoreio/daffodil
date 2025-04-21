import { DaffDocsApiRole } from './enum';
import { DaffDocsTsDocument } from '../../ts/public_api';
import { DaffDocsApiType } from '../type.enum';

/**
 * Infers the role of the symbol based on the generated TS doc.
 */
export const daffDocsGetRoleFromTsDoc = (doc: DaffDocsTsDocument): DaffDocsApiRole => {
  switch (doc.docType) {
    case DaffDocsApiType.CLASS:
      if (doc.decorators?.find(({ name }) => name === 'Component')) {
        return DaffDocsApiRole.COMPONENT;
      } else if (doc.decorators?.find(({ name }) => name === 'Directive')) {
        return DaffDocsApiRole.DIRECTIVE;
      } else if (doc.decorators?.find(({ name }) => name === 'Pipe')) {
        return DaffDocsApiRole.PIPE;
      } else if (doc.decorators?.find(({ name }) => name === 'NgModule')) {
        return DaffDocsApiRole.MODULE;
      } else if (doc.decorators?.find(({ name }) => name === 'Injectable')) {
        if (doc.name.endsWith('Guard')) {
          return DaffDocsApiRole.GUARD;
        } else if (doc.name.endsWith('Resolver')) {
          return DaffDocsApiRole.RESOLVER;
        } else if (doc.name.endsWith('Facade')) {
          return DaffDocsApiRole.FACADE;
        } else if (doc.name.endsWith('Factory')) {
          return DaffDocsApiRole.MODEL_FACTORY;
        } else {
          return DaffDocsApiRole.SERVICE;
        }
      } else if (doc.name.endsWith('Error') || doc.extendsClauses.find(({ text }) => text === 'DaffInheritableError') || doc.implementsClauses.find(({ text }) => text === 'DaffError')) {
        return DaffDocsApiRole.ERROR;
      } else if (doc.implementsClauses.find(({ text }) => text.includes('Action'))) {
        return DaffDocsApiRole.ACTION;
      } else if (doc.name.startsWith('Mock')) {
        return DaffDocsApiRole.MOCK;
      } else {
        console.warn(`${doc.name} was assigned a fallback API role`);
        return DaffDocsApiRole.HELPER;
      }

    case DaffDocsApiType.TYPE_ALIAS:
      return DaffDocsApiRole.TYPE;

    case DaffDocsApiType.INTERFACE:
      return DaffDocsApiRole.TYPE;

    case DaffDocsApiType.FUNCTION:
      if (doc.name.startsWith('provide')) {
        return DaffDocsApiRole.PROVIDER;
      } else if (doc.name.endsWith('Reducer')) {
        return DaffDocsApiRole.REDUCER;
      }
      return DaffDocsApiRole.HELPER;

    case DaffDocsApiType.CONST:
      if (doc.typeChecker.getTypeOfSymbolAtLocation(doc.symbol, doc.variableDeclaration).symbol?.escapedName === 'InjectionToken') {
        return DaffDocsApiRole.TOKEN;
      }
      return DaffDocsApiRole.CONSTANT;

    case DaffDocsApiType.ENUM:
      return DaffDocsApiRole.TYPE;
  }
};

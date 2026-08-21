import {
  Processor,
  Document,
} from 'dgeni';
import { SyntaxKind } from 'dgeni-packages/node_modules/typescript';
import { ConstExportDoc } from 'dgeni-packages/typescript/api-doc-types/ConstExportDoc';
import { FunctionExportDoc } from 'dgeni-packages/typescript/api-doc-types/FunctionExportDoc';

import { DaffDocsApiType } from '@daffodil/docs-utils';

import { ADD_KIND_PROCESSOR_NAME } from '../../../processors/add-kind';

export const CONST_FUNCTIONS_PROCESSOR_NAME = 'constFunctions';

/**
 * Replaces arrow function const docs with function docs.
 */
export class ConstFunctionsProcessor implements Processor {
  readonly name = CONST_FUNCTIONS_PROCESSOR_NAME;
  readonly $runAfter = ['readTypeScriptModules'];
  readonly $runBefore = ['parsing-tags', ADD_KIND_PROCESSOR_NAME];

  docTypes: Array<string> = [DaffDocsApiType.CONST];

  $process(docs: Array<Document>): Array<Document> {
    return docs.flatMap((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const d: ConstExportDoc = doc;
        if (d.variableDeclaration.initializer && d.variableDeclaration.initializer.kind === SyntaxKind.ArrowFunction) {
          const newDoc = new FunctionExportDoc(d.host, d.moduleDoc, (<any>doc).variableDeclaration?.initializer?.symbol || doc.typeChecker.getTypeAtLocation((<any>doc).variableDeclaration.name).getSymbol(), d.aliasSymbol);
          // some docs just don't get `aliasSymbol` set (why???) so manually set name
          newDoc.name = d.name;
          newDoc.content = d.content;

          d.moduleDoc.exports.splice(d.moduleDoc.exports.indexOf(d), 1, newDoc);
          return [newDoc, ...newDoc.parameterDocs];
        }
      }
      return doc;
    });
  }
}

export const CONST_FUNCTIONS_PROCESSOR_PROVIDER = <const>[
  CONST_FUNCTIONS_PROCESSOR_NAME,
  () => new ConstFunctionsProcessor(),
];

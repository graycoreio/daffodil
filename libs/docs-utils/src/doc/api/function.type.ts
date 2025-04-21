import type { FunctionExportDoc } from 'dgeni-packages/typescript/api-doc-types/FunctionExportDoc';
import type { ParameterDoc } from 'dgeni-packages/typescript/api-doc-types/ParameterDoc';

import { DaffDocsRenderedContent } from '../rendered-content.type';

export interface DaffDocsApiFunctionParam extends Pick<ParameterDoc, 'name' | 'defaultValue' | 'isOptional' | 'isRestParam'> {
  type: DaffDocsRenderedContent;
  description: DaffDocsRenderedContent;
}

export interface DaffDocsApiFunction extends Pick<FunctionExportDoc, 'typeParameters'> {
  parameterDocs: Array<DaffDocsApiFunctionParam>;
  description: DaffDocsRenderedContent;
  type: DaffDocsRenderedContent;
}

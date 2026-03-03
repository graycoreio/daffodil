import type { FunctionExportDoc } from 'dgeni-packages/typescript/api-doc-types/FunctionExportDoc';
import type { ParameterDoc } from 'dgeni-packages/typescript/api-doc-types/ParameterDoc';

import { DaffDocsRenderedContent } from '../rendered-content.type';
import { DaffApiDocBase } from './base.type';
import { DaffDocsApiType } from '../../api/public_api';

export interface DaffDocsApiFunctionParam extends Pick<ParameterDoc, 'name' | 'defaultValue' | 'isOptional' | 'isRestParam'> {
  type: DaffDocsRenderedContent;
  description: DaffDocsRenderedContent;
  anchor: string;
}

export interface DaffDocsApiFunction extends DaffApiDocBase, Pick<FunctionExportDoc, 'typeParameters'> {
  parameterDocs: Array<DaffDocsApiFunctionParam>;
  type: DaffDocsRenderedContent;
  docType: DaffDocsApiType.FUNCTION;
}

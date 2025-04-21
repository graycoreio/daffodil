import type { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';
import type { ConstExportDoc } from 'dgeni-packages/typescript/api-doc-types/ConstExportDoc';
import type { EnumExportDoc } from 'dgeni-packages/typescript/api-doc-types/EnumExportDoc';
import type { FunctionExportDoc } from 'dgeni-packages/typescript/api-doc-types/FunctionExportDoc';
import type { InterfaceExportDoc } from 'dgeni-packages/typescript/api-doc-types/InterfaceExportDoc';
import type { TypeAliasExportDoc } from 'dgeni-packages/typescript/api-doc-types/TypeAliasExportDoc';

import { DaffDocsApiType } from '../api/public_api';

// dgeni does not use `const` for its `docType` class declarations, so they are typed as string
// explicitly add the correct types here so narrowing will work
/**
 * A union of the various kinds of typescript documents that can be generated.
 */
export type DaffDocsTsDocument =
| (ClassExportDoc & {docType: DaffDocsApiType.CLASS})
| (TypeAliasExportDoc & {docType: DaffDocsApiType.TYPE_ALIAS})
| (InterfaceExportDoc & {docType: DaffDocsApiType.INTERFACE})
| (FunctionExportDoc & {docType: DaffDocsApiType.FUNCTION})
| (ConstExportDoc & {docType: DaffDocsApiType.CONST})
| (EnumExportDoc & {docType: DaffDocsApiType.ENUM});

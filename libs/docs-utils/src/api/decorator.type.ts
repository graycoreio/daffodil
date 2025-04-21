import type { ParsedDecorator } from 'dgeni-packages/typescript/services/TsParser/getDecorators';

/**
 * A TS decorator on a symbol.
 */
export interface DaffDocsApiDecorator extends Pick<ParsedDecorator, 'argumentInfo' | 'arguments' | 'isCallExpression' | 'name'> {}

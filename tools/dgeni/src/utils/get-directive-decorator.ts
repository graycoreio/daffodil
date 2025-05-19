import type { ClassLikeExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassLikeExportDoc';

export const getDirectiveDecorator = (doc: ClassLikeExportDoc): ClassLikeExportDoc['decorators'][number] | undefined =>
  doc.decorators?.find((decorator) => decorator.name === 'Component' || decorator.name === 'Directive');

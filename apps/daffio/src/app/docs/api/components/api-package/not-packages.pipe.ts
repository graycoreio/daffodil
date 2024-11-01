import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { DaffApiDoc } from '@daffodil/docs-utils';

/**
 * Filters packages from a list of API docs.
 * If exclude is false or omitted, will only output packages.
 * Otherwise it will omit packages from the output.
 */
@Pipe({
  name: 'apiPackageFilter',
  standalone: true,
})
export class DaffioApiPackageFilterPipe implements PipeTransform {
  transform(docs: Array<DaffApiDoc>, exclude = false) {
    return exclude
      ? docs.filter((doc) => doc.docType !== 'package')
      : docs.filter((doc) => doc.docType === 'package');
  }
}

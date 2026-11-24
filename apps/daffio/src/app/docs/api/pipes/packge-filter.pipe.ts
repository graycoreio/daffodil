import {
  Pipe,
  PipeTransform,
} from '@angular/core';

/**
 * Filters packages from a list of API docs.
 * If exclude is false or omitted, will only output packages.
 * Otherwise it will omit packages from the output.
 */
@Pipe({
  name: 'apiPackageFilter',
})
export class DaffioApiPackageFilterPipe implements PipeTransform {
  transform<T extends { docType: string }>(docs: Array<T>, exclude = false): Array<T> {
    return exclude
      ? docs.filter((doc) => doc.docType !== 'package')
      : docs.filter((doc) => doc.docType === 'package');
  }
}

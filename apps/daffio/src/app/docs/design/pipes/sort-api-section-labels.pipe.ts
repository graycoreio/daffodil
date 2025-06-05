import { KeyValue } from '@angular/common';
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  DaffApiDoc,
  DaffDocsApiRole,
  daffDocsApiRoleSort,
} from '@daffodil/docs-utils';

@Pipe({
  name: 'daffioDocsDesignApiSortSectionLabels',
  standalone: true,
})
export class DaffioDocsDesignApiSortSectionLabels implements PipeTransform {
  transform(value: Array<KeyValue<DaffDocsApiRole, Array<DaffApiDoc>>>) {
    return daffDocsApiRoleSort(value.map(({ key }) => key)).map((role) => value.find(({ key }) => key === role));
  }
}

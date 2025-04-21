import { KeyValue } from '@angular/common';
import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  DaffDocsApiRole,
  daffDocsApiRoleSort,
} from '@daffodil/docs-utils';

@Pipe({
  name: 'daffioDocsDesignApiSortSectionLabels',
  standalone: true,
})
export class DaffioDocsDesignApiSortSectionLabels implements PipeTransform {
  transform(value: Array<KeyValue<DaffDocsApiRole, Array<string>>>) {
    return daffDocsApiRoleSort(value.map(({ key }) => key)).map((role) => value.find(({ key }) => key === role));
  }
}

import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  DaffApiDoc,
  daffDocsApiRoleGroup,
} from '@daffodil/docs-utils';

@Pipe({
  name: 'daffioDocsApiRoleGroup',
})
export class DaffioDocsApiGroupByRolePipe implements PipeTransform {
  transform(value: Array<DaffApiDoc>) {
    return daffDocsApiRoleGroup(value);
  }
}

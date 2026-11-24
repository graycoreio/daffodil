import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  DaffDocsApiRole,
  daffDocsApiRoleGroup,
} from '@daffodil/docs-utils';

@Pipe({
  name: 'daffioDocsApiRoleGroup',
})
export class DaffioDocsApiGroupByRolePipe implements PipeTransform {
  transform<T extends { role?: DaffDocsApiRole }>(value: Array<T>): Array<T> {
    return daffDocsApiRoleGroup(value);
  }
}

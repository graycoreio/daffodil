import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  DaffDocsApiRole,
  daffDocsApiRoleGetTagLabel,
} from '@daffodil/docs-utils';

@Pipe({
  name: 'daffDocsApiRoleTagLabel',
})
export class DaffDocsApiRoleTagLabelPipe implements PipeTransform {
  transform(role: DaffDocsApiRole) {
    return daffDocsApiRoleGetTagLabel(role);
  }
}

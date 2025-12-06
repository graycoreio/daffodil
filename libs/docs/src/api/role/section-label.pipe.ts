import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import {
  DaffDocsApiRole,
  daffDocsApiRoleGetSectionLabel,
} from '@daffodil/docs-utils';

@Pipe({
  name: 'daffDocsApiRoleSectionLabel',
})
export class DaffDocsApiRoleSectionLabelPipe implements PipeTransform {
  transform(role: DaffDocsApiRole) {
    return daffDocsApiRoleGetSectionLabel(role);
  }
}

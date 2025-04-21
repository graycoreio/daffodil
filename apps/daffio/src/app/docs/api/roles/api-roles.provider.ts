import { provideDaffioDocsApiBaseContentComponent } from '../components/fragments/api-base-content/api-base-content.provider';
import { provideDaffioDocsApiDirectiveContentComponent } from '../components/fragments/api-directive-content/api-directive-content.provider';
import { provideDaffioDocsApiTypeContentComponent } from '../components/fragments/api-type-content/api-type-content.provider';
import { DaffioDocsApiDynamicContentComponentService } from '../dynamic-content/dynamic-content-component.service';

export const daffioDocsApiRolesProvider = () => [
  ...provideDaffioDocsApiDirectiveContentComponent(),
  ...provideDaffioDocsApiTypeContentComponent(),
  ...provideDaffioDocsApiBaseContentComponent(),
  DaffioDocsApiDynamicContentComponentService,
];

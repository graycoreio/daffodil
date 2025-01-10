import { DaffioDocsApiContentComponent } from './api-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamically-renderable-content/components.token';

export const daffioDocsApiContentComponentProvider = () => provideDaffioDocsDynamicContentComponents(DaffioDocsApiContentComponent);

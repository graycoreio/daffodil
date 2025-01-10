import { DaffioDocsGuidesContentComponent } from './guides-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamic-content/dynamic-content-components.token';

export const daffioDocsGuidesContentComponentProvider = () => provideDaffioDocsDynamicContentComponents(DaffioDocsGuidesContentComponent);

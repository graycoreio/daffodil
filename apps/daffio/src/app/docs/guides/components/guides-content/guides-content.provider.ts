import { DaffioDocsGuidesContentComponent } from './guides-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamically-renderable-content/components.token';

export const daffioDocsGuidesContentComponentProvider = () => provideDaffioDocsDynamicContentComponents(DaffioDocsGuidesContentComponent);

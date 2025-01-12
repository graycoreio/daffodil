import { DaffioDocsGuidesContentComponent } from './guides-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsGuidesContentComponent = () => provideDaffioDocsDynamicContentComponents(DaffioDocsGuidesContentComponent);

import { DaffioDocsPackagesContentComponent } from './packages-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamically-renderable-content/components.token';

export const daffioDocsPackagesContentComponentProvider = () => provideDaffioDocsDynamicContentComponents(DaffioDocsPackagesContentComponent);

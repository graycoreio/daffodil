import { DaffioDocsPackagesContentComponent } from './packages-content.component';
import { provideDaffioDocsDynamicallyRenderableContentComponents } from '../../../dynamically-renderable-content/components.token';

export const daffioDocsPackagesContentComponentProvider = () => provideDaffioDocsDynamicallyRenderableContentComponents(DaffioDocsPackagesContentComponent);

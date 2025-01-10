import { DaffioDocsApiContentComponent } from './api-content.component';
import { provideDaffioDocsDynamicallyRenderableContentComponents } from '../../../dynamically-renderable-content/components.token';

export const daffioDocsApiContentComponentProvider = () => provideDaffioDocsDynamicallyRenderableContentComponents(DaffioDocsApiContentComponent);

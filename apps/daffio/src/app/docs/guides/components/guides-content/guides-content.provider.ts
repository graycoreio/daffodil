import { DaffioDocsGuidesContentComponent } from './guides-content.component';
import { provideDaffioDocsDynamicallyRenderableContentComponents } from '../../../dynamically-renderable-content/components.token';

export const daffioDocsGuidesContentComponentProvider = () => provideDaffioDocsDynamicallyRenderableContentComponents(DaffioDocsGuidesContentComponent);

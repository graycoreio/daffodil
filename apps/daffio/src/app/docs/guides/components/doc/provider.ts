import { DaffioDocsGuidesContentComponent } from './component';
import { provideDaffioDocsDynamicallyRenderableComponents } from '../../../dynamically-renderable/components.token';

export const daffioDocsGuideComponentProvider = () => provideDaffioDocsDynamicallyRenderableComponents(DaffioDocsGuidesContentComponent);

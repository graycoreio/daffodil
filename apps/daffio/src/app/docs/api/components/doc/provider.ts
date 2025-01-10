import { DaffioDocApiComponent } from './component';
import { provideDaffioDocsDynamicallyRenderableComponents } from '../../../dynamically-renderable/components.token';

export const daffioDocsApiComponentProvider = () => provideDaffioDocsDynamicallyRenderableComponents(DaffioDocApiComponent);

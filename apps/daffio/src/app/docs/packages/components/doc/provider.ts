import { DaffioDocPackagesContentComponent } from './component';
import { provideDaffioDocsDynamicallyRenderableComponents } from '../../../dynamically-renderable/components.token';

export const daffioDocsPackageComponentProvider = () => provideDaffioDocsDynamicallyRenderableComponents(DaffioDocPackagesContentComponent);

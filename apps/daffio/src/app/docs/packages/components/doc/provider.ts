import { DaffioDocPackagesContentComponent } from './component';
import { provideDaffioDocRendererComponents } from '../../../renderer/components.token';

export const daffioDocsPackageComponentProvider = () => provideDaffioDocRendererComponents(DaffioDocPackagesContentComponent);

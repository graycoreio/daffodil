import { DaffioDocPackageComponent } from './component';
import { provideDaffioDocRendererComponents } from '../../../components/doc-renderer/token';

export const daffioDocsPackageComponentProvider = () => provideDaffioDocRendererComponents(DaffioDocPackageComponent);

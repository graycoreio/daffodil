import { DaffioDocApiComponent } from './component';
import { provideDaffioDocRendererComponents } from '../../../components/doc-renderer/token';

export const daffioDocsApiComponentProvider = () => provideDaffioDocRendererComponents(DaffioDocApiComponent);

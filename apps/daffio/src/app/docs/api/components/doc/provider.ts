import { DaffioDocApiComponent } from './component';
import { provideDaffioDocRendererComponents } from '../../../renderer/components.token';

export const daffioDocsApiComponentProvider = () => provideDaffioDocRendererComponents(DaffioDocApiComponent);

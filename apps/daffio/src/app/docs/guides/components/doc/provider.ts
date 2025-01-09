import { DaffioDocGuideComponent } from './component';
import { provideDaffioDocRendererComponents } from '../../../components/doc-renderer/token';

export const daffioDocsGuideComponentProvider = () => provideDaffioDocRendererComponents(DaffioDocGuideComponent);

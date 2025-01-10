import { DaffioDocsGuidesContentComponent } from './component';
import { provideDaffioDocRendererComponents } from '../../../renderer/components.token';

export const daffioDocsGuideComponentProvider = () => provideDaffioDocRendererComponents(DaffioDocsGuidesContentComponent);

import { DaffioDocsDesignComponentContentComponent } from './component-content.component';
import { provideDaffioDocsDynamicContentComponents } from '../../../dynamic-content/dynamic-content-components.token';

export const provideDaffioDocsDesignComponentContentComponent = () => provideDaffioDocsDynamicContentComponents(DaffioDocsDesignComponentContentComponent);

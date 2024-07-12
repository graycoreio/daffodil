import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { ContainerSizesComponent } from './container-sizes/container-sizes.component';


export const CONTAINER_EXAMPLES = [
  ContainerSizesComponent,
];

export const provideDaffDesignContainerExamples = () =>
  provideDaffDocsExampleComponents(...CONTAINER_EXAMPLES);

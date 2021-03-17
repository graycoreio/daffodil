import { Injectable } from '@angular/core';

import { DaffStatefulCategoryPageConfigurationState } from '@daffodil/category/state';
import { MockCategoryPageConfigurationState } from '@daffodil/category/testing';
import {
  DaffState,
  DaffMutableLoadingState,
} from '@daffodil/core/state';
import { DaffModelFactory } from '@daffodil/core/testing';

export class DaffMockStatefulCategoryPageConfigurationState extends MockCategoryPageConfigurationState implements DaffStatefulCategoryPageConfigurationState {
	daffState: DaffMutableLoadingState = DaffState.Stable;
}

@Injectable({
  providedIn: 'root',
})
export class DaffStatefulCategoryPageConfigurationStateFactory extends DaffModelFactory<DaffStatefulCategoryPageConfigurationState> {
  constructor() {
    super(DaffMockStatefulCategoryPageConfigurationState);
  }
}

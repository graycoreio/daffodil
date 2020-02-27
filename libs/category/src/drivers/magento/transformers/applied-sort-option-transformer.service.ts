import { Injectable } from '@angular/core';

import { MagentoSortFieldAction } from '../models/outputs/sort';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAppliedSortOptionTransformService {

  transform(appliedOption: string, appliedDirection: string): MagentoSortFieldAction {
		return {
			[appliedOption]: appliedDirection
		}
  }
}

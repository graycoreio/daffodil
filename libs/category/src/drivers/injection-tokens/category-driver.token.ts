import { InjectionToken } from '@angular/core';

import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';

export const DaffCategoryDriver = new InjectionToken<DaffCategoryServiceInterface>('DaffCategoryDriver');

import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DaffCategory } from '../../models/inputs/category';

export const categoryEntitiesAdapter : EntityAdapter<DaffCategory> = createEntityAdapter<DaffCategory>();
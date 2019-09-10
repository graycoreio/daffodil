import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { DaffCategory } from "../../models/category";

export const categoryEntitiesAdapter : EntityAdapter<DaffCategory> = createEntityAdapter<DaffCategory>();
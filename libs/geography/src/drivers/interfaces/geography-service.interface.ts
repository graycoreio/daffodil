import { DaffCountry } from "../../models/subdivision";

export interface DaffGeographyServiceInterface {
    list(): DaffCountry[];
    get(id: DaffCountry['id']): DaffCountry;
}
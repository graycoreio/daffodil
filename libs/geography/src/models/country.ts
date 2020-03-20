import { DaffSubdivision } from "./region";

export interface DaffCountry {
  id: string;
  name: string;
  name_en: string;
  alpha2: string;
  alpha3: string;
  subdivisions: DaffSubdivision[];
}
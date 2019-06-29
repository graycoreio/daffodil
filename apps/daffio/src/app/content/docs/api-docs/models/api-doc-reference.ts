/**
 * An object for a reference to an API document.
 */
export interface DaffioApiDocReference {
  name: string;
  title: string;
  path: string;
  docType: string;
  securityRisk: boolean;
}

import { Time } from '@angular/common';

export interface DaffHubspotRequest {
  fields: FieldValue[];
  legalConsentOptions?: LegalConsentOptions;
  contextData?: string;
  hubspotUserToken?: string;
  ipAddress?: string;
  pageName?: string;
  pageURI?: string;
  pageID?: string;
  SFDC?: string;
  goToWebinarKey?: string;
  submissionTimestamp?: Time;
  skipValidation?: boolean;
}
export interface FieldValue {
  name: string;
  value: string;
}
export interface LegalConsentOptions {
  consent: string
}
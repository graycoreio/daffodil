export interface DaffHubspotRequest {
  fields: FieldValue[];
  context?: HubspotContext;
}

export interface HubspotContext {
  hutk?: string;
  ipAddress?: string;
  pageName?: string;
  pageUri?: string;
  pageId?: string;
}

export interface FieldValue {
  name: string;
  value: string;
}
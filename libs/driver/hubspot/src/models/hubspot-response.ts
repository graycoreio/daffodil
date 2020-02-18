export interface HubspotError {
  errorType: string;
  message: string;
}

export interface HubspotResponse {
  redirectUri?: string;
  inlineMessage: string;
  errors: HubspotError[];
}
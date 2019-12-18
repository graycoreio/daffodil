import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaffNewsletterHubspotConfig {
  portalId: string;
  guid: string;
  version?: string = '';
}
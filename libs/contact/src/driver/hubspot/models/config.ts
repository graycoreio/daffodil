import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaffContactHubspotConfig {
  portalId: string;
  guid: string;
  version? = '';
}
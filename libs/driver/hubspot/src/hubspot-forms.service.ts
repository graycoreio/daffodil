import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { jsonBuilder } from './transformers/json-builder';
import { DaffHubspotConfig } from './models/config';
import { DaffHubspotRequest } from './models/hubspot-request';
import { HubspotResponse } from './models/hubspot-response';

export class DaffHubspotFormsService {

  constructor(
    private http: HttpClient,
    private document: Document,
    private route: Router,
    private title: Title,
    private config: DaffHubspotConfig) { }
    

  submit(payload: Object): Observable<HubspotResponse> {
    return this.http.post<HubspotResponse>(
      this.generateUrl(this.config.portalId, this.config.guid, this.config.version), 
      this.makeRequest(payload)
    );
  }

  private makeRequest(payload): DaffHubspotRequest {
    return {
      'fields': [
        ...jsonBuilder(payload)
      ], 
      'context': {
        'hutk': this.getCookie(),
        'pageUri': this.getPageURI(),
        'pageName': this.title.getTitle()
      }
    }
  }

  private generateUrl(portalId: string, guid: string, version: string): string {
    if (version === undefined) {
      version = 'v3'
    }
    return 'https://api.hsforms.com/submissions/' + version + '/integration/submit/'
      + portalId + '/' + guid;
  }
  private getCookie() {
    if (!this.document) {
      return null;
    }
    const name = 'hubspotutk';
    const v = this.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }
  private getPageURI() {
    if (!this.route) {
      return null;
    }
    return this.route.url;
  }
}
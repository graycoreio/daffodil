import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DaffHubspotConfig } from './models/config';
import { DaffHubspotFormsInterface } from './models/forms';
import { DaffHubspotRequest } from './models/hubspot-request';
import { HubspotResponse } from './models/hubspot-response';
import { jsonBuilder } from './transformers/json-builder';

/**
 * Service for interacting with Hubspot Forms API.
 */
export class DaffHubspotFormsService implements DaffHubspotFormsInterface {
  constructor(
    private http: HttpClient,
    private document: Document,
    private route: Router,
    private title: Title,
    private config: DaffHubspotConfig) { }


  submit(payload: Record<string, any>): Observable<HubspotResponse> {
    return this.http.post<HubspotResponse>(
      this.generateUrl(this.config.portalId, this.config.guid, this.config.version),
      this.makeRequest(payload),
    );
  }

  private makeRequest(payload): DaffHubspotRequest {
    return {
      fields: [
        ...jsonBuilder(payload),
      ],
      context: {
        hutk: this.getCookie(),
        pageUri: this.getPageURI(),
        pageName: this.title.getTitle(),
      },
    };
  }

  private generateUrl(portalId: string, guid: string, version: string): string {
    if (version === undefined) {
      version = 'v3';
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

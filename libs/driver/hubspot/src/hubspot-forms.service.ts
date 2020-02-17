import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


import { DaffHubspotConfig } from './models/config';
import { DaffHubspotRequest } from './models/hubspot-request';



export class DaffHubspotFormsService<T extends DaffHubspotRequest> {

  constructor(
    private http: HttpClient,
    private document: Document,
    private route: Router,
    private title: Title) { }

  submit(payload: Object, config: DaffHubspotConfig): any {
    return this.http.post<T>(this.generateUrl(config.portalId, config.guid, config.version), {
      payload, 'context': {
        'hutk': this.getCookie(),
        'pageUri': this.getPageURI(),
        'pageName': this.title.getTitle()
      }
    });
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
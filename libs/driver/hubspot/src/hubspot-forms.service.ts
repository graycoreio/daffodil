import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { map } from 'rxjs/operators';

import { DaffHubspotConfig } from './models/config';
import { DaffHubspotRequest } from './models/hubspot-request';

import { DaffHubspotFormsTransformer } from './transformers/hubspot-forms.transformer';


export class DaffHubspotFormsService<T extends DaffHubspotRequest> {

  constructor(
    private http: HttpClient,
    private config: DaffHubspotConfig,
    private transformer: DaffHubspotFormsTransformer,
    private document: Document,
    private route: Router,
    private title: Title) { }

  send(payload: Object): any {
    return this.http.post<T>(this.generateUrl(this.config.portalId, this.config.guid, this.config.version), {
      ...this.transformer.transformOut(payload), 'context': {
        'hutk': this.getCookie(),
        'pageUri': this.getPageURI(),
        'pageName': this.title.getTitle()
      }
    }).pipe(map(this.transformer.transformIn));
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
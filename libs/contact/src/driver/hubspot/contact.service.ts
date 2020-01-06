import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { map } from 'rxjs/operators';

import { DaffContactUnion } from '../../models/contact-union';
import { DaffContactHubspotConfig } from './models/config';
import { HubspotRequest } from './models/hubspot-response';
import { DaffContactTransformerInterface } from '../interfaces/contact-transformer.interface';
import { DaffContactServiceInterface } from '../interfaces/contact-service.interface';
import { DaffContactConfig } from '../injection-tokens/contact-config.token';
import { DaffContactTransformer } from '../injection-tokens/contact-transfomer.token';

@Injectable({
  providedIn: 'root'
})
export class DaffContactHubspotService implements DaffContactServiceInterface<DaffContactUnion, any> {

  constructor(
    private http: HttpClient,
    @Inject(DaffContactConfig) private contactConfig: DaffContactHubspotConfig,
    @Inject(DaffContactTransformer) private transformer: DaffContactTransformerInterface<DaffContactUnion, HubspotRequest, HubspotRequest, any>,
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Optional() private route: Router,
    private title: Title) { }

  send(payload: DaffContactUnion): any {
    return this.http.post<HubspotRequest>(this.generateUrl(this.contactConfig.portalId, this.contactConfig.guid, this.contactConfig.version), {
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
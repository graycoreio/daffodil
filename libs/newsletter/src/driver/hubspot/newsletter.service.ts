
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { map } from 'rxjs/operators';

import { DaffNewsletterUnion } from '../../models/newsletter-union';
import { DaffNewsletterHubspotConfig } from './models/config';
import { HubspotRequest} from './models/hubspot-response';
import { DaffNewsletterTransformer } from '../injection-tokens/newsletter-transformer.token';
import { DaffNewsletterTransformerInterface } from '../interfaces/newsletter-transformer.interface';
import { DaffNewsletterServiceInterface } from '../interfaces/newsletter-service.interface';
import { DaffNewsletterConfig } from '../injection-tokens/newsletter-config.token';

@Injectable({
  providedIn: 'root'
})
export class DaffHubspotNewsletterService implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {
  
  constructor(
    private http: HttpClient,
    @Inject(DaffNewsletterConfig) private newsletterConfig: DaffNewsletterHubspotConfig,
    @Inject(DaffNewsletterTransformer) private transformer: DaffNewsletterTransformerInterface<DaffNewsletterUnion, HubspotRequest, HubspotRequest, any>,
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Optional() private route: Router,
    private title: Title) { }

  send(payload: DaffNewsletterUnion): any {
    return this.http.post<HubspotRequest>(this.generateUrl(this.newsletterConfig.portalId, this.newsletterConfig.guid, this.newsletterConfig.version),{
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
    if(!this.document) {
      return null;
    }
    const name = 'hubspotutk';
    const v = this.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }
  private getPageURI() {
    if(!this.route) {
      return null;
    }
    return this.route.url;
  }
}

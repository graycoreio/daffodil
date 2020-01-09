
import { HttpClient } from '@angular/common/http';
import { Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



import { DaffNewsletterUnion } from '../../models/newsletter-union';

import { DaffNewsletterTransformer } from '../injection-tokens/newsletter-transformer.token';
import { DaffNewsletterTransformerInterface } from '../interfaces/newsletter-transformer.interface';
import { DaffNewsletterServiceInterface } from '../interfaces/newsletter-service.interface';
import { DaffNewsletterConfig } from '../injection-tokens/newsletter-config.token';
import { DaffHubspotRequest, DaffHubspotFormsService, DaffHubspotConfig } from '@daffodil/driver/hubspot';

export class DaffNewsletterHubspotService extends DaffHubspotFormsService<DaffHubspotRequest> implements DaffNewsletterServiceInterface<DaffNewsletterUnion, any> {
  
  constructor(
    http: HttpClient,
    @Inject(DaffNewsletterConfig) contactConfig: DaffHubspotConfig,
    @Inject(DaffNewsletterTransformer) transformer: DaffNewsletterTransformerInterface<DaffNewsletterUnion, DaffHubspotRequest, any, any>,
    @Optional() @Inject(DOCUMENT) document: Document,
    @Optional() route: Router,
    title: Title) {
    super(http, contactConfig, transformer, document, route, title)
  }

  
}

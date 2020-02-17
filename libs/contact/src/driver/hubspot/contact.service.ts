import { HttpClient } from '@angular/common/http';
import { Inject, Optional, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DaffContactUnion } from '../../models/contact-union';
import { DaffContactTransformerInterface, DaffContactTransformer } from '../interfaces/contact-transformer.interface';
import { DaffContactServiceInterface } from '../interfaces/contact-service.interface';
import { DaffContactConfig } from '../interfaces/injection-tokens/contact-config.token';
import { DaffHubspotFormsService, DaffHubspotRequest, DaffHubspotConfig } from '@daffodil/driver/hubspot';
import { map } from 'rxjs/operators';

export class DaffContactHubspotService implements DaffContactServiceInterface<DaffContactUnion, any>{
  constructor(
    private hubspotService: DaffHubspotFormsService<DaffHubspotRequest>,
    http: HttpClient,
    private transformer: DaffContactTransformerInterface<DaffContactUnion, DaffHubspotRequest, any, any>,
    @Optional() @Inject(DOCUMENT) document: Document,
    @Optional() route: Router,
    title: Title) {
  }
  send(payload: DaffContactUnion, config: DaffHubspotConfig): any {
    this.hubspotService.submit(this.transformer.transformOut(payload)).pipe(map(this.transformer.transformIn));
  }

    
}
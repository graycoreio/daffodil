import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DaffHubspotConfig } from './models/config';
import { DaffHubspotFormsService } from './hubspot-forms.service';
export declare const daffHubspotFormsServiceFactory: (http: HttpClient, document: Document, router: Router, title: Title, config: DaffHubspotConfig) => DaffHubspotFormsService;

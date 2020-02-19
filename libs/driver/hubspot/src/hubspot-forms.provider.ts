import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DaffHubspotConfig } from './models/config';
import { DaffHubspotFormsService } from './hubspot-forms.service';


export const daffHubspotFormsServiceFactory = (
  http: HttpClient, 
  document: Document, 
  router: Router, 
  title: Title, 
  config: DaffHubspotConfig
) => {
  return new DaffHubspotFormsService(http, document, router, title, config);
};
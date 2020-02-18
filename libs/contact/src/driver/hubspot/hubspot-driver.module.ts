import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContactHubspotService } from './contact.service';

import {  
  DaffHubspotFormsService, 
  daffHubspotFormsServiceFactory 
} from '@daffodil/driver/hubspot';

import { DaffContactDriver } from '../interfaces/contact-service.interface';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DaffContactConfig, DaffContactConfigToken } from '../interfaces/contact-config.interface';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffContactHubSpotDriverModule {
  static forRoot(config: DaffContactConfig): ModuleWithProviders<DaffContactHubSpotDriverModule> {
    return {
      ngModule: DaffContactHubSpotDriverModule,
      providers: [
        {provide: DaffContactDriver, useClass: DaffContactHubspotService},
        {provide: DaffContactConfigToken, useValue: config},
        {
          provide: DaffHubspotFormsService, 
          useFactory: daffHubspotFormsServiceFactory, 
          deps: [
            HttpClient,
            Document, 
            Router, 
            Title, 
            DaffContactConfigToken
          ],
        }
      ]
    }
  }
} 
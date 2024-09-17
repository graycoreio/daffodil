import { DOCUMENT } from '@angular/common';
import {
 HttpClient,
provideHttpClient,
withInterceptorsFromDi,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffHubspotFormsService,
  daffHubspotFormsServiceFactory,
} from '@daffodil/driver/hubspot';



describe('DaffHubspotForms Factory Provider', () => {
  let hubspotService: DaffHubspotFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [
        {
            provide: DaffHubspotFormsService,
            useFactory: daffHubspotFormsServiceFactory,
            deps: [
                HttpClient,
                Router,
                DOCUMENT,
                Title,
            ],
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ],
});
    hubspotService = TestBed.inject(DaffHubspotFormsService);


  });

  it('should create a DaffHubspotFormsService', () => {
    expect(hubspotService).toBeTruthy();
  });
});

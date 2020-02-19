import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';

import { DaffContactUnion } from '../../models/contact-union';
import { DaffContactServiceInterface } from '../interfaces/contact-service.interface';

@Injectable()
export class DaffContactHubspotService implements DaffContactServiceInterface<DaffContactUnion, any>{
  
  constructor(private hubspotService: DaffHubspotFormsService) {}
  
  send(payload: DaffContactUnion): Observable<any> {
    return this.hubspotService.submit(payload)
  }  
}
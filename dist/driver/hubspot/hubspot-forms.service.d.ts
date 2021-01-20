import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DaffHubspotConfig } from './models/config';
import { HubspotResponse } from './models/hubspot-response';
export declare class DaffHubspotFormsService {
    private http;
    private document;
    private route;
    private title;
    private config;
    constructor(http: HttpClient, document: Document, route: Router, title: Title, config: DaffHubspotConfig);
    submit(payload: Object): Observable<HubspotResponse>;
    private makeRequest;
    private generateUrl;
    private getCookie;
    private getPageURI;
}

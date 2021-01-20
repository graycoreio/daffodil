const jsonBuilder = (payload) => {
    return Object.keys(payload).map((key) => ({ 'name': key, 'value': payload[key] }));
};

class DaffHubspotFormsService {
    constructor(http, document, route, title, config) {
        this.http = http;
        this.document = document;
        this.route = route;
        this.title = title;
        this.config = config;
    }
    submit(payload) {
        return this.http.post(this.generateUrl(this.config.portalId, this.config.guid, this.config.version), this.makeRequest(payload));
    }
    makeRequest(payload) {
        return {
            'fields': [
                ...jsonBuilder(payload)
            ],
            'context': {
                'hutk': this.getCookie(),
                'pageUri': this.getPageURI(),
                'pageName': this.title.getTitle()
            }
        };
    }
    generateUrl(portalId, guid, version) {
        if (version === undefined) {
            version = 'v3';
        }
        return 'https://api.hsforms.com/submissions/' + version + '/integration/submit/'
            + portalId + '/' + guid;
    }
    getCookie() {
        if (!this.document) {
            return null;
        }
        const name = 'hubspotutk';
        const v = this.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }
    getPageURI() {
        if (!this.route) {
            return null;
        }
        return this.route.url;
    }
}

const daffHubspotFormsServiceFactory = (http, document, router, title, config) => {
    return new DaffHubspotFormsService(http, document, router, title, config);
};

/**
 * Generated bundle index. Do not edit.
 */

export { DaffHubspotFormsService, daffHubspotFormsServiceFactory };
//# sourceMappingURL=daffodil-driver-hubspot.js.map

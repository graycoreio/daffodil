import { __spread } from 'tslib';

var jsonBuilder = function (payload) {
    return Object.keys(payload).map(function (key) { return ({ 'name': key, 'value': payload[key] }); });
};

var DaffHubspotFormsService = /** @class */ (function () {
    function DaffHubspotFormsService(http, document, route, title, config) {
        this.http = http;
        this.document = document;
        this.route = route;
        this.title = title;
        this.config = config;
    }
    DaffHubspotFormsService.prototype.submit = function (payload) {
        return this.http.post(this.generateUrl(this.config.portalId, this.config.guid, this.config.version), this.makeRequest(payload));
    };
    DaffHubspotFormsService.prototype.makeRequest = function (payload) {
        return {
            'fields': __spread(jsonBuilder(payload)),
            'context': {
                'hutk': this.getCookie(),
                'pageUri': this.getPageURI(),
                'pageName': this.title.getTitle()
            }
        };
    };
    DaffHubspotFormsService.prototype.generateUrl = function (portalId, guid, version) {
        if (version === undefined) {
            version = 'v3';
        }
        return 'https://api.hsforms.com/submissions/' + version + '/integration/submit/'
            + portalId + '/' + guid;
    };
    DaffHubspotFormsService.prototype.getCookie = function () {
        if (!this.document) {
            return null;
        }
        var name = 'hubspotutk';
        var v = this.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    };
    DaffHubspotFormsService.prototype.getPageURI = function () {
        if (!this.route) {
            return null;
        }
        return this.route.url;
    };
    return DaffHubspotFormsService;
}());

var daffHubspotFormsServiceFactory = function (http, document, router, title, config) {
    return new DaffHubspotFormsService(http, document, router, title, config);
};

/**
 * Generated bundle index. Do not edit.
 */

export { DaffHubspotFormsService, daffHubspotFormsServiceFactory };
//# sourceMappingURL=daffodil-driver-hubspot.js.map

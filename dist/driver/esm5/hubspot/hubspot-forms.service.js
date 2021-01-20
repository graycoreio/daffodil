import * as tslib_1 from "tslib";
import { jsonBuilder } from './transformers/json-builder';
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
            'fields': tslib_1.__spread(jsonBuilder(payload)),
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
export { DaffHubspotFormsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVic3BvdC1mb3Jtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2RyaXZlci9odWJzcG90LyIsInNvdXJjZXMiOlsiaHVic3BvdC1mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLMUQ7SUFFRSxpQ0FDVSxJQUFnQixFQUNoQixRQUFrQixFQUNsQixLQUFhLEVBQ2IsS0FBWSxFQUNaLE1BQXlCO1FBSnpCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFdBQU0sR0FBTixNQUFNLENBQW1CO0lBQUksQ0FBQztJQUd4Qyx3Q0FBTSxHQUFOLFVBQU8sT0FBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzdFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRU8sNkNBQVcsR0FBbkIsVUFBb0IsT0FBTztRQUN6QixPQUFPO1lBQ0wsUUFBUSxtQkFDSCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN4QixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDNUIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2FBQ2xDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFTyw2Q0FBVyxHQUFuQixVQUFvQixRQUFnQixFQUFFLElBQVksRUFBRSxPQUFlO1FBQ2pFLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFBO1NBQ2Y7UUFDRCxPQUFPLHNDQUFzQyxHQUFHLE9BQU8sR0FBRyxzQkFBc0I7Y0FDNUUsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUNPLDJDQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQU0sSUFBSSxHQUFHLFlBQVksQ0FBQztRQUMxQixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxlQUFlLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNPLDRDQUFVLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGpzb25CdWlsZGVyIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvanNvbi1idWlsZGVyJztcbmltcG9ydCB7IERhZmZIdWJzcG90Q29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnJztcbmltcG9ydCB7IERhZmZIdWJzcG90UmVxdWVzdCB9IGZyb20gJy4vbW9kZWxzL2h1YnNwb3QtcmVxdWVzdCc7XG5pbXBvcnQgeyBIdWJzcG90UmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9odWJzcG90LXJlc3BvbnNlJztcblxuZXhwb3J0IGNsYXNzIERhZmZIdWJzcG90Rm9ybXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxuICAgIHByaXZhdGUgY29uZmlnOiBEYWZmSHVic3BvdENvbmZpZykgeyB9XG4gICAgXG5cbiAgc3VibWl0KHBheWxvYWQ6IE9iamVjdCk6IE9ic2VydmFibGU8SHVic3BvdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEh1YnNwb3RSZXNwb25zZT4oXG4gICAgICB0aGlzLmdlbmVyYXRlVXJsKHRoaXMuY29uZmlnLnBvcnRhbElkLCB0aGlzLmNvbmZpZy5ndWlkLCB0aGlzLmNvbmZpZy52ZXJzaW9uKSwgXG4gICAgICB0aGlzLm1ha2VSZXF1ZXN0KHBheWxvYWQpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVJlcXVlc3QocGF5bG9hZCk6IERhZmZIdWJzcG90UmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmaWVsZHMnOiBbXG4gICAgICAgIC4uLmpzb25CdWlsZGVyKHBheWxvYWQpXG4gICAgICBdLCBcbiAgICAgICdjb250ZXh0Jzoge1xuICAgICAgICAnaHV0ayc6IHRoaXMuZ2V0Q29va2llKCksXG4gICAgICAgICdwYWdlVXJpJzogdGhpcy5nZXRQYWdlVVJJKCksXG4gICAgICAgICdwYWdlTmFtZSc6IHRoaXMudGl0bGUuZ2V0VGl0bGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVcmwocG9ydGFsSWQ6IHN0cmluZywgZ3VpZDogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2ZXJzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnNpb24gPSAndjMnXG4gICAgfVxuICAgIHJldHVybiAnaHR0cHM6Ly9hcGkuaHNmb3Jtcy5jb20vc3VibWlzc2lvbnMvJyArIHZlcnNpb24gKyAnL2ludGVncmF0aW9uL3N1Ym1pdC8nXG4gICAgICArIHBvcnRhbElkICsgJy8nICsgZ3VpZDtcbiAgfVxuICBwcml2YXRlIGdldENvb2tpZSgpIHtcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gJ2h1YnNwb3R1dGsnO1xuICAgIGNvbnN0IHYgPSB0aGlzLmRvY3VtZW50LmNvb2tpZS5tYXRjaCgnKF58OykgPycgKyBuYW1lICsgJz0oW147XSopKDt8JCknKTtcbiAgICByZXR1cm4gdiA/IHZbMl0gOiBudWxsO1xuICB9XG4gIHByaXZhdGUgZ2V0UGFnZVVSSSgpIHtcbiAgICBpZiAoIXRoaXMucm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmw7XG4gIH1cbn0iXX0=
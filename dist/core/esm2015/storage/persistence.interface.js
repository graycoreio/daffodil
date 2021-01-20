/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, inject, PLATFORM_ID } from '@angular/core';
import { DaffLocalStorageService } from './localstorage/localstorage.service';
import { isPlatformBrowser } from '@angular/common';
import { DaffServerErrorStorageService } from './server-error/public_api';
/**
 * @record
 */
export function DaffPersistenceService() { }
if (false) {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DaffPersistenceService.prototype.setItem = function (key, value) { };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffPersistenceService.prototype.getItem = function (key) { };
    /**
     * @return {?}
     */
    DaffPersistenceService.prototype.clear = function () { };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffPersistenceService.prototype.removeItem = function (key) { };
}
/** @type {?} */
export const DaffPersistenceServiceToken = new InjectionToken('DaffPersistenceService', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => isPlatformBrowser(inject(PLATFORM_ID))
        ? new DaffLocalStorageService(inject(PLATFORM_ID))
        : new DaffServerErrorStorageService()),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdGVuY2UuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJzdG9yYWdlL3BlcnNpc3RlbmNlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRTFFLDRDQUtDOzs7Ozs7O0lBSkMscUVBQXdDOzs7OztJQUN4Qyw4REFBMEI7Ozs7SUFDMUIseURBQWM7Ozs7O0lBQ2QsaUVBQThCOzs7QUFHaEMsTUFBTSxPQUFPLDJCQUEyQixHQUFHLElBQUksY0FBYyxDQUF5Qix3QkFBd0IsRUFBRTtJQUM5RyxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPOzs7SUFBRSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQVMsV0FBVyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFTLFdBQVcsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxJQUFJLDZCQUE2QixFQUFFLENBQUE7Q0FDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBpbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGFmZlNlcnZlckVycm9yU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZlci1lcnJvci9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlIHtcbiAgc2V0SXRlbShrZXkgOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xuICBnZXRJdGVtKGtleTogc3RyaW5nKTogYW55O1xuICBjbGVhcigpOiB2b2lkO1xuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2VUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlPignRGFmZlBlcnNpc3RlbmNlU2VydmljZScsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiAoKSA9PiBpc1BsYXRmb3JtQnJvd3NlcihpbmplY3Q8c3RyaW5nPihQTEFURk9STV9JRCkpIFxuICAgID8gbmV3IERhZmZMb2NhbFN0b3JhZ2VTZXJ2aWNlKGluamVjdDxzdHJpbmc+KFBMQVRGT1JNX0lEKSkgXG4gICAgOiBuZXcgRGFmZlNlcnZlckVycm9yU3RvcmFnZVNlcnZpY2UoKSxcbn0pO1xuIl19
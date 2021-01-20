/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { range } from '@daffodil/core';
/**
 * @record
 * @template T
 */
function ArglessConstructable() { }
/**
 * @abstract
 * @template T
 */
export class DaffModelFactory {
    /**
     * @param {?} type
     */
    constructor(type) {
        this.type = type;
    }
    /**
     * @param {?=} partial
     * @return {?}
     */
    create(partial = {}) {
        return Object.assign({}, (/** @type {?} */ (new this.type())), partial);
    }
    /**
     * @param {?=} qty
     * @param {?=} partial
     * @return {?}
     */
    createMany(qty = 1, partial = {}) {
        return range(0, qty - 1).map((/**
         * @return {?}
         */
        () => this.create(partial)));
    }
}
if (false) {
    /** @type {?} */
    DaffModelFactory.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUV2QyxtQ0FFQzs7Ozs7QUFHRCxNQUFNLE9BQWdCLGdCQUFnQjs7OztJQUNsQyxZQUFtQixJQUE2QjtRQUE3QixTQUFJLEdBQUosSUFBSSxDQUF5QjtJQUVoRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRTtRQUNmLHlCQUNPLG1CQUFBLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFPLEVBQ3RCLE9BQU8sRUFDYjtJQUNMLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO0lBQzdELENBQUM7Q0FDSjs7O0lBZGUsZ0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbnRlcmZhY2UgQXJnbGVzc0NvbnN0cnVjdGFibGU8VD4ge1xuICAgIG5ldygpIDogVDtcbn1cblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGFmZk1vZGVsRmFjdG9yeTxUIGV4dGVuZHMgT2JqZWN0PiBpbXBsZW1lbnRzIElEYWZmTW9kZWxGYWN0b3J5PFQ+IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogQXJnbGVzc0NvbnN0cnVjdGFibGU8VD4pe1xuXG4gICAgfVxuXG4gICAgY3JlYXRlKHBhcnRpYWwgPSB7fSkgOiBUIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm5ldyB0aGlzLnR5cGUoKSBhcyBhbnksIC8vIFRPRE86IHJlbW92ZSBpbiBUUyAzLjNcbiAgICAgICAgICAgIC4uLnBhcnRpYWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVNYW55KHF0eSA9IDEsIHBhcnRpYWwgPSB7fSkgOiBUW10ge1xuICAgICAgICByZXR1cm4gcmFuZ2UoMCwgcXR5IC0gMSkubWFwKCgpID0+IHRoaXMuY3JlYXRlKHBhcnRpYWwpKTtcbiAgICB9XG59Il19
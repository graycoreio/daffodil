/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartItemActionTypes = {
    CartItemListAction: '[DaffCart] Cart Items List Action',
    CartItemListSuccessAction: '[DaffCart] Cart Items List Success Action',
    CartItemListFailureAction: '[DaffCart] Cart Items List Failure Action',
    CartItemLoadAction: '[DaffCart] Cart Item Load Action',
    CartItemLoadSuccessAction: '[DaffCart] Cart Item Load Success Action',
    CartItemLoadFailureAction: '[DaffCart] Cart Item Load Failure Action',
    CartItemUpdateAction: '[DaffCart] Cart Item Update Action',
    CartItemUpdateSuccessAction: '[DaffCart] Cart Item Update Success Action',
    CartItemUpdateFailureAction: '[DaffCart] Cart Item Update Failure Action',
    CartItemAddAction: '[DaffCart] Cart Item Add Action',
    CartItemAddSuccessAction: '[DaffCart] Cart Item Add Success Action',
    CartItemAddFailureAction: '[DaffCart] Cart Item Add Failure Action',
    CartItemDeleteAction: '[DaffCart] Cart Item Remove Action',
    CartItemDeleteSuccessAction: '[DaffCart] Cart Item Remove Success Action',
    CartItemDeleteFailureAction: '[DaffCart] Cart Item Remove Failure Action',
    CartItemStateResetAction: '[DaffCart] Cart Item State Reset Action',
};
export { DaffCartItemActionTypes };
export class DaffCartItemList {
    constructor() {
        this.type = DaffCartItemActionTypes.CartItemListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemList.prototype.type;
}
/**
 * @template T
 */
export class DaffCartItemListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemListSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemListSuccess.prototype.payload;
}
export class DaffCartItemListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemListFailure.prototype.type;
    /** @type {?} */
    DaffCartItemListFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartItemLoad {
    /**
     * @param {?} itemId
     */
    constructor(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemLoad.prototype.type;
    /** @type {?} */
    DaffCartItemLoad.prototype.itemId;
}
/**
 * @template T
 */
export class DaffCartItemLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.payload;
}
export class DaffCartItemLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartItemUpdate {
    /**
     * @param {?} itemId
     * @param {?} changes
     */
    constructor(itemId, changes) {
        this.itemId = itemId;
        this.changes = changes;
        this.type = DaffCartItemActionTypes.CartItemUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemUpdate.prototype.type;
    /** @type {?} */
    DaffCartItemUpdate.prototype.itemId;
    /** @type {?} */
    DaffCartItemUpdate.prototype.changes;
}
/**
 * @template T, V
 */
export class DaffCartItemUpdateSuccess {
    /**
     * @param {?} payload
     * @param {?} itemId
     */
    constructor(payload, itemId) {
        this.payload = payload;
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.payload;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.itemId;
}
export class DaffCartItemUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartItemAdd {
    /**
     * @param {?} input
     */
    constructor(input) {
        this.input = input;
        this.type = DaffCartItemActionTypes.CartItemAddAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemAdd.prototype.type;
    /** @type {?} */
    DaffCartItemAdd.prototype.input;
}
/**
 * @template T
 */
export class DaffCartItemAddSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.payload;
}
export class DaffCartItemAddFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemAddFailure.prototype.type;
    /** @type {?} */
    DaffCartItemAddFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartItemDelete {
    /**
     * @param {?} itemId
     */
    constructor(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemDeleteAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemDelete.prototype.type;
    /** @type {?} */
    DaffCartItemDelete.prototype.itemId;
}
/**
 * @template T
 */
export class DaffCartItemDeleteSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.payload;
}
export class DaffCartItemDeleteFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.payload;
}
export class DaffCartItemStateReset {
    constructor() {
        this.type = DaffCartItemActionTypes.CartItemStateResetAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemStateReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1pdGVtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBUUUsb0JBQXFCLG1DQUFtQztJQUN4RCwyQkFBNEIsMkNBQTJDO0lBQ3ZFLDJCQUE0QiwyQ0FBMkM7SUFDdkUsb0JBQXFCLGtDQUFrQztJQUN2RCwyQkFBNEIsMENBQTBDO0lBQ3RFLDJCQUE0QiwwQ0FBMEM7SUFDdEUsc0JBQXVCLG9DQUFvQztJQUMzRCw2QkFBOEIsNENBQTRDO0lBQzFFLDZCQUE4Qiw0Q0FBNEM7SUFDMUUsbUJBQW9CLGlDQUFpQztJQUNyRCwwQkFBMkIseUNBQXlDO0lBQ3BFLDBCQUEyQix5Q0FBeUM7SUFDcEUsc0JBQXVCLG9DQUFvQztJQUMzRCw2QkFBOEIsNENBQTRDO0lBQzFFLDZCQUE4Qiw0Q0FBNEM7SUFDMUUsMEJBQTJCLHlDQUF5Qzs7O0FBR3RFLE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDVyxTQUFJLEdBQUcsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7SUFDN0QsQ0FBQztDQUFBOzs7SUFEQyxnQ0FBMkQ7Ozs7O0FBRzdELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFGdEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHlCQUF5QixDQUFDO0lBRWhDLENBQUM7Q0FDcEM7OztJQUhDLHVDQUFrRTs7SUFFdEQsMENBQW1COztBQUdqQyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUVyQixDQUFDO0NBQy9DOzs7SUFIQyx1Q0FBa0U7O0lBRXRELDBDQUE4Qjs7Ozs7QUFHNUMsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUczQixZQUFtQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRjlCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUVqQixDQUFDO0NBQzVDOzs7SUFIQyxnQ0FBMkQ7O0lBRS9DLGtDQUEyQjs7Ozs7QUFHekMsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsdUJBQXVCLENBQUMseUJBQXlCLENBQUM7SUFFbEMsQ0FBQztDQUNsQzs7O0lBSEMsdUNBQWtFOztJQUV0RCwwQ0FBaUI7O0FBRy9CLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHlCQUF5QixDQUFDO0lBRXJCLENBQUM7Q0FDL0M7OztJQUhDLHVDQUFrRTs7SUFFdEQsMENBQThCOzs7OztBQUc1QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUc3QixZQUFtQixNQUFvQixFQUFTLE9BQW1CO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQWM7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjFELFNBQUksR0FBRyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUVTLENBQUM7Q0FDeEU7OztJQUhDLGtDQUE2RDs7SUFFakQsb0NBQTJCOztJQUFFLHFDQUEwQjs7Ozs7QUFHckUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFHcEMsWUFBbUIsT0FBbUIsRUFBUyxNQUFvQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUYxRCxTQUFJLEdBQUcsdUJBQXVCLENBQUMsMkJBQTJCLENBQUM7SUFFRSxDQUFDO0NBQ3hFOzs7SUFIQyx5Q0FBb0U7O0lBRXhELDRDQUEwQjs7SUFBRSwyQ0FBMkI7O0FBR3JFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFHcEMsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO0lBRXZCLENBQUM7Q0FDL0M7OztJQUhDLHlDQUFvRTs7SUFFeEQsNENBQThCOzs7OztBQUc1QyxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFtQixLQUFRO1FBQVIsVUFBSyxHQUFMLEtBQUssQ0FBRztRQUZsQixTQUFJLEdBQUcsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7SUFFNUIsQ0FBQztDQUNoQzs7O0lBSEMsK0JBQTBEOztJQUU5QyxnQ0FBZTs7Ozs7QUFHN0IsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUdqQyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQztJQUV4QixDQUFDO0NBQzNDOzs7SUFIQyxzQ0FBaUU7O0lBRXJELHlDQUEwQjs7QUFHeEMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUdqQyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsdUJBQXVCLENBQUMsd0JBQXdCLENBQUM7SUFFcEIsQ0FBQztDQUMvQzs7O0lBSEMsc0NBQWlFOztJQUVyRCx5Q0FBOEI7Ozs7O0FBRzVDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFHN0IsWUFBbUIsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUY5QixTQUFJLEdBQUcsdUJBQXVCLENBQUMsb0JBQW9CLENBQUM7SUFFbkIsQ0FBQztDQUM1Qzs7O0lBSEMsa0NBQTZEOztJQUVqRCxvQ0FBMkI7Ozs7O0FBR3pDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFHcEMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsdUJBQXVCLENBQUMsMkJBQTJCLENBQUM7SUFFM0IsQ0FBQztDQUMzQzs7O0lBSEMseUNBQW9FOztJQUV4RCw0Q0FBMEI7O0FBR3hDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFHcEMsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO0lBRXZCLENBQUM7Q0FDL0M7OztJQUhDLHlDQUFvRTs7SUFFeEQsNENBQThCOztBQUc1QyxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ1UsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDO0lBQ2xFLENBQUM7Q0FBQTs7O0lBREEsc0NBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEl0ZW1JbnB1dCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzIHtcbiAgQ2FydEl0ZW1MaXN0QWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtcyBMaXN0IEFjdGlvbicsXG4gIENhcnRJdGVtTGlzdFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW1zIExpc3QgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0SXRlbUxpc3RGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtcyBMaXN0IEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1Mb2FkQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIExvYWQgQWN0aW9uJyxcbiAgQ2FydEl0ZW1Mb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydEl0ZW1Mb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBMb2FkIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1VcGRhdGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gVXBkYXRlIEFjdGlvbicsXG4gIENhcnRJdGVtVXBkYXRlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBVcGRhdGUgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0SXRlbVVwZGF0ZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gVXBkYXRlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1BZGRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gQWRkIEFjdGlvbicsXG4gIENhcnRJdGVtQWRkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBBZGQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0SXRlbUFkZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gQWRkIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1EZWxldGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gUmVtb3ZlIEFjdGlvbicsXG4gIENhcnRJdGVtRGVsZXRlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBSZW1vdmUgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0SXRlbURlbGV0ZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gUmVtb3ZlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1TdGF0ZVJlc2V0QWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIFN0YXRlIFJlc2V0IEFjdGlvbidcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUxpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0QWN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtTGlzdFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW0+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtTGlzdFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUxpc3RGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtTGlzdEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtTG9hZDxUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1Mb2FkQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtSWQ6IFRbJ2l0ZW1faWQnXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUxvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1Mb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1VcGRhdGU8VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW0+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtVXBkYXRlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtSWQ6IFRbJ2l0ZW1faWQnXSwgcHVibGljIGNoYW5nZXM6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1VcGRhdGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LCBWIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1VcGRhdGVTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPFQ+LCBwdWJsaWMgaXRlbUlkOiBWWydpdGVtX2lkJ10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1VcGRhdGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtVXBkYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1BZGQ8VCBleHRlbmRzIERhZmZDYXJ0SXRlbUlucHV0ID0gRGFmZkNhcnRJdGVtSW5wdXQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtQWRkQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUFkZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtQWRkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUFkZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1BZGRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbURlbGV0ZTxUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1EZWxldGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW1JZDogVFsnaXRlbV9pZCddKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtRGVsZXRlU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1EZWxldGVTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPFQ+KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtRGVsZXRlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbURlbGV0ZUZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtU3RhdGVSZXNldCBpbXBsZW1lbnRzIEFjdGlvbiB7XG5cdHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVN0YXRlUmVzZXRBY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0SXRlbUFjdGlvbnM8XG4gIFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtLFxuICBVIGV4dGVuZHMgRGFmZkNhcnRJdGVtSW5wdXQgPSBEYWZmQ2FydEl0ZW1JbnB1dCxcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnRcbj4gPVxuICB8IERhZmZDYXJ0SXRlbUxpc3RcbiAgfCBEYWZmQ2FydEl0ZW1MaXN0U3VjY2VzczxUPlxuICB8IERhZmZDYXJ0SXRlbUxpc3RGYWlsdXJlXG4gIHwgRGFmZkNhcnRJdGVtTG9hZDxUPlxuICB8IERhZmZDYXJ0SXRlbUxvYWRTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRJdGVtTG9hZEZhaWx1cmVcbiAgfCBEYWZmQ2FydEl0ZW1VcGRhdGU8VD5cbiAgfCBEYWZmQ2FydEl0ZW1VcGRhdGVTdWNjZXNzPFYsIFQ+XG4gIHwgRGFmZkNhcnRJdGVtVXBkYXRlRmFpbHVyZVxuICB8IERhZmZDYXJ0SXRlbUFkZDxVPlxuICB8IERhZmZDYXJ0SXRlbUFkZFN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydEl0ZW1BZGRGYWlsdXJlXG4gIHwgRGFmZkNhcnRJdGVtRGVsZXRlPFQ+XG4gIHwgRGFmZkNhcnRJdGVtRGVsZXRlU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0SXRlbURlbGV0ZUZhaWx1cmVcbiAgfCBEYWZmQ2FydEl0ZW1TdGF0ZVJlc2V0O1xuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartItemActionTypes = {
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
var DaffCartItemList = /** @class */ (function () {
    function DaffCartItemList() {
        this.type = DaffCartItemActionTypes.CartItemListAction;
    }
    return DaffCartItemList;
}());
export { DaffCartItemList };
if (false) {
    /** @type {?} */
    DaffCartItemList.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemListSuccess = /** @class */ (function () {
    function DaffCartItemListSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListSuccessAction;
    }
    return DaffCartItemListSuccess;
}());
/**
 * @template T
 */
export { DaffCartItemListSuccess };
if (false) {
    /** @type {?} */
    DaffCartItemListSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemListSuccess.prototype.payload;
}
var DaffCartItemListFailure = /** @class */ (function () {
    function DaffCartItemListFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListFailureAction;
    }
    return DaffCartItemListFailure;
}());
export { DaffCartItemListFailure };
if (false) {
    /** @type {?} */
    DaffCartItemListFailure.prototype.type;
    /** @type {?} */
    DaffCartItemListFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemLoad = /** @class */ (function () {
    function DaffCartItemLoad(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemLoadAction;
    }
    return DaffCartItemLoad;
}());
/**
 * @template T
 */
export { DaffCartItemLoad };
if (false) {
    /** @type {?} */
    DaffCartItemLoad.prototype.type;
    /** @type {?} */
    DaffCartItemLoad.prototype.itemId;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemLoadSuccess = /** @class */ (function () {
    function DaffCartItemLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadSuccessAction;
    }
    return DaffCartItemLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartItemLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.payload;
}
var DaffCartItemLoadFailure = /** @class */ (function () {
    function DaffCartItemLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadFailureAction;
    }
    return DaffCartItemLoadFailure;
}());
export { DaffCartItemLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemUpdate = /** @class */ (function () {
    function DaffCartItemUpdate(itemId, changes) {
        this.itemId = itemId;
        this.changes = changes;
        this.type = DaffCartItemActionTypes.CartItemUpdateAction;
    }
    return DaffCartItemUpdate;
}());
/**
 * @template T
 */
export { DaffCartItemUpdate };
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
var /**
 * @template T, V
 */
DaffCartItemUpdateSuccess = /** @class */ (function () {
    function DaffCartItemUpdateSuccess(payload, itemId) {
        this.payload = payload;
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;
    }
    return DaffCartItemUpdateSuccess;
}());
/**
 * @template T, V
 */
export { DaffCartItemUpdateSuccess };
if (false) {
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.payload;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.itemId;
}
var DaffCartItemUpdateFailure = /** @class */ (function () {
    function DaffCartItemUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemUpdateFailureAction;
    }
    return DaffCartItemUpdateFailure;
}());
export { DaffCartItemUpdateFailure };
if (false) {
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemAdd = /** @class */ (function () {
    function DaffCartItemAdd(input) {
        this.input = input;
        this.type = DaffCartItemActionTypes.CartItemAddAction;
    }
    return DaffCartItemAdd;
}());
/**
 * @template T
 */
export { DaffCartItemAdd };
if (false) {
    /** @type {?} */
    DaffCartItemAdd.prototype.type;
    /** @type {?} */
    DaffCartItemAdd.prototype.input;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemAddSuccess = /** @class */ (function () {
    function DaffCartItemAddSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddSuccessAction;
    }
    return DaffCartItemAddSuccess;
}());
/**
 * @template T
 */
export { DaffCartItemAddSuccess };
if (false) {
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.payload;
}
var DaffCartItemAddFailure = /** @class */ (function () {
    function DaffCartItemAddFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddFailureAction;
    }
    return DaffCartItemAddFailure;
}());
export { DaffCartItemAddFailure };
if (false) {
    /** @type {?} */
    DaffCartItemAddFailure.prototype.type;
    /** @type {?} */
    DaffCartItemAddFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemDelete = /** @class */ (function () {
    function DaffCartItemDelete(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemDeleteAction;
    }
    return DaffCartItemDelete;
}());
/**
 * @template T
 */
export { DaffCartItemDelete };
if (false) {
    /** @type {?} */
    DaffCartItemDelete.prototype.type;
    /** @type {?} */
    DaffCartItemDelete.prototype.itemId;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartItemDeleteSuccess = /** @class */ (function () {
    function DaffCartItemDeleteSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;
    }
    return DaffCartItemDeleteSuccess;
}());
/**
 * @template T
 */
export { DaffCartItemDeleteSuccess };
if (false) {
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.payload;
}
var DaffCartItemDeleteFailure = /** @class */ (function () {
    function DaffCartItemDeleteFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteFailureAction;
    }
    return DaffCartItemDeleteFailure;
}());
export { DaffCartItemDeleteFailure };
if (false) {
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.payload;
}
var DaffCartItemStateReset = /** @class */ (function () {
    function DaffCartItemStateReset() {
        this.type = DaffCartItemActionTypes.CartItemStateResetAction;
    }
    return DaffCartItemStateReset;
}());
export { DaffCartItemStateReset };
if (false) {
    /** @type {?} */
    DaffCartItemStateReset.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2FydC1pdGVtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBUUUsb0JBQXFCLG1DQUFtQztJQUN4RCwyQkFBNEIsMkNBQTJDO0lBQ3ZFLDJCQUE0QiwyQ0FBMkM7SUFDdkUsb0JBQXFCLGtDQUFrQztJQUN2RCwyQkFBNEIsMENBQTBDO0lBQ3RFLDJCQUE0QiwwQ0FBMEM7SUFDdEUsc0JBQXVCLG9DQUFvQztJQUMzRCw2QkFBOEIsNENBQTRDO0lBQzFFLDZCQUE4Qiw0Q0FBNEM7SUFDMUUsbUJBQW9CLGlDQUFpQztJQUNyRCwwQkFBMkIseUNBQXlDO0lBQ3BFLDBCQUEyQix5Q0FBeUM7SUFDcEUsc0JBQXVCLG9DQUFvQztJQUMzRCw2QkFBOEIsNENBQTRDO0lBQzFFLDZCQUE4Qiw0Q0FBNEM7SUFDMUUsMEJBQTJCLHlDQUF5Qzs7O0FBR3RFO0lBQUE7UUFDVyxTQUFJLEdBQUcsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7SUFDN0QsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxnQ0FBMkQ7Ozs7O0FBRzdEOzs7O0lBR0UsaUNBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUVoQyxDQUFDO0lBQ3JDLDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyx1Q0FBa0U7O0lBRXRELDBDQUFtQjs7QUFHakM7SUFHRSxpQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHlCQUF5QixDQUFDO0lBRXJCLENBQUM7SUFDaEQsOEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHVD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Q0FBMkI7Ozs7O0FBR3pDOzs7O0lBR0UsbUNBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO0lBRTNCLENBQUM7SUFDNUMsZ0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHlDQUFvRTs7SUFFeEQsNENBQTBCOztBQUd4QztJQUdFLG1DQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsdUJBQXVCLENBQUMsMkJBQTJCLENBQUM7SUFFdkIsQ0FBQztJQUNoRCxnQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMseUNBQW9FOztJQUV4RCw0Q0FBOEI7O0FBRzVDO0lBQUE7UUFDVSxTQUFJLEdBQUcsdUJBQXVCLENBQUMsd0JBQXdCLENBQUM7SUFDbEUsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxzQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0SXRlbUlucHV0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSB9IGZyb20gJy4uL21vZGVscy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMge1xuICBDYXJ0SXRlbUxpc3RBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW1zIExpc3QgQWN0aW9uJyxcbiAgQ2FydEl0ZW1MaXN0U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbXMgTGlzdCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRJdGVtTGlzdEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW1zIExpc3QgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0SXRlbUxvYWRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gTG9hZCBBY3Rpb24nLFxuICBDYXJ0SXRlbUxvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0SXRlbUxvYWRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0SXRlbVVwZGF0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBVcGRhdGUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1VcGRhdGVTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIFVwZGF0ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRJdGVtVXBkYXRlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBVcGRhdGUgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0SXRlbUFkZEFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBBZGQgQWN0aW9uJyxcbiAgQ2FydEl0ZW1BZGRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIEFkZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRJdGVtQWRkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBBZGQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0SXRlbURlbGV0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBSZW1vdmUgQWN0aW9uJyxcbiAgQ2FydEl0ZW1EZWxldGVTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBJdGVtIFJlbW92ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRJdGVtRGVsZXRlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgSXRlbSBSZW1vdmUgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0SXRlbVN0YXRlUmVzZXRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEl0ZW0gU3RhdGUgUmVzZXQgQWN0aW9uJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxpc3RBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1MaXN0U3VjY2VzczxUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0U3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVFtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtTGlzdEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0RmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1Mb2FkPFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW1JZDogVFsnaXRlbV9pZCddKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW0+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1Mb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbVVwZGF0ZTxUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1VcGRhdGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW1JZDogVFsnaXRlbV9pZCddLCBwdWJsaWMgY2hhbmdlczogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbVVwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsIFYgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVVwZGF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4sIHB1YmxpYyBpdGVtSWQ6IFZbJ2l0ZW1faWQnXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbVVwZGF0ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1VcGRhdGVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUFkZDxUIGV4dGVuZHMgRGFmZkNhcnRJdGVtSW5wdXQgPSBEYWZmQ2FydEl0ZW1JbnB1dD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1BZGRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlucHV0OiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtQWRkU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1BZGRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPFQ+KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtQWRkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUFkZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRJdGVtRGVsZXRlPFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbURlbGV0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbUlkOiBUWydpdGVtX2lkJ10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1EZWxldGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbURlbGV0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1EZWxldGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtRGVsZXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1TdGF0ZVJlc2V0IGltcGxlbWVudHMgQWN0aW9uIHtcblx0cmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtU3RhdGVSZXNldEFjdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRJdGVtQWN0aW9uczxcbiAgVCBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW0sXG4gIFUgZXh0ZW5kcyBEYWZmQ2FydEl0ZW1JbnB1dCA9IERhZmZDYXJ0SXRlbUlucHV0LFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiA9XG4gIHwgRGFmZkNhcnRJdGVtTGlzdFxuICB8IERhZmZDYXJ0SXRlbUxpc3RTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRJdGVtTGlzdEZhaWx1cmVcbiAgfCBEYWZmQ2FydEl0ZW1Mb2FkPFQ+XG4gIHwgRGFmZkNhcnRJdGVtTG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydEl0ZW1Mb2FkRmFpbHVyZVxuICB8IERhZmZDYXJ0SXRlbVVwZGF0ZTxUPlxuICB8IERhZmZDYXJ0SXRlbVVwZGF0ZVN1Y2Nlc3M8ViwgVD5cbiAgfCBEYWZmQ2FydEl0ZW1VcGRhdGVGYWlsdXJlXG4gIHwgRGFmZkNhcnRJdGVtQWRkPFU+XG4gIHwgRGFmZkNhcnRJdGVtQWRkU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0SXRlbUFkZEZhaWx1cmVcbiAgfCBEYWZmQ2FydEl0ZW1EZWxldGU8VD5cbiAgfCBEYWZmQ2FydEl0ZW1EZWxldGVTdWNjZXNzPFY+XG4gIHwgRGFmZkNhcnRJdGVtRGVsZXRlRmFpbHVyZVxuICB8IERhZmZDYXJ0SXRlbVN0YXRlUmVzZXQ7XG4iXX0=
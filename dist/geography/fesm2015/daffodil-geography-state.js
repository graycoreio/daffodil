import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Inject, NgModule } from '@angular/core';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DaffGeographyDriver } from '@daffodil/geography/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffGeographyInitialState = {
    loading: false,
    errors: [],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffGeographyActionTypes = {
    CountryLoadAction: '[DaffGeography] Country Load Action',
    CountryLoadSuccessAction: '[DaffGeography] Country Load Success Action',
    CountryLoadFailureAction: '[DaffGeography] Country Load Failure Action',
    CountryListAction: '[DaffGeography] Country List Action',
    CountryListSuccessAction: '[DaffGeography] Country List Success Action',
    CountryListFailureAction: '[DaffGeography] Country List Failure Action',
};
/**
 * @template T
 */
class DaffCountryLoad {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryLoad.prototype.type;
    /** @type {?} */
    DaffCountryLoad.prototype.payload;
}
/**
 * @template T
 */
class DaffCountryLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCountryLoadSuccess.prototype.payload;
}
class DaffCountryLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryLoadFailure.prototype.type;
    /** @type {?} */
    DaffCountryLoadFailure.prototype.payload;
}
class DaffCountryList {
    constructor() {
        this.type = DaffGeographyActionTypes.CountryListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryList.prototype.type;
}
/**
 * @template T
 */
class DaffCountryListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryListSuccess.prototype.type;
    /** @type {?} */
    DaffCountryListSuccess.prototype.payload;
}
class DaffCountryListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryListFailure.prototype.type;
    /** @type {?} */
    DaffCountryListFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffGeographyReducer(state = daffGeographyInitialState, action) {
    switch (action.type) {
        case DaffGeographyActionTypes.CountryLoadAction:
        case DaffGeographyActionTypes.CountryListAction:
            return Object.assign({}, state, { loading: true });
        case DaffGeographyActionTypes.CountryLoadSuccessAction:
        case DaffGeographyActionTypes.CountryListSuccessAction:
            return Object.assign({}, state, { errors: [], loading: false });
        case DaffGeographyActionTypes.CountryLoadFailureAction:
        case DaffGeographyActionTypes.CountryListFailureAction:
            return Object.assign({}, state, { errors: [
                    ...state.errors,
                    action.payload
                ], loading: false });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createEntityAdapter());
};
/**
 * Country Adapter for changing/overwriting entity state.
 * @type {?}
 */
const getCountryAdapter = ((ɵ0))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial state for country entity state.
 * @type {?}
 */
const daffCountryEntitiesInitialState = getCountryAdapter().getInitialState();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffCountryEntitiesReducer(state = daffCountryEntitiesInitialState, action) {
    /** @type {?} */
    const adapter = getCountryAdapter();
    switch (action.type) {
        case DaffGeographyActionTypes.CountryLoadSuccessAction:
            return adapter.upsertOne(Object.assign({}, action.payload, { loaded: true }), state);
        case DaffGeographyActionTypes.CountryListSuccessAction:
            return adapter.upsertMany(action.payload.map((/**
             * @param {?} country
             * @return {?}
             */
            country => (Object.assign({}, country, { loaded: (state.entities[country.id] && state.entities[country.id].loaded) || false, subdivisions: country.subdivisions.length === 0 && state.entities[country.id] && state.entities[country.id].subdivisions.length > 0
                    ? state.entities[country.id].subdivisions
                    : country.subdivisions })))), state);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffGeographyReducers = {
    geography: daffGeographyReducer,
    countries: daffCountryEntitiesReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAFF_GEOGRAPHY_STORE_FEATURE_KEY = 'daffGeography';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffGeographyFeatureSelector() { }
if (false) {
    /** @type {?} */
    DaffGeographyFeatureSelector.prototype.selectGeographyFeatureState;
}
const ɵ0$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || {
        selectGeographyFeatureState: createFeatureSelector(DAFF_GEOGRAPHY_STORE_FEATURE_KEY)
    });
};
/** @type {?} */
const getDaffGeographyFeatureStateSelector = ((ɵ0$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffCountryEntitySelectors() { }
if (false) {
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryEntitiesState;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryIds;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryEntities;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectAllCountries;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryTotal;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountry;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountrySubdivisions;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectIsCountryFullyLoaded;
}
/** @type {?} */
const createCountryEntitySelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector();
    /** @type {?} */
    const selectCountryEntitiesState = createSelector(selectGeographyFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.countries));
    const { selectIds, selectEntities, selectAll, selectTotal } = getCountryAdapter().getSelectors(selectCountryEntitiesState);
    /** @type {?} */
    const selectCountry = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    (countries, props) => countries[props.id]));
    /** @type {?} */
    const selectCountrySubdivisions = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    (countries, props) => {
        /** @type {?} */
        const country = selectCountry.projector(countries, { id: props.id });
        return country ? country.subdivisions : [];
    }));
    /** @type {?} */
    const selectIsCountryFullyLoaded = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    (countries, props) => {
        /** @type {?} */
        const country = selectCountry.projector(countries, { id: props.id });
        return country && country.loaded;
    }));
    return {
        selectCountryEntitiesState,
        /**
         * Selector for country IDs.
         */
        selectCountryIds: selectIds,
        /**
         * Selector for country entities.
         */
        selectCountryEntities: selectEntities,
        /**
         * Selector for all countries.
         */
        selectAllCountries: selectAll,
        /**
         * Selector for total number of countries.
         */
        selectCountryTotal: selectTotal,
        /**
         * Selector for a specific country.
         */
        selectCountry,
        /**
         * Selector for a specific country's subdivisions.
         */
        selectCountrySubdivisions,
        /**
         * Selector for checking if a country has been fully loaded.
         * If true, then a country's subdivisions will be populated if any exist.
         */
        selectIsCountryFullyLoaded
    };
});
const ɵ0$2 = createCountryEntitySelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createCountryEntitySelectors());
};
/** @type {?} */
const getDaffCountryEntitySelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffGeographySelectors() { }
if (false) {
    /** @type {?} */
    DaffGeographySelectors.prototype.selectGeographyState;
    /** @type {?} */
    DaffGeographySelectors.prototype.selectGeographyLoading;
    /** @type {?} */
    DaffGeographySelectors.prototype.selectGeographyErrors;
}
/** @type {?} */
const createGeographySelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector();
    /** @type {?} */
    const selectGeographyState = createSelector(selectGeographyFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.geography));
    /** @type {?} */
    const selectGeographyLoading = createSelector(selectGeographyState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectGeographyErrors = createSelector(selectGeographyState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectGeographyState,
        selectGeographyLoading,
        selectGeographyErrors
    };
});
const ɵ0$3 = createGeographySelectors;
const ɵ1$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createGeographySelectors());
};
/** @type {?} */
const getGeographySelectors = ((ɵ1$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffGeographyAllSelectors() { }
const ɵ0$4 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || Object.assign({}, getGeographySelectors(), getDaffCountryEntitySelectors(), getDaffGeographyFeatureStateSelector()));
};
/** @type {?} */
const getDaffGeographySelectors = ((ɵ0$4))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffGeographyFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectCountryIds, selectCountryEntities, selectAllCountries, selectCountryTotal, selectGeographyLoading, selectGeographyErrors, selectCountry, selectCountrySubdivisions, selectIsCountryFullyLoaded } = getDaffGeographySelectors();
        this._selectCountry = selectCountry;
        this._selectCountrySubdivisions = selectCountrySubdivisions;
        this._selectIsCountryFullyLoaded = selectIsCountryFullyLoaded;
        this.loading$ = this.store.pipe(select(selectGeographyLoading));
        this.errors$ = this.store.pipe(select(selectGeographyErrors));
        this.countries$ = this.store.pipe(select(selectAllCountries));
        this.countryIds$ = this.store.pipe(select(selectCountryIds));
        this.countryCount$ = this.store.pipe(select(selectCountryTotal));
        this.countryEntities$ = this.store.pipe(select(selectCountryEntities));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getCountry(id) {
        return this.store.pipe(select(this._selectCountry, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getCountrySubdivisions(id) {
        return this.store.pipe(select(this._selectCountrySubdivisions, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isCountryFullyLoaded(id) {
        return this.store.pipe(select(this._selectIsCountryFullyLoaded, { id }));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffGeographyFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffGeographyFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffGeographyFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffGeographyFacade_Factory() { return new DaffGeographyFacade(ɵɵinject(Store)); }, token: DaffGeographyFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffGeographyFacade.prototype.loading$;
    /** @type {?} */
    DaffGeographyFacade.prototype.errors$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countries$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countryIds$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countryCount$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countryEntities$;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype._selectCountry;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype._selectCountrySubdivisions;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype._selectIsCountryFullyLoaded;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype.store;
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @template T
 */
class DaffGeographyEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.get$ = this.actions$.pipe(ofType(DaffGeographyActionTypes.CountryLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCountryLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCountryLoadFailure('Failed to load country'))))))));
        this.list$ = this.actions$.pipe(ofType(DaffGeographyActionTypes.CountryListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCountryListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCountryListFailure('Failed to list the countries'))))))));
    }
}
DaffGeographyEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffGeographyEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffGeographyDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffGeographyEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffGeographyEffects.prototype, "list$", void 0);
if (false) {
    /** @type {?} */
    DaffGeographyEffects.prototype.get$;
    /** @type {?} */
    DaffGeographyEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffGeographyStateModule {
}
DaffGeographyStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_GEOGRAPHY_STORE_FEATURE_KEY, daffGeographyReducers),
                    EffectsModule.forFeature([
                        DaffGeographyEffects,
                    ]),
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DAFF_GEOGRAPHY_STORE_FEATURE_KEY, DaffCountryList, DaffCountryListFailure, DaffCountryListSuccess, DaffCountryLoad, DaffCountryLoadFailure, DaffCountryLoadSuccess, DaffGeographyActionTypes, DaffGeographyFacade, DaffGeographyStateModule, daffCountryEntitiesInitialState, daffCountryEntitiesReducer, daffGeographyInitialState, daffGeographyReducer, daffGeographyReducers, getCountryAdapter, getDaffGeographySelectors, DaffGeographyEffects as ɵa };
//# sourceMappingURL=daffodil-geography-state.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@ngrx/entity'), require('@angular/core'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs'), require('@daffodil/geography/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/state', ['exports', '@ngrx/store', '@ngrx/entity', '@angular/core', '@ngrx/effects', 'rxjs/operators', 'rxjs', '@daffodil/geography/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.state = {}), global.store, global.entity, global.ng.core, global.effects, global.rxjs.operators, global.rxjs, global.daffodil.geography.driver));
}(this, function (exports, store, entity, core, effects, operators, rxjs, driver) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffGeographyInitialState = {
        loading: false,
        errors: [],
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffGeographyActionTypes = {
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
    var   /**
     * @template T
     */
    DaffCountryLoad = /** @class */ (function () {
        function DaffCountryLoad(payload) {
            this.payload = payload;
            this.type = DaffGeographyActionTypes.CountryLoadAction;
        }
        return DaffCountryLoad;
    }());
    if (false) {
        /** @type {?} */
        DaffCountryLoad.prototype.type;
        /** @type {?} */
        DaffCountryLoad.prototype.payload;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffCountryLoadSuccess = /** @class */ (function () {
        function DaffCountryLoadSuccess(payload) {
            this.payload = payload;
            this.type = DaffGeographyActionTypes.CountryLoadSuccessAction;
        }
        return DaffCountryLoadSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffCountryLoadSuccess.prototype.type;
        /** @type {?} */
        DaffCountryLoadSuccess.prototype.payload;
    }
    var DaffCountryLoadFailure = /** @class */ (function () {
        function DaffCountryLoadFailure(payload) {
            this.payload = payload;
            this.type = DaffGeographyActionTypes.CountryLoadFailureAction;
        }
        return DaffCountryLoadFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffCountryLoadFailure.prototype.type;
        /** @type {?} */
        DaffCountryLoadFailure.prototype.payload;
    }
    var DaffCountryList = /** @class */ (function () {
        function DaffCountryList() {
            this.type = DaffGeographyActionTypes.CountryListAction;
        }
        return DaffCountryList;
    }());
    if (false) {
        /** @type {?} */
        DaffCountryList.prototype.type;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffCountryListSuccess = /** @class */ (function () {
        function DaffCountryListSuccess(payload) {
            this.payload = payload;
            this.type = DaffGeographyActionTypes.CountryListSuccessAction;
        }
        return DaffCountryListSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffCountryListSuccess.prototype.type;
        /** @type {?} */
        DaffCountryListSuccess.prototype.payload;
    }
    var DaffCountryListFailure = /** @class */ (function () {
        function DaffCountryListFailure(payload) {
            this.payload = payload;
            this.type = DaffGeographyActionTypes.CountryListFailureAction;
        }
        return DaffCountryListFailure;
    }());
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

    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    /**
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffGeographyReducer(state, action) {
        if (state === void 0) { state = daffGeographyInitialState; }
        switch (action.type) {
            case DaffGeographyActionTypes.CountryLoadAction:
            case DaffGeographyActionTypes.CountryListAction:
                return __assign({}, state, { loading: true });
            case DaffGeographyActionTypes.CountryLoadSuccessAction:
            case DaffGeographyActionTypes.CountryListSuccessAction:
                return __assign({}, state, { errors: [], loading: false });
            case DaffGeographyActionTypes.CountryLoadFailureAction:
            case DaffGeographyActionTypes.CountryListFailureAction:
                return __assign({}, state, { errors: __spread(state.errors, [
                        action.payload
                    ]), loading: false });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () {
            return cache = cache || entity.createEntityAdapter();
        });
    };
    /**
     * Country Adapter for changing/overwriting entity state.
     * @type {?}
     */
    var getCountryAdapter = ((ɵ0))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Initial state for country entity state.
     * @type {?}
     */
    var daffCountryEntitiesInitialState = getCountryAdapter().getInitialState();

    var __assign$1 = (this && this.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    /**
     * Reducer function that catches actions and changes/overwrites country entities state.
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffCountryEntitiesReducer(state, action) {
        if (state === void 0) { state = daffCountryEntitiesInitialState; }
        /** @type {?} */
        var adapter = getCountryAdapter();
        switch (action.type) {
            case DaffGeographyActionTypes.CountryLoadSuccessAction:
                return adapter.upsertOne(__assign$1({}, action.payload, { loaded: true }), state);
            case DaffGeographyActionTypes.CountryListSuccessAction:
                return adapter.upsertMany(action.payload.map((/**
                 * @param {?} country
                 * @return {?}
                 */
                function (country) { return (__assign$1({}, country, { loaded: (state.entities[country.id] && state.entities[country.id].loaded) || false, subdivisions: country.subdivisions.length === 0 && state.entities[country.id] && state.entities[country.id].subdivisions.length > 0
                        ? state.entities[country.id].subdivisions
                        : country.subdivisions })); })), state);
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffGeographyReducers = {
        geography: daffGeographyReducer,
        countries: daffCountryEntitiesReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAFF_GEOGRAPHY_STORE_FEATURE_KEY = 'daffGeography';

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
    var ɵ0$1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () {
            return cache = cache || {
                selectGeographyFeatureState: store.createFeatureSelector(DAFF_GEOGRAPHY_STORE_FEATURE_KEY)
            };
        });
    };
    /** @type {?} */
    var getDaffGeographyFeatureStateSelector = ((ɵ0$1))();

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
    var createCountryEntitySelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectGeographyFeatureState = getDaffGeographyFeatureStateSelector().selectGeographyFeatureState;
        /** @type {?} */
        var selectCountryEntitiesState = store.createSelector(selectGeographyFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.countries; }));
        var _a = getCountryAdapter().getSelectors(selectCountryEntitiesState), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
        /** @type {?} */
        var selectCountry = store.createSelector(selectEntities, (/**
         * @param {?} countries
         * @param {?} props
         * @return {?}
         */
        function (countries, props) { return countries[props.id]; }));
        /** @type {?} */
        var selectCountrySubdivisions = store.createSelector(selectEntities, (/**
         * @param {?} countries
         * @param {?} props
         * @return {?}
         */
        function (countries, props) {
            /** @type {?} */
            var country = selectCountry.projector(countries, { id: props.id });
            return country ? country.subdivisions : [];
        }));
        /** @type {?} */
        var selectIsCountryFullyLoaded = store.createSelector(selectEntities, (/**
         * @param {?} countries
         * @param {?} props
         * @return {?}
         */
        function (countries, props) {
            /** @type {?} */
            var country = selectCountry.projector(countries, { id: props.id });
            return country && country.loaded;
        }));
        return {
            selectCountryEntitiesState: selectCountryEntitiesState,
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
            selectCountry: selectCountry,
            /**
             * Selector for a specific country's subdivisions.
             */
            selectCountrySubdivisions: selectCountrySubdivisions,
            /**
             * Selector for checking if a country has been fully loaded.
             * If true, then a country's subdivisions will be populated if any exist.
             */
            selectIsCountryFullyLoaded: selectIsCountryFullyLoaded
        };
    });
    var ɵ0$2 = createCountryEntitySelectors;
    var ɵ1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () {
            return cache = cache || createCountryEntitySelectors();
        });
    };
    /** @type {?} */
    var getDaffCountryEntitySelectors = ((ɵ1))();

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
    var createGeographySelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectGeographyFeatureState = getDaffGeographyFeatureStateSelector().selectGeographyFeatureState;
        /** @type {?} */
        var selectGeographyState = store.createSelector(selectGeographyFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.geography; }));
        /** @type {?} */
        var selectGeographyLoading = store.createSelector(selectGeographyState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /** @type {?} */
        var selectGeographyErrors = store.createSelector(selectGeographyState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.errors; }));
        return {
            selectGeographyState: selectGeographyState,
            selectGeographyLoading: selectGeographyLoading,
            selectGeographyErrors: selectGeographyErrors
        };
    });
    var ɵ0$3 = createGeographySelectors;
    var ɵ1$1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () {
            return cache = cache || createGeographySelectors();
        });
    };
    /** @type {?} */
    var getGeographySelectors = ((ɵ1$1))();

    var __assign$2 = (this && this.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    /**
     * @record
     * @template T
     */
    function DaffGeographyAllSelectors() { }
    var ɵ0$4 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () {
            return cache = cache || __assign$2({}, getGeographySelectors(), getDaffCountryEntitySelectors(), getDaffGeographyFeatureStateSelector());
        });
    };
    /** @type {?} */
    var getDaffGeographySelectors = ((ɵ0$4))();

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
    var DaffGeographyFacade = /** @class */ (function () {
        function DaffGeographyFacade(store$1) {
            this.store = store$1;
            var _a = getDaffGeographySelectors(), selectCountryIds = _a.selectCountryIds, selectCountryEntities = _a.selectCountryEntities, selectAllCountries = _a.selectAllCountries, selectCountryTotal = _a.selectCountryTotal, selectGeographyLoading = _a.selectGeographyLoading, selectGeographyErrors = _a.selectGeographyErrors, selectCountry = _a.selectCountry, selectCountrySubdivisions = _a.selectCountrySubdivisions, selectIsCountryFullyLoaded = _a.selectIsCountryFullyLoaded;
            this._selectCountry = selectCountry;
            this._selectCountrySubdivisions = selectCountrySubdivisions;
            this._selectIsCountryFullyLoaded = selectIsCountryFullyLoaded;
            this.loading$ = this.store.pipe(store.select(selectGeographyLoading));
            this.errors$ = this.store.pipe(store.select(selectGeographyErrors));
            this.countries$ = this.store.pipe(store.select(selectAllCountries));
            this.countryIds$ = this.store.pipe(store.select(selectCountryIds));
            this.countryCount$ = this.store.pipe(store.select(selectCountryTotal));
            this.countryEntities$ = this.store.pipe(store.select(selectCountryEntities));
        }
        /**
         * @param {?} id
         * @return {?}
         */
        DaffGeographyFacade.prototype.getCountry = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this._selectCountry, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffGeographyFacade.prototype.getCountrySubdivisions = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this._selectCountrySubdivisions, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffGeographyFacade.prototype.isCountryFullyLoaded = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this._selectIsCountryFullyLoaded, { id: id }));
        };
        /**
         * @param {?} action
         * @return {?}
         */
        DaffGeographyFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffGeographyFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffGeographyFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffGeographyFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffGeographyFacade_Factory() { return new DaffGeographyFacade(core.ɵɵinject(store.Store)); }, token: DaffGeographyFacade, providedIn: "root" });
        return DaffGeographyFacade;
    }());
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
    var DaffGeographyEffects = /** @class */ (function () {
        function DaffGeographyEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.get$ = this.actions$.pipe(effects.ofType(DaffGeographyActionTypes.CountryLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return _this.driver.get(action.payload).pipe(operators.map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCountryLoadSuccess(resp); })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(new DaffCountryLoadFailure('Failed to load country')); }))); })));
            this.list$ = this.actions$.pipe(effects.ofType(DaffGeographyActionTypes.CountryListAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return _this.driver.list().pipe(operators.map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCountryListSuccess(resp); })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(new DaffCountryListFailure('Failed to list the countries')); }))); })));
        }
        DaffGeographyEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffGeographyEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [driver.DaffGeographyDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DaffGeographyEffects.prototype, "get$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DaffGeographyEffects.prototype, "list$", void 0);
        return DaffGeographyEffects;
    }());
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
    var DaffGeographyStateModule = /** @class */ (function () {
        function DaffGeographyStateModule() {
        }
        DaffGeographyStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature(DAFF_GEOGRAPHY_STORE_FEATURE_KEY, daffGeographyReducers),
                            effects.EffectsModule.forFeature([
                                DaffGeographyEffects,
                            ]),
                        ]
                    },] }
        ];
        return DaffGeographyStateModule;
    }());

    exports.DAFF_GEOGRAPHY_STORE_FEATURE_KEY = DAFF_GEOGRAPHY_STORE_FEATURE_KEY;
    exports.DaffCountryList = DaffCountryList;
    exports.DaffCountryListFailure = DaffCountryListFailure;
    exports.DaffCountryListSuccess = DaffCountryListSuccess;
    exports.DaffCountryLoad = DaffCountryLoad;
    exports.DaffCountryLoadFailure = DaffCountryLoadFailure;
    exports.DaffCountryLoadSuccess = DaffCountryLoadSuccess;
    exports.DaffGeographyActionTypes = DaffGeographyActionTypes;
    exports.DaffGeographyFacade = DaffGeographyFacade;
    exports.DaffGeographyStateModule = DaffGeographyStateModule;
    exports.daffCountryEntitiesInitialState = daffCountryEntitiesInitialState;
    exports.daffCountryEntitiesReducer = daffCountryEntitiesReducer;
    exports.daffGeographyInitialState = daffGeographyInitialState;
    exports.daffGeographyReducer = daffGeographyReducer;
    exports.daffGeographyReducers = daffGeographyReducers;
    exports.getCountryAdapter = getCountryAdapter;
    exports.getDaffGeographySelectors = getDaffGeographySelectors;
    exports.ɵa = DaffGeographyEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-state.umd.js.map

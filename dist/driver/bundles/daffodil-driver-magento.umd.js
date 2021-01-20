(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('@daffodil/driver/magento', ['exports'], factory) :
	(global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.driver = global.daffodil.driver || {}, global.daffodil.driver.magento = {})));
}(this, function (exports) { 'use strict';

	var __schema = {
		types: [
			{
				kind: "INTERFACE",
				name: "CartAddressInterface",
				possibleTypes: [
					{
						name: "BillingCartAddress"
					},
					{
						name: "ShippingCartAddress"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "CartItemInterface",
				possibleTypes: [
					{
						name: "SimpleCartItem"
					},
					{
						name: "VirtualCartItem"
					},
					{
						name: "DownloadableCartItem"
					},
					{
						name: "BundleCartItem"
					},
					{
						name: "ConfigurableCartItem"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "ProductInterface",
				possibleTypes: [
					{
						name: "VirtualProduct"
					},
					{
						name: "SimpleProduct"
					},
					{
						name: "DownloadableProduct"
					},
					{
						name: "BundleProduct"
					},
					{
						name: "GroupedProduct"
					},
					{
						name: "ConfigurableProduct"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "CategoryInterface",
				possibleTypes: [
					{
						name: "CategoryTree"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "MediaGalleryInterface",
				possibleTypes: [
					{
						name: "ProductImage"
					},
					{
						name: "ProductVideo"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "ProductLinksInterface",
				possibleTypes: [
					{
						name: "ProductLinks"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "AggregationOptionInterface",
				possibleTypes: [
					{
						name: "AggregationOption"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "LayerFilterItemInterface",
				possibleTypes: [
					{
						name: "LayerFilterItem"
					},
					{
						name: "SwatchLayerFilterItem"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "PhysicalProductInterface",
				possibleTypes: [
					{
						name: "SimpleProduct"
					},
					{
						name: "BundleProduct"
					},
					{
						name: "GroupedProduct"
					},
					{
						name: "ConfigurableProduct"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "CustomizableOptionInterface",
				possibleTypes: [
					{
						name: "CustomizableAreaOption"
					},
					{
						name: "CustomizableDateOption"
					},
					{
						name: "CustomizableDropDownOption"
					},
					{
						name: "CustomizableMultipleOption"
					},
					{
						name: "CustomizableFieldOption"
					},
					{
						name: "CustomizableFileOption"
					},
					{
						name: "CustomizableRadioOption"
					},
					{
						name: "CustomizableCheckboxOption"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "CustomizableProductInterface",
				possibleTypes: [
					{
						name: "VirtualProduct"
					},
					{
						name: "SimpleProduct"
					},
					{
						name: "DownloadableProduct"
					},
					{
						name: "BundleProduct"
					},
					{
						name: "ConfigurableProduct"
					}
				]
			},
			{
				kind: "INTERFACE",
				name: "SwatchLayerFilterItemInterface",
				possibleTypes: [
					{
						name: "SwatchLayerFilterItem"
					}
				]
			}
		]
	};
	var introspectionQueryResultData = {
		__schema: __schema
	};

	var schema = introspectionQueryResultData;

	function transformGraphQlError(error, map) {
	    if (!error.graphQLErrors.length)
	        return error;
	    var lookup = map[error.graphQLErrors[0].extensions.category];
	    return lookup ? new lookup(error.message) : error;
	}
	;
	/**
	 * Transforms the passed error according to the lookup in the passed map.
	 */
	function daffTransformMagentoError(error, map) {
	    // TODO: handle network errors
	    if (error.graphQLErrors) {
	        return transformGraphQlError(error, map);
	    }
	    else {
	        return error;
	    }
	}
	;

	exports.daffTransformMagentoError = daffTransformMagentoError;
	exports.schema = schema;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-driver-magento.umd.js.map

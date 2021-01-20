"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var architect_1 = require("@angular-devkit/architect");
var cli_1 = require("@graphql-codegen/cli");
var success = function () { return ({ success: true }); };
var failure = function (error) { return ({
    success: false,
    error: error
}); };
var noopPromise = Promise.resolve(success());
exports.default = architect_1.createBuilder(generateFragmentTypesBuilder);
function generateFragmentTypesBuilder(options, context) {
    var _a;
    return options.url && options.path ? cli_1.generate({
        schema: options.url,
        generates: (_a = {},
            _a[options.path] = {
                plugins: ['fragment-matcher']
            },
            _a)
    }).then(success, failure) : noopPromise;
}
//# sourceMappingURL=index.js.map
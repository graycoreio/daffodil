# Dgeni Templates

This folder contains the templates utilized by dgeni to generate documentation. Templates are utilized by members of the Documents[] based on the rules defined in the Dgeni config (often this is `docType.template.html` or a similar naming convention).

## Doc Properties

It is useful to know what properties are available on each doc type when working with the templates. The typescript Dgeni package is now written in TypeScript and there is a class for each of the types of API document. See https://github.com/angular/dgeni-packages/tree/master/typescript/src/api-doc-types. This is a good place to go to see what properties you can use in the templates.
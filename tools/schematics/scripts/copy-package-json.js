const { readFileSync, writeFileSync } = require('fs');

const pkg = JSON.parse(readFileSync(`${__dirname}/../package.json`, 'utf-8'));
delete pkg.devDependencies;
delete pkg.nx;
delete pkg.scripts;
writeFileSync(`${__dirname}/../../../dist/commerce/package.json`, JSON.stringify(pkg, null, 2) + '\n');

import * as path from 'path';
import { Package } from "dgeni";

const jsdocPackage = require('dgeni-packages/jsdoc');
const nunjucksPackage = require('dgeni-packages/nunjucks');
const typescriptPackage = require('dgeni-packages/typescript');

export let checkoutDocs =  new Package('checkout', [
  jsdocPackage,
  nunjucksPackage,
  typescriptPackage
]);

// This processor is here temporarily to help get a better look at the docs objects (which are typed as "any") while we organize documentation.
// checkoutDocs.processor(new HelpfulLogger());

// Configure our dgeni-example package. We can ask the Dgeni dependency injector
// to provide us with access to services and processors that we wish to configure
checkoutDocs.config(function(readFilesProcessor, log, writeFilesProcessor, templateFinder, readTypeScriptModules, templateEngine) {

  // Set logging level
  log.level = 'info';

  // The typescriptPackage only uses the "readTypeScriptModules" processor, so disable readFilesProcessor.
  readFilesProcessor.$enabled = false;

  // Specify the base path used when resolving relative paths to source and output files
  readTypeScriptModules.basePath = path.resolve(__dirname, '../..');

  // Specify collections of source files that should contain the documentation to extract
  readTypeScriptModules.sourceFiles = [
    {
      include: 'src/**/*.ts',
      exclude: 'src/**/*.spec.ts',
      basePath: 'src'
    }
  ];

  // Nunjucks and Angular conflict in their template bindings so change Nunjucks
  templateEngine.config.tags = {
    variableStart: '{$',
    variableEnd: '$}',
  };

  // Add a folder to search for our own templates to use when rendering docs
  templateFinder.templateFolders.unshift(path.resolve('./docs/templates'));

  // Specify how to match docs to templates.
  templateFinder.templatePatterns = ['common.template.html'];

  // Specify where the writeFilesProcessor will write our generated doc files
  writeFilesProcessor.outputFolder  = path.resolve('./docs/build');
});

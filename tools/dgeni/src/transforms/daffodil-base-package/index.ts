/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Package } from 'dgeni';
import * as path from 'path';

const basePackage = require('dgeni-packages/base');
const nunjucksPackage = require('dgeni-packages/nunjucks');

import { PROJECT_ROOT, DOCS_OUTPUT_PATH, TEMPLATES_PATH } from '../config';
import { ConvertToJsonProcessor } from '../../processors/convertToJson';

export const daffodilBasePackage = new Package('daffodil-base', [
	basePackage,
	nunjucksPackage,
])
	.processor('convertToJson', function(log, createDocMessage) {
		return new ConvertToJsonProcessor(log, createDocMessage);
	})
	.factory('packageInfo', function() {
		return require(path.resolve(PROJECT_ROOT, 'package.json'));
	})

	// Where do we get the source files?
	.config(function(readFilesProcessor) {
		readFilesProcessor.basePath = PROJECT_ROOT;
		readFilesProcessor.fileReaders = [];
		readFilesProcessor.sourceFiles = [];
	})

	// Where do we write the output files?
	.config(function(writeFilesProcessor) {
		writeFilesProcessor.outputFolder = DOCS_OUTPUT_PATH;
	})

	// Configure nunjucks rendering of docs via templates
	.config(function(renderDocsProcessor, templateFinder, templateEngine) {
		// Where to find the templates for the doc rendering
		templateFinder.templateFolders = [TEMPLATES_PATH];

		// Standard patterns for matching docs to templates
		templateFinder.templatePatterns = [
			'${ doc.template }',
			'${ doc.id }.${ doc.docType }.template.html',
			'${ doc.id }.template.html',
			'${ doc.docType }.template.html',
			'${ doc.id }.${ doc.docType }.template.js',
			'${ doc.id }.template.js',
			'${ doc.docType }.template.js',
			'${ doc.id }.${ doc.docType }.template.json',
			'${ doc.id }.template.json',
			'${ doc.docType }.template.json',
			'common.template.html',
		];

		// Nunjucks and Angular conflict in their template bindings so change Nunjucks
		templateEngine.config.tags = { variableStart: '{$', variableEnd: '$}' };

		// helpers are made available to the nunjucks templates
		renderDocsProcessor.helpers.relativePath = function(from, to) {
			return path.relative(from, to);
		};
	});

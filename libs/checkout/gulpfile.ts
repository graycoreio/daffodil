import { Dgeni } from "dgeni";
import { checkoutDocs } from './docs/config/index';
import * as gulp from 'gulp';
import * as flatten from 'gulp-flatten';
import * as clean from 'gulp-clean';

// generate documentation.
function generateDocs() {
  const dgeni = new Dgeni([checkoutDocs]);
  return dgeni.generate();
}

// Run the generateDocs, flattenDocs, and cleanUp tasks to build the docs folder.

exports.generateDocs = generateDocs;
// generate documentation.
// function generateDocs() {
//   const dgeni = new Dgeni([checkoutDocs]);
//   return dgeni.generate();
// }

// // flatten generated docs into a single directory.
// function flattenDocs() {
//   return gulp.src('../../dist/checkout/build/**/*.html')
//     .pipe(flatten({ includeParents: -1 }))
//     .pipe(gulp.dest('../../dist/checkout/build/docs'));
// }

// // clean up unflattened docs, and remove docs that aren't needed.
// function cleanUp() {
//   return gulp.src([
//     '../../dist/checkout/build/partials',
//     '../../dist/checkout/build/docs/**/reducer*',
//     '../../dist/checkout/build/docs/**/*.reducer',
//     '../../dist/checkout/build/docs/**/src',
//     '../../dist/checkout/build/docs/**/*.effects',
//     '../../dist/checkout/build/docs/**/*.module',
//     '../../dist/checkout/build/docs/**/*.component',
//     '../../dist/checkout/build/docs/**/*.actions',
//     '../../dist/checkout/build/docs/**/*Actions',
//     '../../dist/checkout/build/docs/**/*Module',
//   ], {read: false, allowEmpty: true})
//     .pipe(clean({force: true}));
// }
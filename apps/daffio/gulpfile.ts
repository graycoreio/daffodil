import * as gulp from 'gulp';
import * as path from 'path';
import * as htmltojson from 'gulp-markdown-to-json';
import * as marked from 'marked';
import * as fs from 'fs';

function checkoutDocsToJson() {
  return gulp.src('../../dist/checkout/build/partials/modules/src/**/*')
    .pipe(htmltojson(marked))
    .pipe(gulp.dest('docs/checkout'));
}

function buildCheckoutReferenceObject(done) {
  fs.writeFileSync('docs/checkout/fileList.txt', fs.readdirSync('docs/checkout'));
  done();
}

gulp.task('moveDocsToDaffio', gulp.series(checkoutDocsToJson, buildCheckoutReferenceObject));

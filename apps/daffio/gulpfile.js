const { src, dest } = require('gulp');
const { Dgeni } = require('dgeni'); 

exports.docs = function() {
    var dgeni = new Dgeni([require('./docs/dgeni-example')]);
    return dgeni.generate();
};

exports.default = function() {
  return src('src/*.js')
    .pipe(dest('output/'));
}
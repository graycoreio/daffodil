import { Dgeni } from "dgeni";
import { checkoutDocs } from './docs/config/index';

exports.dgeni = function() {
  var dgeni = new Dgeni([checkoutDocs]);
  return dgeni.generate();
}
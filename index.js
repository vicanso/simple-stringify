'use strict';

const util = require('util');

exports.divider = ' ';

function stringify(json) {
  const arr = [];
  /* eslint guard-for-in:0 no-restricted-syntax:0 */
  for (const k in json) {
    const v = json[k];
    if (util.isString(v)) {
      arr.push(`${k}="${v}"`);
    } else if (util.isObject(v)) {
      if (util.isArray(v)) {
        arr.push(`${k}=[]`);
      } else {
        arr.push(`${k}={}`);
      }
    } else {
      arr.push(`${k}=${v}`);
    }
  }
  return arr.join(exports.divider);
}

exports.json = stringify;

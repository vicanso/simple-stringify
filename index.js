'use strict';

const util = require('util');

exports.divider = ' ';

// decide the value should be mask
exports.isSecret = null;

function stringify(json) {
  const arr = [];
  /* eslint guard-for-in:0 no-restricted-syntax:0 */
  for (const k in json) {
    if (exports.isSecret && exports.isSecret(k)) {
      /* eslint no-continue:0 */
      arr.push(`${k}=***`);
      continue;
    }
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

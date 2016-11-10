'use strict';

const util = require('util');

exports.divider = ' ';

// decide the value should be mask
exports.isSecret = null;

exports.maxLevel = 1;

function format(json, level) {
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
        if (level > 1) {
          arr.push(`${k}=[${format(v, level - 1)}]`);
        } else {
          arr.push(`${k}=[]`);
        }
      } else if (level > 1) {
        arr.push(`${k}={${format(v, level - 1)}}`);
      } else {
        arr.push(`${k}={}`);
      }
    } else {
      arr.push(`${k}=${v}`);
    }
  }
  return arr.join(exports.divider);
}

function stringify(json) {
  return format(json, exports.maxLevel);
}

exports.json = stringify;

'use strict';

const util = require('util');

exports.divider = ' ';

// decide the value should be mask
exports.isSecret = null;

exports.maxLevel = 1;

function toString(k, v, level) {
  if (exports.isSecret && exports.isSecret(k)) {
    return `${k}=***`;
  }
  if (util.isString(v)) {
    return `${k}="${v}"`;
  }
  if (util.isObject(v)) {
    if (util.isArray(v)) {
      if (level > 1) {
        /* eslint no-use-before-define:0 */
        return `${k}=[${format(v, level - 1)}]`;
      }
      return `${k}=[]`;
    }
    if (level > 1) {
      /* eslint no-use-before-define:0 */
      return `${k}={${format(v, level - 1)}}`;
    }
    return `${k}={}`;
  }
  return `${k}=${v}`;
}

function format(json, level) {
  const arr = [];
  if (util.isArray(json)) {
    for (let i = 0, len = json.length; i < len; i += 1) {
      arr.push(toString(i, json[i], level));
    }
  } else {
    /* eslint guard-for-in:0 no-restricted-syntax:0 */
    for (const k in json) {
      arr.push(toString(k, json[k], level));
    }
  }
  return arr.join(exports.divider);
}

function stringify(json, level) {
  return format(json, level || exports.maxLevel);
}

exports.json = stringify;

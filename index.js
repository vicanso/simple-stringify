'use strict';

const customFormat = {};

exports.divider = ' ';

// decide the value should be mask
exports.isSecret = null;

exports.maxLevel = 1;

function isString(value) {
  return typeof value === 'string';
}

function isFunction(value) {
  return typeof value === 'function';
}

function isObject(value) {
  if (!value) {
    return false;
  }
  return typeof value === 'object';
}

function toString(k, v, level) {
  if (customFormat[k]) {
    return customFormat[k](v);
  }
  if (exports.isSecret && exports.isSecret(k)) {
    if (isString(v)) {
      return `${k}="***"`;
    }
    return `${k}=***`;
  }
  if (isString(v)) {
    return `${k}="${v}"`;
  }
  if (isFunction(v)) {
    return `${k}=function`;
  }
  if (isObject(v)) {
    if (Array.isArray(v)) {
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
  if (Array.isArray(json)) {
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

function addFormat(key, fn) {
  customFormat[key] = fn;
}

function removeFormat(key) {
  delete customFormat[key];
}

exports.json = stringify;
exports.addFormat = addFormat;
exports.removeFormat = removeFormat;

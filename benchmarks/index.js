const stringify = require('..');
const util = require('util');
const data = {
  no: 123,
  mobile: null,
  addresss: undefined,
  disabled: false,
  name: 'tree.xie',
  keywords: [
    'koa',
    'framework',
    'albi',
  ],
  infos: {
    url : 'https://github.com/vicanso/albi/issues',
    email: 'vicansocanbico@gmail.com'
  },
};

function esStringify(json) {
  return Object.keys(json).map((k) => {
    const v = json[k];
    if (util.isString(v)) {
      return `${k}="${v}"`;
    }
    if (util.isObject(v)) {
      if (util.isArray(v)) {
        return `${k}=[]`;
      }
      return `${k}={}`;
    }
    return `${k}=${v}`;
  }).join(' ');
}

const max = 1000 * 1000;
let start = Date.now();
for (let i = 0; i < max; i++) {
  JSON.stringify(data);
}
console.info(`JSON.stringify ${max} times, use:${Date.now() - start}ms`);

start = Date.now();
for (let i = 0; i < max; i++) {
  stringify.json(data);
}
console.info(`simple-stringify json ${max} times, use:${Date.now() - start}ms`);

start = Date.now();
for (let i = 0; i < max; i++) {
  esStringify(data);
}
console.info(`esStringify ${max} times, use:${Date.now() - start}ms`);

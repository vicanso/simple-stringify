const stringify = require('..');
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

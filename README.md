#simple-stringify

[![Build Status](https://travis-ci.org/vicanso/simple-stringify.svg?branch=master)](https://travis-ci.org/vicanso/simple-stringify)
[![Coverage Status](https://img.shields.io/coveralls/vicanso/simple-stringify/master.svg?style=flat)](https://coveralls.io/r/vicanso/simple-stringify?branch=master)
[![npm](http://img.shields.io/npm/v/simple-stringify.svg?style=flat-square)](https://www.npmjs.org/package/simple-stringify)
[![Github Releases](https://img.shields.io/npm/dm/simple-stringify.svg?style=flat-square)](https://github.com/vicanso/simple-stringify)

Simple way stringify json for log.

## Installation

```js
$ npm install simple-stringify
```

## API

```js
const stringify = require('simple-stringify');
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
// no=123 mobile=null addresss=undefined disabled=false name="tree.xie" keywords=[] infos={}
stringify.json(data);
```

### divider

The divider for stringify, default is ' '.

```js
const stringify = require('simple-stringify');
stringify.divider = ',';
```

### json

Stringify json data

```js
const stringify = require('simple-stringify');
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
// no=123 mobile=null addresss=undefined disabled=false name="tree.xie" keywords=[] infos={}
stringify.json(data);
```

## Benchmarks

```
JSON.stringify 1000000 times, use:2438ms
simple-stringify json 1000000 times, use:1684ms
```

## License

MIT
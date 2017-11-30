'use strict';
const assert = require('assert');
const stringify = require('..');

// eslint-disable-next-line
describe('Simple-stringify', () => {
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
      url: 'https://github.com/vicanso/albi/issues',
      email: 'vicansocanbico@gmail.com',
    },
    // eslint-disable-next-line
    fn: function() {
      console.dir('test');
    },
  };

  // eslint-disable-next-line
  it('add custom format', () => {
    stringify.addFormat('myCustomKey', v => `myCustomKey="length(${v.length})"`);
    assert.equal(stringify.json({
      myCustomKey: 'abcd',
    }), 'myCustomKey="length(4)"');
    stringify.removeFormat('myCustomKey');
  });
  // eslint-disable-next-line
  it('format json success', () => {
    assert.equal(stringify.json(data), 'no=123 mobile=null addresss=undefined disabled=false name="tree.xie" keywords=[]:3 infos={}:2 fn=function');
  });

  // eslint-disable-next-line
  it('set divider success', () => {
    stringify.divider = ',';
    assert.equal(stringify.json(data), 'no=123,mobile=null,addresss=undefined,disabled=false,name="tree.xie",keywords=[]:3,infos={}:2,fn=function');
  });

  // eslint-disable-next-line
  it('set isSecret success', () => {
    stringify.divider = ' ';
    stringify.isSecret = key => key === 'password';
    assert.equal(stringify.json({
      account: 'tree.xie',
      password: '123456',
    }), 'account="tree.xie" password="***"');
  });

  // eslint-disable-next-line
  it('set max level success', () => {
    stringify.isSecret = null;
    stringify.maxLevel = 2;
    assert.equal(stringify.json(data), 'no=123 mobile=null addresss=undefined disabled=false name="tree.xie" keywords=[0="koa" 1="framework" 2="albi"] infos={url="https://github.com/vicanso/albi/issues" email="vicansocanbico@gmail.com"} fn=function');
  });
});

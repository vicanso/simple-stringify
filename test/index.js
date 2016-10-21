'use strict';
const assert = require('assert');
const stringify = require('..');


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
      url : 'https://github.com/vicanso/albi/issues',
      email: 'vicansocanbico@gmail.com'
    },
  };
  
  it('format json success', () => {
    assert.equal(stringify.json(data), 'no=123 mobile=null addresss=undefined disabled=false name="tree.xie" keywords=[] infos={}');
  });

  it('set divider success', () => {
    stringify.divider = ',';
    assert.equal(stringify.json(data), 'no=123,mobile=null,addresss=undefined,disabled=false,name="tree.xie",keywords=[],infos={}');
  });

  it('set isSecret success', () => {
    stringify.divider = ' ';
    stringify.isSecret = key => key === 'password';
    assert.equal(stringify.json({
      account: 'tree.xie',
      password: '123456',
    }), 'account="tree.xie" password=***');
  });
});

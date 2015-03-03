# base

base class for attribute initialization, life cycle and plugin management

[![base](https://nodei.co/npm/modulex-base.png)](https://npmjs.org/package/modulex-base)
[![NPM downloads](http://img.shields.io/npm/dm/modulex-base.svg)](https://npmjs.org/package/modulex-base)
[![Build Status](https://secure.travis-ci.org/modulex/base.png?branch=master)](https://travis-ci.org/modulex/base)
[![Coverage Status](https://img.shields.io/coveralls/modulex/base.svg)](https://coveralls.io/r/modulex/base?branch=master)
[![Dependency Status](https://gemnasium.com/modulex/base.png)](https://gemnasium.com/modulex/base)
[![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)](http://nodejs.org/download/)

## example

```javascript
var base = require('modulex-base');
var X = base.extend({
},{
    ATTRS:{
        x: {
            getter:function(){
                return 1;
            }
        }
    }
});
var y = new X();
y.get('x') // => 1
```

var Base = require('../../');
var Component = Base.extend({
  ok:function(){
    console.log('ok');
  }
});
new Component().ok();
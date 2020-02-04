'use strict';

var Cookiebar = function(el) {
  this.el = el;

  if (this.el) {
    this.init(this.el);
  }
};

Cookiebar.prototype.init = function(el) {
    var btn = el.querySelector('button');
    
    btn.addEventListener('click', function() {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*365);
        document.cookie = "cookiesAccepted=true;path=/;expires=" + d.toGMTString();
        el.parentNode.removeChild(el);
    });
};

module.exports = Cookiebar;
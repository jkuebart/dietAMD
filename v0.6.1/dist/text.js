define({load:function(t,e,n,s){"use strict";var o=new XMLHttpRequest;return o.open("GET",t),o.responseType=s&&s.type||"text",new Promise(function(e,n){o.onload=function(){200===this.status?e(this.response):n(new Error([t,this.status,this.statusText].join(": ")))},o.send()}).then(function(t){return n?n(t):t})}});
//# sourceMappingURL=text.js.map
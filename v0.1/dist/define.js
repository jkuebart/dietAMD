var define=function n(t,e){"use strict";function r(){return new Error([].join.call(arguments,": "))}function u(n,t){return(1+n.length+n.lastIndexOf(t))%(1+n.length)}function i(n,t,e){var u,o=c.context()||s();return arguments.length<3&&(e=arguments[arguments.length-1],t=arguments.length<2||"string"==typeof n?[]:n,(arguments.length<2||"string"!=typeof n)&&(n=void 0)),n=n||!o.empty()&&o.top(),"function"!=typeof e?c.put(n,e):t.length?c.put(n,Promise.all(t.map(function(n){if("exports"===n)return u=u||{};if(o.includes(n))throw r("define","circular dependency",o.push(n));return c.get(n,o.push(n))})).then(function(n){var t=e.apply(void 0,n);return u||t})):c.put(n,e()),i}function o(n){var t,r=n.substr(u(n.substr(1+n.lastIndexOf("/")),"."));n=n.substr(0,n.length-r.length);for(t in e.paths)({}).hasOwnProperty.call(e.paths,t)&&(n===t||n.startsWith(t+"/"))&&(n=e.paths[t]+n.substr(t.length));return(f.test(n)?"":e.baseUrl)+n+r}var s=function(){var n={};return n.empty=function(){return!0},n.toString=function(){return""},n.includes=function(){return!1},n.push=function(t){var e=this,r=Object.create(n);return r.top=function(){return t},r.pop=function(){return e},r.empty=function(){return!1},r.toString=function(){return t+", "+e},r.includes=function(n){return n===t||e.includes(n)},r},function(){return n}}(),c=function(){function n(n){var t=new XMLHttpRequest;return t.open("GET",n,!0),new Promise(function(e,u){t.onload=function(){200===this.status?e(this.response):u(r(n,this.status,this.statusText))},t.send()})}var e,u={},s={};return u.get=function(u,c){var f;return s[u]||(n(o(u+".js")).then(function(n){var o=eval,s=t.define;t.define=i,e=c;try{o(n)}finally{e=void 0,t.define=s,f.reject(r("define","unresolved dependency",u))}}),f=s[u]={},f.module=new Promise(function(n,t){f.resolve=n,f.reject=t})),s[u].module},u.context=function(){return e},u.put=function(n,t){return n&&(s[n]?s[n].resolve&&s[n].resolve(t):s[n]={module:t}),u},u}(),f=RegExp("^(/|[-+.A-Za-z0-9]+:)");return i.config=function(r){return n(t,Object.assign({},e,r))},i.amd={},i}(this,{baseUrl:"",paths:{}});
//# sourceMappingURL=define.map
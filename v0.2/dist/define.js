var define=function t(n,e){"use strict";function r(){return new Error([].join.call(arguments,": "))}function u(t,n){return(1+t.length+t.lastIndexOf(n))%(1+t.length)}function o(t,n,e){var u,i=c.context()||s();return arguments.length<3&&(e=arguments[arguments.length-1],n=arguments.length<2||"string"==typeof t?[]:t,(arguments.length<2||"string"!=typeof t)&&(t=void 0)),t=t||!i.empty()&&i.top(),"function"!=typeof e?c.put(t,e):n.length?c.put(t,Promise.all(n.map(function(t){if("exports"===t||"module"===t)return u||(u={exports:{}}),"e"===t[0]?u.exports:u;if(i.includes(t))throw r("define","circular dependency",i.push(t));return c.get(t,i.push(t))})).then(function(t){return e.apply(void 0,t)||u&&u.exports})):c.put(t,e()),o}function i(t){var n,r=t.substr(u(t.substr(1+t.lastIndexOf("/")),"."));t=t.substr(0,t.length-r.length);for(n in e.paths)({}).hasOwnProperty.call(e.paths,n)&&(t===n||t.startsWith(n+"/"))&&(t=e.paths[n]+t.substr(n.length));return(f.test(t)?"":e.baseUrl)+t+r}var s=function(){var t={};return t.empty=function(){return!0},t.toString=function(){return""},t.includes=function(){return!1},t.push=function(n){var e=this,r=Object.create(t);return r.top=function(){return n},r.pop=function(){return e},r.empty=function(){return!1},r.toString=function(){return n+", "+e},r.includes=function(t){return t===n||e.includes(t)},r},function(){return t}}(),c=function(){function t(t){var n=new XMLHttpRequest;return n.open("GET",t,!0),new Promise(function(e,u){n.onload=function(){200===this.status?e(this.response):u(r(t,this.status,this.statusText))},n.send()})}var e,u={},s={};return u.get=function(u,c){var f;return s[u]||(t(i(u+".js")).then(function(t){var i=eval,s=n.define;n.define=o,e=c;try{i(t)}finally{e=void 0,n.define=s,f.reject(r("define","unresolved dependency",u))}}),f=s[u]={},f.module=new Promise(function(t,n){f.resolve=t,f.reject=n})),s[u].module},u.context=function(){return e},u.put=function(t,n){return t&&(s[t]?s[t].resolve&&s[t].resolve(n):s[t]={module:n}),u},u}(),f=RegExp("^(/|[-+.A-Za-z0-9]+:)");return o.config=function(r){return t(n,Object.assign({},e,r))},o.amd={},o}(this,{baseUrl:"",paths:{}});
//# sourceMappingURL=define.map
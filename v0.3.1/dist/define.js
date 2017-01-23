var define=function(){"use strict";function e(){return new Error([].join.call(arguments,": "))}function n(e,n){return(1+e.length+e.lastIndexOf(n))%(1+e.length)}function t(e){return e.substr(1+e.lastIndexOf("/"))}function r(u){function i(e){var r,o=t(e);o=o.substr(n(o,".")),e=e.substr(0,e.length-o.length);for(r in u.paths)({}).hasOwnProperty.call(u.paths,r)&&(e===r||e.startsWith(r+"/"))&&(e=u.paths[r]+e.substr(r.length));return(c.test(e)?"":u.baseUrl)+e+o}var s={},f={};return s.define=function(e,n){return e&&(f[e]?f[e].resolve&&f[e].resolve(n):f[e]={module:n}),s},s.get=function(n,t){function r(i){document.head.removeChild(u),u.removeEventListener("error",r),u.removeEventListener("load",r),o(t.push({id:n,repo:s})),"error"===i.type?c.reject(e("define",n,"load error")):c.reject(e("define","unresolved dependency",n))}var u,c=f[n];return c||(c=f[n]={},c.module=new Promise(function(e,n){c.resolve=e,c.reject=n}),u=document.createElement("script"),u.setAttribute("src",i(n+".js")),u.addEventListener("error",r),u.addEventListener("load",r),document.head.appendChild(u)),c.module},s.config=function(e){return r(Object.assign({},u,e))},s}function o(n){var t,r=d;d=[],n=n||s(),t=n.empty()?{}:n.top(),r.forEach(function(r){var o,u=r.repo||t.repo||f;u.define(r.id||t.id,"function"!=typeof r.mod?r.mod:r.env.length?Promise.all(r.env.map(function(t){if("exports"===t||"module"===t)return o=o||{exports:{}},"e"===t[0]?o.exports:o;if(n.some(function(e){return t===e.id}))throw e("define","circular dependency",n.map(function(e){return e.id}).push(t));return u.get(t,n)})).then(function(e){return r.mod.apply(void 0,e)||o&&o.exports}):r.mod.call(void 0))})}function u(e){function n(n,t,r){arguments.length<3&&(r=arguments[arguments.length-1],t=arguments.length<2||"string"==typeof n?[]:n,(arguments.length<2||"string"!=typeof n)&&(n=void 0)),d.push({id:n,env:t,mod:r,repo:e}),i()}return n.config=function(n){return u((e||f).config(n))},n.amd={},n}var i,c=RegExp("^(/|[-+.A-Za-z0-9]+:)"),s=function(){var e={};return e.empty=function(){return!0},e.toString=function(){return""},e.some=function(){},e.map=function(){return e},e.push=function(n){var t=this,r=Object.create(e);return r.top=function(){return n},r.pop=function(){return t},r.empty=function(){return!1},r.toString=function(){return n+", "+t},r.some=function(e){return e(n)||t.some(e)},r.map=function(e){return t.map(e).push(e(n))},r},function(){return e}}(),f=r({baseUrl:"",paths:{}}),d=[];return new Promise(function(e){i=e}).then(o),u()}();
//# sourceMappingURL=define.js.map
var define=function(){"use strict";function e(){return new Error([].join.call(arguments,": "))}function n(e,n){return(1+e.length+e.lastIndexOf(n))%(1+e.length)}function t(e){return e.substr(0,1+e.lastIndexOf("/"))}function r(e){return e.substr(1+e.lastIndexOf("/"))}function o(u){function c(e,o){var i,c=r(e);if(f.test(e))return e;c=c.substr(n(c,".")),e=e.substr(0,e.length-c.length),"."!==e[0]||o.empty()||(e=t(o.top().id)+e),e=e.split("/").reduce(function(e,n){switch(n){case"":case".":return e;case"..":return e.slice(0,e.length-1);default:return e.concat(n)}},[]).join("/");for(i in u.paths)({}).hasOwnProperty.call(u.paths,i)&&(e===i||e.startsWith(i+"/"))&&(e=u.paths[i]+e.substr(i.length));return(f.test(e)?"":u.baseUrl)+e+c}var s={},a={};return s.toUrl=c,s.define=function(e,n){return e&&(a[e]?a[e].resolve&&a[e].resolve(n):a[e]={module:n}),s},s.get=function(n,t){function r(c){document.head.removeChild(o),o.removeEventListener("error",r),o.removeEventListener("load",r),i(t.push({id:n,repo:s})),"error"===c.type?u.reject(e("define",n,"load error")):u.reject(e("define","unresolved dependency",n))}var o,u=a[n];return u||(u=a[n]={},u.module=new Promise(function(e,n){u.resolve=e,u.reject=n}),o=document.createElement("script"),o.setAttribute("src",c(n+".js",t)),o.addEventListener("error",r),o.addEventListener("load",r),document.head.appendChild(o)),u.module},s.config=function(e){return o(l({},u,e))},s}function u(n,t){function r(o,u){var i={exports:{}};if("string"==typeof o)throw e("require","synchronous mode unimplemented");return o.length?Promise.all(o.map(function(o){var u;switch(o=o.split("!"),o[0]){case"exports":return i.exports;case"module":return i;case"require":return r}if(t.some(function(e){return o[0]===e.id}))throw e("require","circular dependency",t.map(function(e){return e.id}).push(o[0]));return u=n.get(o[0],t),o.length<2?u:Promise.resolve(u).then(function(e){return new Promise(function(n){e.load(o.slice(1).join("!"),r,n)})})})).then(function(e){return u?u.apply(void 0,e):e}):u?u([]):[]}return r.toUrl=function(e){return n.toUrl(e,t)},r}function i(e){var n,t=h;h=[],e=e||d(),n=e.empty()?{}:e.top(),t.forEach(function(t){var r=t.repo||n.repo||p;r.define(t.id||n.id,"function"!=typeof t.mod?t.mod:Promise.resolve(u(r,e)(t.env)).then(function(e){var n=t.env.indexOf("module"),r=t.env.indexOf("exports");return t.mod.apply(void 0,e)||-1!==n&&e[n].exports||-1!==r&&e[r]}))})}function c(e){function n(n,t,r){arguments.length<3&&(r=arguments[arguments.length-1],t=arguments.length<2||"string"==typeof n?void 0:n,(arguments.length<2||"string"!=typeof n)&&(n=void 0)),t||(t="function"==typeof r&&r.length?a:[]),h.push({id:n,env:t,mod:r,repo:e}),s()}return n.config=function(n){return c((e||p).config(n))},n.amd={},n}var s,f=RegExp("^(/|[-+.A-Za-z0-9]+:)"),a=["require","exports","module"],l=Object.assign||function(e){var n,t,r;for(t=1;t<arguments.length;++t)if(n=arguments[t],null!=n)for(r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},d=function(){var e={};return e.empty=function(){return!0},e.toString=function(){return""},e.some=function(){},e.map=function(){return e},e.push=function(n){var t=this,r=Object.create(e);return r.top=function(){return n},r.pop=function(){return t},r.empty=function(){return!1},r.toString=function(){return n+", "+t},r.some=function(e){return e(n)||t.some(e)},r.map=function(e){return t.map(e).push(e(n))},r},function(){return e}}(),p=o({baseUrl:"",paths:{}}),h=[];return new Promise(function(e){s=e}).then(i),c()}();
//# sourceMappingURL=define.js.map
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("dCfNN",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=l.test(e);return r||f.test(e)?u(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,l,f,u,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=i,r=o;return i=o=void 0,s=t,l=e.apply(r,n)}function O(e){var n=e-u,r=e-s;return void 0===u||n>=t||n<0||d&&r>=a}function h(){var e,n,r,i=g();if(O(i))return j(i);f=setTimeout(h,(e=i-u,n=i-s,r=t-e,d?p(r,a-n):r))}function j(e){return(f=void 0,m&&i)?x(e):(i=o=void 0,l)}function T(){var e,n=g(),r=O(n);if(i=arguments,o=this,u=n,r){if(void 0===f)return s=e=u,f=setTimeout(h,t),c?x(e):l;if(d)return f=setTimeout(h,t),x(u)}return void 0===f&&(f=setTimeout(h,t)),l}return t=y(t)||0,b(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=u=o=f=void 0},T.flush=function(){return void 0===f?l:j(g())},T}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("dCfNN");let o=document.querySelector(".feedback-form"),a={email:"",message:""},l=(i&&i.__esModule?i.default:i)(()=>{localStorage.setItem(feedbackFormData,JSON.stringify(a))},500);o.addEventListener("input",e=>{a[e.target.name]=e.target.value,l()}),o.addEventListener("submit",e=>{e.preventDefault(),console.log({email:o.elements.email.value,message:o.elements.message.value}),localStorage.removeItem(feedbackFormData),o.reset()}),(()=>{let e=localStorage.getItem(feedbackFormData);if(e){let t=JSON.parse(e);o.elements.email.value=t.email||"",o.elements.message.value=t.message||"",a.email=t.email,a.message=t.message}})()}();
//# sourceMappingURL=03-feedback.53d72594.js.map

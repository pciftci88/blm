(this.webpackJsonpblm=this.webpackJsonpblm||[]).push([[16],{296:function(n,t,e){n.exports=e.p+"static/media/about.49e866a6.jpg"},401:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(73),i=e(15),c=e(16);function u(){var n=Object(i.a)(["\n    margin-bottom: 10px;\n"]);return u=function(){return n},n}function s(){var n=Object(i.a)(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 20px;\n"]);return s=function(){return n},n}function f(){var n=Object(i.a)(["\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 10px;\n"]);return f=function(){return n},n}function l(){var n=Object(i.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    text-transform: uppercase;\n"]);return l=function(){return n},n}function p(){var n=Object(i.a)(["\n    margin: 0 40px;\n    max-width: 1020px;\n"]);return p=function(){return n},n}var b=c.b.div(p()),g=c.b.h1(l()),d=c.b.h2(f()),m=c.b.h3(s()),v=c.b.p(u()),y=e(296),h=e.n(y),O=Object(r.lazy)((function(){return e.e(1).then(e.bind(null,403))}));t.default=function(){var n=Object(a.a)().t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{teaser:h.a,headline:n("Teaser.about"),isBackgroundWhite:!0}),o.a.createElement(b,null,o.a.createElement(g,null,n("Nav.about")),o.a.createElement(d,null,n("About.title")),o.a.createElement(m,null,n("About.subtitle")),o.a.createElement(v,null,n("About.1")),o.a.createElement(v,null,n("About.2")),o.a.createElement(v,null,n("About.3"))))}},60:function(n,t,e){var r=e(61),o=e(62),a=e(63),i=e(65);n.exports=function(n,t){return r(n)||o(n,t)||a(n,t)||i()}},61:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},62:function(n,t){n.exports=function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}}},63:function(n,t,e){var r=e(64);n.exports=function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}},64:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}},65:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},73:function(n,t,e){"use strict";e.d(t,"a",(function(){return m}));var r=e(60),o=e.n(r),a=e(29),i=e.n(a),c=e(0),u=e(58);function s(){if(console&&console.warn){for(var n,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];"string"===typeof e[0]&&(e[0]="react-i18next:: ".concat(e[0])),(n=console).warn.apply(n,e)}}var f={};function l(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];"string"===typeof t[0]&&f[t[0]]||("string"===typeof t[0]&&(f[t[0]]=new Date),s.apply(void 0,t))}function p(n,t,e){n.loadNamespaces(t,(function(){if(n.isInitialized)e();else{n.on("initialized",(function t(){setTimeout((function(){n.off("initialized",t)}),0),e()}))}}))}function b(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(n,e){var r=t.services.backendConnector.state["".concat(n,"|").concat(e)];return-1===r||2===r};return!(e.bindI18n&&e.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,n))&&(!!t.hasResourceBundle(r,n)||(!t.services.backendConnector.backend||!(!i(r,n)||o&&!i(a,n))))}function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?g(Object(e),!0).forEach((function(t){i()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function m(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.i18n,r=Object(c.useContext)(u.a)||{},a=r.i18n,i=r.defaultNS,s=e||a||Object(u.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.b),!s){l("You will need to pass in an i18next instance by using initReactI18next");var f=function(n){return Array.isArray(n)?n[n.length-1]:n},g=[f,{},!1];return g.t=f,g.i18n={},g.ready=!1,g}var m=d(d(d({},Object(u.c)()),s.options.react),t),v=m.useSuspense,y=n||i||s.options&&s.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(y);var h=(s.isInitialized||s.initializedStoreOnce)&&y.every((function(n){return b(n,s,m)}));function O(){return{t:s.getFixedT(null,"fallback"===m.nsMode?y:y[0])}}var j=Object(c.useState)(O()),w=o()(j,2),x=w[0],A=w[1],E=Object(c.useRef)(!0);Object(c.useEffect)((function(){var n=m.bindI18n,t=m.bindI18nStore;function e(){E.current&&A(O())}return E.current=!0,h||v||p(s,y,(function(){E.current&&A(O())})),n&&s&&s.on(n,e),t&&s&&s.store.on(t,e),function(){E.current=!1,n&&s&&n.split(" ").forEach((function(n){return s.off(n,e)})),t&&s&&t.split(" ").forEach((function(n){return s.store.off(n,e)}))}}),[y.join()]);var S=[x.t,s,h];if(S.t=x.t,S.i18n=s,S.ready=h,h)return S;if(!h&&!v)return S;throw new Promise((function(n){p(s,y,(function(){n()}))}))}}}]);
//# sourceMappingURL=16.1ff21c9c.chunk.js.map
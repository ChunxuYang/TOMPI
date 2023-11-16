'use client'
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Editor: () => Editor,
  TimeTravel: () => TimeTravel,
  useTompiUI: () => tompi_ui_default
});
module.exports = __toCommonJS(src_exports);

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined")
    return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles/globals.css
styleInject('*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n}\n::before,\n::after {\n  --tw-content: "";\n}\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n:root {\n  --background: 0 0% 100%;\n  --foreground: 222.2 84% 4.9%;\n  --card: 0 0% 100%;\n  --card-foreground: 222.2 84% 4.9%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 222.2 84% 4.9%;\n  --primary: 222.2 47.4% 11.2%;\n  --primary-foreground: 210 40% 98%;\n  --secondary: 210 40% 96.1%;\n  --secondary-foreground: 222.2 47.4% 11.2%;\n  --muted: 210 40% 96.1%;\n  --muted-foreground: 215.4 16.3% 46.9%;\n  --accent: 210 40% 96.1%;\n  --accent-foreground: 222.2 47.4% 11.2%;\n  --destructive: 0 84.2% 60.2%;\n  --destructive-foreground: 210 40% 98%;\n  --border: 214.3 31.8% 91.4%;\n  --input: 214.3 31.8% 91.4%;\n  --ring: 222.2 84% 4.9%;\n  --radius: 0.5rem;\n}\n.dark {\n  --background: 222.2 84% 4.9%;\n  --foreground: 210 40% 98%;\n  --card: 222.2 84% 4.9%;\n  --card-foreground: 210 40% 98%;\n  --popover: 222.2 84% 4.9%;\n  --popover-foreground: 210 40% 98%;\n  --primary: 210 40% 98%;\n  --primary-foreground: 222.2 47.4% 11.2%;\n  --secondary: 217.2 32.6% 17.5%;\n  --secondary-foreground: 210 40% 98%;\n  --muted: 217.2 32.6% 17.5%;\n  --muted-foreground: 215 20.2% 65.1%;\n  --accent: 217.2 32.6% 17.5%;\n  --accent-foreground: 210 40% 98%;\n  --destructive: 0 62.8% 30.6%;\n  --destructive-foreground: 210 40% 98%;\n  --border: 217.2 32.6% 17.5%;\n  --input: 217.2 32.6% 17.5%;\n  --ring: 212.7 26.8% 83.9%;\n}\n* {\n  border-color: hsl(var(--border));\n}\nbody {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n}\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(a strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n.prose :where(ol[type=A]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=A s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=I]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=I s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type="1"]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: disc;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.25em;\n}\n.prose :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: "\\201c""\\201d""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 900;\n  color: inherit;\n}\n.prose :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 800;\n  color: inherit;\n}\n.prose :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  display: block;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--tw-prose-kbd);\n  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);\n  font-size: 0.875em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1875em;\n  padding-right: 0.375em;\n  padding-bottom: 0.1875em;\n  padding-left: 0.375em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: "`";\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: "`";\n}\n.prose :where(a code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h1 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.9em;\n}\n.prose :where(h4 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: baseline;\n}\n.prose :where(tfoot):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-top-width: 1px;\n  border-top-color: var(--tw-prose-th-borders);\n}\n.prose :where(tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: top;\n}\n.prose :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-kbd: #111827;\n  --tw-prose-kbd-shadows: 17 24 39;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-kbd: #fff;\n  --tw-prose-invert-kbd-shadows: 255 255 255;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(.prose > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(.prose > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(.prose > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  padding-left: 1.625em;\n}\n.prose :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(.prose > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(.prose > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n.paragraph {\n  line-height: 1.75rem;\n}\n.paragraph:not(:first-child) {\n  margin-top: 2rem;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.inset-x-0 {\n  left: 0px;\n  right: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-10 {\n  bottom: 2.5rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-0 {\n  right: 0px;\n}\n.right-10 {\n  right: 2.5rem;\n}\n.right-4 {\n  right: 1rem;\n}\n.top-0 {\n  top: 0px;\n}\n.top-4 {\n  top: 1rem;\n}\n.top-\\[50\\%\\] {\n  top: 50%;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-50 {\n  z-index: 50;\n}\n.m-4 {\n  margin: 1rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-1\\.5 {\n  height: 0.375rem;\n}\n.h-1\\/2 {\n  height: 50%;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-2 {\n  height: 0.5rem;\n}\n.h-2\\.5 {\n  height: 0.625rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-3\\.5 {\n  height: 0.875rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.h-\\[1px\\] {\n  height: 1px;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-\\[600px\\] {\n  max-height: 600px;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-2\\.5 {\n  width: 0.625rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-3\\.5 {\n  width: 0.875rem;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.grow {\n  flex-grow: 1;\n}\n.caption-bottom {\n  caption-side: bottom;\n}\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[-50\\%\\] {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.touch-none {\n  touch-action: none;\n}\n.select-none {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.divide-x > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(1px * var(--tw-divide-x-reverse));\n  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n}\n.divide-solid > :not([hidden]) ~ :not([hidden]) {\n  border-style: solid;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.justify-self-center {\n  justify-self: center;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-\\[inherit\\] {\n  border-radius: inherit;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: var(--radius);\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n.rounded-none {\n  border-radius: 0px;\n}\n.rounded-sm {\n  border-radius: calc(var(--radius) - 4px);\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-input {\n  border-color: hsl(var(--input));\n}\n.border-primary {\n  border-color: hsl(var(--primary));\n}\n.border-primary\\/50 {\n  border-color: hsl(var(--primary) / 0.5);\n}\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 68 68 / var(--tw-border-opacity));\n}\n.border-l-transparent {\n  border-left-color: transparent;\n}\n.border-t-transparent {\n  border-top-color: transparent;\n}\n.bg-background {\n  background-color: hsl(var(--background));\n}\n.bg-background\\/80 {\n  background-color: hsl(var(--background) / 0.8);\n}\n.bg-border {\n  background-color: hsl(var(--border));\n}\n.bg-card {\n  background-color: hsl(var(--card));\n}\n.bg-destructive {\n  background-color: hsl(var(--destructive));\n}\n.bg-muted {\n  background-color: hsl(var(--muted));\n}\n.bg-popover {\n  background-color: hsl(var(--popover));\n}\n.bg-primary {\n  background-color: hsl(var(--primary));\n}\n.bg-primary\\/20 {\n  background-color: hsl(var(--primary) / 0.2);\n}\n.bg-secondary {\n  background-color: hsl(var(--secondary));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-yellow-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 240 138 / var(--tw-bg-opacity));\n}\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n.fill-primary {\n  fill: hsl(var(--primary));\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-\\[1px\\] {\n  padding: 1px;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.italic {\n  font-style: italic;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-card-foreground {\n  color: hsl(var(--card-foreground));\n}\n.text-destructive-foreground {\n  color: hsl(var(--destructive-foreground));\n}\n.text-foreground {\n  color: hsl(var(--foreground));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n.text-muted-foreground {\n  color: hsl(var(--muted-foreground));\n}\n.text-popover-foreground {\n  color: hsl(var(--popover-foreground));\n}\n.text-primary {\n  color: hsl(var(--primary));\n}\n.text-primary-foreground {\n  color: hsl(var(--primary-foreground));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.text-secondary-foreground {\n  color: hsl(var(--secondary-foreground));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.decoration-blue-500 {\n  text-decoration-color: #3b82f6;\n}\n.decoration-red-500 {\n  text-decoration-color: #ef4444;\n}\n.decoration-yellow-500 {\n  text-decoration-color: #eab308;\n}\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.ring-offset-background {\n  --tw-ring-offset-color: hsl(var(--background));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    -webkit-backdrop-filter;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    backdrop-filter;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    backdrop-filter,\n    -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes enter {\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.animate-in {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.fade-in-0 {\n  --tw-enter-opacity: 0;\n}\n.zoom-in-95 {\n  --tw-enter-scale: .95;\n}\n.duration-200 {\n  animation-duration: 200ms;\n}\n.ease-in-out {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lexical-placeholder {\n  color: #adb5bd;\n  content: attr(data-placeholder);\n  float: left;\n  height: 0;\n  pointer-events: none;\n  position: absolute;\n}\n:is(.dark .dark\\:prose-invert) {\n  --tw-prose-body: var(--tw-prose-invert-body);\n  --tw-prose-headings: var(--tw-prose-invert-headings);\n  --tw-prose-lead: var(--tw-prose-invert-lead);\n  --tw-prose-links: var(--tw-prose-invert-links);\n  --tw-prose-bold: var(--tw-prose-invert-bold);\n  --tw-prose-counters: var(--tw-prose-invert-counters);\n  --tw-prose-bullets: var(--tw-prose-invert-bullets);\n  --tw-prose-hr: var(--tw-prose-invert-hr);\n  --tw-prose-quotes: var(--tw-prose-invert-quotes);\n  --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);\n  --tw-prose-captions: var(--tw-prose-invert-captions);\n  --tw-prose-kbd: var(--tw-prose-invert-kbd);\n  --tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);\n  --tw-prose-code: var(--tw-prose-invert-code);\n  --tw-prose-pre-code: var(--tw-prose-invert-pre-code);\n  --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);\n  --tw-prose-th-borders: var(--tw-prose-invert-th-borders);\n  --tw-prose-td-borders: var(--tw-prose-invert-td-borders);\n}\n@media (min-width: 1024px) {\n  .lg\\:prose-xl {\n    font-size: 1.25rem;\n    line-height: 1.8;\n  }\n  .lg\\:prose-xl :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.2em;\n    line-height: 1.5;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n  .lg\\:prose-xl :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-left: 1.0666667em;\n  }\n  .lg\\:prose-xl :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 2.8em;\n    margin-top: 0;\n    margin-bottom: 0.8571429em;\n    line-height: 1;\n  }\n  .lg\\:prose-xl :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.8em;\n    margin-top: 1.5555556em;\n    margin-bottom: 0.8888889em;\n    line-height: 1.1111111;\n  }\n  .lg\\:prose-xl :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.5em;\n    margin-top: 1.6em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.3333333;\n  }\n  .lg\\:prose-xl :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.8em;\n    margin-bottom: 0.6em;\n    line-height: 1.6;\n  }\n  .lg\\:prose-xl :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    border-radius: 0.3125rem;\n    padding-top: 0.25em;\n    padding-right: 0.4em;\n    padding-bottom: 0.25em;\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n  }\n  .lg\\:prose-xl :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8611111em;\n  }\n  .lg\\:prose-xl :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n  }\n  .lg\\:prose-xl :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.7777778;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.5rem;\n    padding-top: 1.1111111em;\n    padding-right: 1.3333333em;\n    padding-bottom: 1.1111111em;\n    padding-left: 1.3333333em;\n  }\n  .lg\\:prose-xl :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6em;\n    margin-bottom: 0.6em;\n  }\n  .lg\\:prose-xl :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n  .lg\\:prose-xl :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2.8em;\n    margin-bottom: 2.8em;\n  }\n  .lg\\:prose-xl :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n  }\n  .lg\\:prose-xl :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n  .lg\\:prose-xl :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-xl :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-xl :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-top: 0.8888889em;\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n  .lg\\:prose-xl :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-xl :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-xl :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n    margin-top: 1em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 0;\n  }\n}\n.file\\:border-0::file-selector-button {\n  border-width: 0px;\n}\n.file\\:bg-transparent::file-selector-button {\n  background-color: transparent;\n}\n.file\\:text-sm::file-selector-button {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.file\\:font-medium::file-selector-button {\n  font-weight: 500;\n}\n.placeholder\\:text-muted-foreground::-moz-placeholder {\n  color: hsl(var(--muted-foreground));\n}\n.placeholder\\:text-muted-foreground::placeholder {\n  color: hsl(var(--muted-foreground));\n}\n.hover\\:bg-accent:hover {\n  background-color: hsl(var(--accent));\n}\n.hover\\:bg-destructive\\/90:hover {\n  background-color: hsl(var(--destructive) / 0.9);\n}\n.hover\\:bg-muted:hover {\n  background-color: hsl(var(--muted));\n}\n.hover\\:bg-muted\\/50:hover {\n  background-color: hsl(var(--muted) / 0.5);\n}\n.hover\\:bg-primary\\/90:hover {\n  background-color: hsl(var(--primary) / 0.9);\n}\n.hover\\:bg-secondary\\/80:hover {\n  background-color: hsl(var(--secondary) / 0.8);\n}\n.hover\\:text-accent-foreground:hover {\n  color: hsl(var(--accent-foreground));\n}\n.hover\\:text-muted-foreground:hover {\n  color: hsl(var(--muted-foreground));\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-ring:focus {\n  --tw-ring-color: hsl(var(--ring));\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-2:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--ring));\n}\n.focus-visible\\:ring-offset-2:focus-visible {\n  --tw-ring-offset-width: 2px;\n}\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n.group:hover .group-hover\\:bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}\n.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {\n  cursor: not-allowed;\n}\n.peer:disabled ~ .peer-disabled\\:opacity-70 {\n  opacity: 0.7;\n}\n.data-\\[state\\=active\\]\\:bg-background[data-state=active] {\n  background-color: hsl(var(--background));\n}\n.data-\\[state\\=on\\]\\:bg-accent[data-state=on] {\n  background-color: hsl(var(--accent));\n}\n.data-\\[state\\=open\\]\\:bg-accent[data-state=open] {\n  background-color: hsl(var(--accent));\n}\n.data-\\[state\\=open\\]\\:bg-secondary[data-state=open] {\n  background-color: hsl(var(--secondary));\n}\n.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected] {\n  background-color: hsl(var(--muted));\n}\n.data-\\[state\\=active\\]\\:text-foreground[data-state=active] {\n  color: hsl(var(--foreground));\n}\n.data-\\[state\\=on\\]\\:text-accent-foreground[data-state=on] {\n  color: hsl(var(--accent-foreground));\n}\n.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open] {\n  color: hsl(var(--muted-foreground));\n}\n.data-\\[state\\=active\\]\\:shadow[data-state=active] {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {\n  transition-duration: 300ms;\n}\n.data-\\[state\\=open\\]\\:duration-500[data-state=open] {\n  transition-duration: 500ms;\n}\n.data-\\[state\\=open\\]\\:animate-in[data-state=open] {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {\n  --tw-exit-opacity: 0;\n}\n.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {\n  --tw-enter-opacity: 0;\n}\n.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {\n  --tw-exit-scale: .95;\n}\n.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {\n  --tw-enter-scale: .95;\n}\n.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {\n  --tw-enter-translate-y: -0.5rem;\n}\n.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {\n  --tw-enter-translate-x: 0.5rem;\n}\n.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {\n  --tw-enter-translate-x: -0.5rem;\n}\n.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {\n  --tw-enter-translate-y: 0.5rem;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed] {\n  --tw-exit-translate-y: 100%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed] {\n  --tw-exit-translate-x: -100%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed] {\n  --tw-exit-translate-x: -50%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed] {\n  --tw-exit-translate-x: 100%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed] {\n  --tw-exit-translate-y: -100%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed] {\n  --tw-exit-translate-y: -48%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open] {\n  --tw-enter-translate-y: 100%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open] {\n  --tw-enter-translate-x: -100%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open] {\n  --tw-enter-translate-x: -50%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open] {\n  --tw-enter-translate-x: 100%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open] {\n  --tw-enter-translate-y: -100%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open] {\n  --tw-enter-translate-y: -48%;\n}\n.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {\n  animation-duration: 300ms;\n}\n.data-\\[state\\=open\\]\\:duration-500[data-state=open] {\n  animation-duration: 500ms;\n}\n:is(.dark .dark\\:bg-yellow-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(202 138 4 / var(--tw-bg-opacity));\n}\n:is(.dark .dark\\:bg-yellow-700) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\n}\n@media (min-width: 640px) {\n  .sm\\:max-w-sm {\n    max-width: 24rem;\n  }\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .sm\\:rounded-lg {\n    border-radius: var(--radius);\n  }\n  .sm\\:text-left {\n    text-align: left;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:w-full {\n    width: 100%;\n  }\n}\n.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]) {\n  padding-right: 0px;\n}\n.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] > [role=checkbox] {\n  --tw-translate-y: 2px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {\n  border-width: 0px;\n}\n.\\[\\&_tr\\]\\:border-b tr {\n  border-bottom-width: 1px;\n}\n');

// src/components/lexical-editor/index.tsx
var import_jotai12 = require("jotai");
var import_lexical4 = require("lexical");
var import_react9 = require("react");
var import_sonner2 = require("sonner");

// src/components/comment/comment-list.tsx
var import_jotai3 = require("jotai");
var import_utils3 = require("jotai/utils");

// src/components/comment/comment-item.tsx
var import_jotai2 = require("jotai");

// src/components/ui/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// src/components/ui/card.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )
    }, props)
  );
});
Card.displayName = "Card";
var CardHeader = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "h3",
    __spreadValues({
      ref,
      className: cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "p",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/stores/comments.ts
var import_jotai = require("jotai");
var import_jotai_zustand = require("jotai-zustand");
var import_vanilla = require("zustand/vanilla");
var commentsAtom = (0, import_jotai.atom)([]);
var store = (0, import_jotai.createStore)();
var currentActiveCommentAtom = (0, import_jotai.atom)((get) => {
  var _a;
  const comments = get(commentsAtom);
  const currentActiveCommentId = get(currentActiveCommentIdAtom);
  if (currentActiveCommentId === null) {
    return null;
  }
  return (_a = comments.find(
    (comment) => comment.id === currentActiveCommentId.activeCommentId
  )) != null ? _a : null;
});
var commentIdStore = (0, import_vanilla.createStore)(() => ({
  activeCommentId: null
}));
var currentActiveCommentIdAtom = (0, import_jotai_zustand.atomWithStore)(commentIdStore);

// src/components/comment/comment-item.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function CommentItem({
  commentAtom,
  onRemove
}) {
  const comment = (0, import_jotai2.useAtomValue)(commentAtom);
  const [currentActiveCommentId, setCurrentActiveCommentId] = (0, import_jotai2.useAtom)(
    currentActiveCommentIdAtom
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    Card,
    {
      className: "w-64",
      onMouseEnter: () => setCurrentActiveCommentId(() => ({ activeCommentId: comment.id })),
      onMouseLeave: () => setCurrentActiveCommentId(() => ({ activeCommentId: null })),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CardTitle, { children: comment.comment }) }),
        currentActiveCommentId.activeCommentId === comment.id && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(CardFooter, { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            Button,
            {
              variant: "outline",
              onClick: () => {
                onRemove();
              },
              children: "Decline"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { children: "Accept" })
        ] })
      ]
    }
  );
}

// src/components/comment/comment-list.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function CommentList() {
  const splitedComments = (0, import_utils3.splitAtom)(commentsAtom);
  const [comments, dispatch] = (0, import_jotai3.useAtom)(splitedComments);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-4 min-w-fit", children: comments.map((comment, id) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    CommentItem,
    {
      commentAtom: comment,
      onRemove: () => {
        dispatch({ type: "remove", atom: comment });
      }
    },
    id
  )) });
}

// src/components/ui/separator.tsx
var React3 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Separator = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      SeparatorPrimitive.Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      }, props)
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// src/stores/user-behavior.ts
var import_jotai4 = require("jotai");
var import_jotai_optics = require("jotai-optics");
var userBehaviorAtom = (0, import_jotai4.atom)({
  duration_block: 0,
  typing_speed: 0,
  sentence_complete: 0,
  revision_frequency: 0,
  prob_distraction: 0
});
var durationBlockAtom = (0, import_jotai_optics.focusAtom)(
  userBehaviorAtom,
  (optic) => optic.prop("duration_block")
);
var typingSpeedAtom = (0, import_jotai_optics.focusAtom)(
  userBehaviorAtom,
  (optic) => optic.prop("typing_speed")
);
var sentenceCompleteAtom = (0, import_jotai_optics.focusAtom)(
  userBehaviorAtom,
  (optic) => optic.prop("sentence_complete")
);
var revisionFrequencyAtom = (0, import_jotai_optics.focusAtom)(
  userBehaviorAtom,
  (optic) => optic.prop("revision_frequency")
);
var probDistractionAtom = (0, import_jotai_optics.focusAtom)(
  userBehaviorAtom,
  (optic) => optic.prop("prob_distraction")
);

// src/components/lexical-editor/index.tsx
var import_code = require("@lexical/code");
var import_link = require("@lexical/link");
var import_list = require("@lexical/list");
var import_mark = require("@lexical/mark");
var import_markdown = require("@lexical/markdown");
var import_LexicalAutoFocusPlugin = require("@lexical/react/LexicalAutoFocusPlugin");
var import_LexicalComposer = require("@lexical/react/LexicalComposer");
var import_LexicalContentEditable = require("@lexical/react/LexicalContentEditable");
var import_LexicalErrorBoundary = __toESM(require("@lexical/react/LexicalErrorBoundary"));
var import_LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin");
var import_LexicalLinkPlugin = require("@lexical/react/LexicalLinkPlugin");
var import_LexicalListPlugin = require("@lexical/react/LexicalListPlugin");
var import_LexicalMarkdownShortcutPlugin = require("@lexical/react/LexicalMarkdownShortcutPlugin");
var import_LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin");
var import_LexicalTabIndentationPlugin = require("@lexical/react/LexicalTabIndentationPlugin");
var import_rich_text = require("@lexical/rich-text");

// src/components/lexical-editor/plugins/ai-highlight-plugin.tsx
var import_lexical = require("lexical");
var import_react = require("react");

// src/components/ui/hover-card.tsx
var React4 = __toESM(require("react"));
var HoverCardPrimitive = __toESM(require("@radix-ui/react-hover-card"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    HoverCardPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// src/components/lexical-editor/plugins/ai-highlight-plugin.tsx
var import_LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
var import_jsx_runtime7 = require("react/jsx-runtime");
var TOGGLE_AI_HIGHLIGHT_COMMAND = (0, import_lexical.createCommand)();
var AiHiglightNode = class _AiHiglightNode extends import_lexical.DecoratorNode {
  constructor(variant, text, correction, onAccept, onDecline, key) {
    super(key);
    this.__variant = variant;
    this.__text = text;
    this.__correction = correction;
    this.__onAccept = onAccept;
    this.__onDecline = onDecline;
  }
  static getType() {
    return "ai-highlight";
  }
  static clone(node) {
    return new _AiHiglightNode(
      node.__variant,
      node.__text,
      node.__correction,
      node.__onAccept,
      node.__onDecline,
      node.__key
    );
  }
  createDOM() {
    return document.createElement("span");
  }
  updateDOM() {
    return false;
  }
  decorate() {
    let textCN = "underline cursor-pointer decoration-2 underline-offset-4 inline ";
    switch (this.__variant) {
      case "error":
        textCN += "decoration-red-500 group-hover:bg-red-100";
        break;
      case "warning":
        textCN += "decoration-yellow-500 group-hover:bg-yellow-100";
        break;
      case "info":
        textCN += "decoration-blue-500 group-hover:bg-blue-100";
        break;
      default:
        break;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(HoverCard, { openDelay: 0, closeDelay: 200, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: textCN, contentEditable: false, children: this.__text }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(HoverCardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "text-sm", children: [
          "... ",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-green-600", children: this.__correction }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-red-600 line-through", children: this.__text }),
          " ..."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2", contentEditable: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            Button,
            {
              size: "sm",
              onClick: () => {
                this.__onAccept();
              },
              children: "Accept"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            Button,
            {
              size: "sm",
              variant: "link",
              onClick: () => {
                this.__onDecline();
              },
              children: "Decline"
            }
          )
        ] })
      ] })
    ] });
  }
};
var $createAiHighlightNode = (variant, text, correction, onAccept, onDecline) => {
  return new AiHiglightNode(variant, text, correction, onAccept, onDecline);
};
function AiHighlightPlugin({
  debugMode
}) {
  const [editor] = (0, import_LexicalComposerContext.useLexicalComposerContext)();
  (0, import_react.useEffect)(() => {
    if (!editor.hasNodes([AiHiglightNode])) {
      throw new Error(
        "TwitterPlugin: TweetNode not registered on editor (initialConfig.nodes)"
      );
    }
    return editor.registerCommand(
      TOGGLE_AI_HIGHLIGHT_COMMAND,
      () => {
        const selection = (0, import_lexical.$getSelection)();
        if (!(0, import_lexical.$isRangeSelection)(selection)) {
          return false;
        }
        const text = selection.getTextContent();
        selection.removeText();
        const correction = "Here is a correction";
        const node = $createAiHighlightNode(
          "error",
          text,
          correction,
          () => {
            editor.update(() => {
              node.replace((0, import_lexical.$createTextNode)(correction));
            });
          },
          () => {
            editor.update(() => {
              node.replace((0, import_lexical.$createTextNode)(text));
            });
          }
        );
        selection.insertNodes([node]);
        return true;
      },
      import_lexical.COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);
  return null;
}

// src/components/lexical-editor/plugins/comment-plugin.tsx
var import_jotai5 = require("jotai");
var import_lexical3 = require("lexical");
var import_react2 = require("react");
var import_LexicalComposerContext2 = require("@lexical/react/LexicalComposerContext");
var import_utils6 = require("@lexical/utils");

// src/components/lexical-editor/plugins/custom-paragraph-plugin.tsx
var import_lexical2 = require("lexical");
var current_id = 0;
var CustomParagraphNode = class _CustomParagraphNode extends import_lexical2.ParagraphNode {
  constructor(comment, active, key) {
    super(key);
    this.__comment = comment != null ? comment : false;
    this.__active = active != null ? active : false;
    this.__id = `customParagraph-${current_id++}`;
  }
  static getType() {
    return "customParagraph";
  }
  static clone(node) {
    return new _CustomParagraphNode(node.__comment, node.__active, node.__key);
  }
  createDOM(config) {
    const element = super.createDOM(config);
    return element;
  }
  updateDOM(prevNode, dom, config) {
    const updated = super.updateDOM(prevNode, dom, config);
    if (prevNode.__comment !== this.__comment) {
      if (this.__comment) {
        dom.classList.add("bg-yellow-200", "dark:bg-yellow-700");
      } else {
        dom.classList.remove("bg-yellow-200", "dark:bg-yellow-700");
      }
    }
    if (prevNode.__active !== this.__active) {
      if (this.__active) {
        dom.classList.add("bg-yellow-400", "dark:bg-yellow-600");
      } else {
        dom.classList.remove("bg-yellow-400", "dark:bg-yellow-600");
      }
    }
    return updated;
  }
  setComment(comment) {
    const writable = this.getWritable();
    writable.__comment = comment;
  }
  setActive(active) {
    const writable = this.getWritable();
    writable.__active = active;
  }
};
function $createCustomParagraphNode(comment, active) {
  return new CustomParagraphNode(comment, active);
}

// src/components/lexical-editor/plugins/comment-plugin.tsx
var HIGHLIGHT_RANGE_COMMAND = (0, import_lexical3.createCommand)();
function CommentPlugin() {
  const [editor] = (0, import_LexicalComposerContext2.useLexicalComposerContext)();
  const currentActiveComment = (0, import_jotai5.useAtomValue)(currentActiveCommentAtom);
  const comments = (0, import_jotai5.useAtomValue)(commentsAtom);
  (0, import_react2.useEffect)(() => {
    return (0, import_utils6.mergeRegister)(
      editor.registerCommand(
        HIGHLIGHT_RANGE_COMMAND,
        ({ paragraphIndex, id }) => {
          const rootNode = (0, import_lexical3.$getRoot)();
          const paragraphNodes = rootNode.getChildren().filter(
            (node) => node instanceof CustomParagraphNode
          );
          const paragraphNode = paragraphNodes[paragraphIndex];
          if (!paragraphNode) {
            return false;
          }
          editor.update(() => {
            paragraphNode.setComment(true);
          });
          return true;
        },
        import_lexical3.COMMAND_PRIORITY_EDITOR
      )
    );
  }, [editor]);
  (0, import_react2.useEffect)(() => {
    editor.update(() => {
      const rootNode = (0, import_lexical3.$getRoot)();
      const paragraphNodes = rootNode.getChildren().filter(
        (node) => node instanceof CustomParagraphNode
      );
      paragraphNodes.forEach((node) => {
        node.setComment(false);
      });
    });
    let addedIndex = 0;
    comments.forEach((comment) => {
      editor.dispatchCommand(HIGHLIGHT_RANGE_COMMAND, {
        paragraphIndex: comment.paragraphIndex,
        id: comment.id
      });
      addedIndex++;
    });
  }, [comments]);
  (0, import_react2.useEffect)(() => {
    editor.update(() => {
      const rootNode = (0, import_lexical3.$getRoot)();
      const paragraphNodes = rootNode.getChildren().filter(
        (node) => node instanceof CustomParagraphNode
      );
      paragraphNodes.forEach((node) => {
        node.setActive(false);
      });
      if (currentActiveComment) {
        const { paragraphIndex } = currentActiveComment;
        const rootNode2 = (0, import_lexical3.$getRoot)();
        const paragraphNodes2 = rootNode2.getChildren().filter(
          (node) => node instanceof CustomParagraphNode
        );
        const paragraphNode = paragraphNodes2[paragraphIndex];
        if (!paragraphNode) {
          return;
        }
        paragraphNode.setActive(true);
      }
    });
  }, [currentActiveComment, comments]);
  return null;
}

// src/components/time-travel/index.tsx
var import_jotai10 = require("jotai");
var import_react6 = require("react");

// src/stores/time-travel.ts
var import_jotai6 = require("jotai");
var import_jotai_optics2 = require("jotai-optics");
var timeTravelAtom = (0, import_jotai6.atom)({
  timeTravelState: "recording" /* Recording */,
  timeTravelRecorderState: "idle" /* Idle */,
  timeTravelReplayerState: "idle" /* Idle */,
  currentTimeTravelLog: [],
  timeTravelLogList: [],
  latestEditorState: null,
  blockThresholdInSec: 5
});
var currentTimeTravelLogAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("currentTimeTravelLog")
);
var timeTravelLogListAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("timeTravelLogList")
);
var timeTravelRecorderStateAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("timeTravelRecorderState")
);
var timeTravelReplayerStateAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("timeTravelReplayerState")
);
var timeTravelStateAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("timeTravelState")
);
var latestEditorStateAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("latestEditorState")
);
var blockThresholdInSecAtom = (0, import_jotai_optics2.focusAtom)(
  timeTravelAtom,
  (optic) => optic.prop("blockThresholdInSec")
);

// src/components/time-travel/index.tsx
var import_LexicalComposerContext6 = require("@lexical/react/LexicalComposerContext");
var import_react_label2 = require("@radix-ui/react-label");

// src/components/ui/input.tsx
var React5 = __toESM(require("react"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var Input = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "input",
      __spreadValues({
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";

// src/components/time-travel/recorder.tsx
var import_jotai8 = require("jotai");
var import_react3 = require("react");
var import_sonner = require("sonner");
var import_LexicalComposerContext4 = require("@lexical/react/LexicalComposerContext");
var import_utils9 = require("@lexical/utils");
var import_react_icons = require("@radix-ui/react-icons");

// src/components/time-travel/log-list.tsx
var import_jotai7 = require("jotai");
var import_LexicalComposerContext3 = require("@lexical/react/LexicalComposerContext");

// src/components/ui/table.tsx
var React6 = __toESM(require("react"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Table = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "table",
    __spreadValues({
      ref,
      className: cn("w-full caption-bottom text-sm", className)
    }, props)
  ) });
});
Table.displayName = "Table";
var TableHeader = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("thead", __spreadValues({ ref, className: cn("[&_tr]:border-b", className) }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "tbody",
    __spreadValues({
      ref,
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
});
TableBody.displayName = "TableBody";
var TableFooter = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "tfoot",
    __spreadValues({
      ref,
      className: cn("bg-primary font-medium text-primary-foreground", className)
    }, props)
  );
});
TableFooter.displayName = "TableFooter";
var TableRow = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "tr",
    __spreadValues({
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )
    }, props)
  );
});
TableRow.displayName = "TableRow";
var TableHead = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "th",
    __spreadValues({
      ref,
      className: cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
});
TableHead.displayName = "TableHead";
var TableCell = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "td",
    __spreadValues({
      ref,
      className: cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
});
TableCell.displayName = "TableCell";
var TableCaption = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "caption",
    __spreadValues({
      ref,
      className: cn("mt-4 text-sm text-muted-foreground", className)
    }, props)
  );
});
TableCaption.displayName = "TableCaption";

// src/components/time-travel/log-list.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function LogList() {
  const [editor] = (0, import_LexicalComposerContext3.useLexicalComposerContext)();
  const setLatestEditorState = (0, import_jotai7.useSetAtom)(latestEditorStateAtom);
  const [timeTravelLogList, setTimeTravelLogList] = (0, import_jotai7.useAtom)(
    timeTravelLogListAtom
  );
  const setTimeTravelState = (0, import_jotai7.useSetAtom)(timeTravelStateAtom);
  const setCurrentTimeTravelLog = (0, import_jotai7.useSetAtom)(currentTimeTravelLogAtom);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col space-y-2 w-full", children: timeTravelLogList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-center text-muted-foreground text-sm", children: "No logs yet." }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Table, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableHead, { children: "Save Time" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableHead, { children: "Length" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableHead, { children: "Actions" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableBody, { children: timeTravelLogList.map((log, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(TableRow, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableCell, { children: new Date(log.saveTime).toLocaleString() }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(TableCell, { children: [
        log.log.length,
        " Actions"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(TableCell, { className: "flex space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Button,
          {
            className: "px-0",
            variant: "link",
            onClick: () => {
              setCurrentTimeTravelLog(log.log);
              setLatestEditorState(editor.getEditorState());
              setTimeTravelState("relaying" /* Replaying */);
              editor.focus();
            },
            children: "Replay"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Button,
          {
            className: "px-0",
            variant: "link",
            onClick: () => {
              setTimeTravelLogList(
                (prev) => prev.filter((_, i) => i !== index)
              );
            },
            children: "Delete"
          }
        )
      ] })
    ] }, index)) })
  ] }) });
}

// src/components/time-travel/recorder.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Recorder() {
  const [editor] = (0, import_LexicalComposerContext4.useLexicalComposerContext)();
  const [timeTravelRecorderState, setTimeTravelRecorderState] = (0, import_jotai8.useAtom)(
    timeTravelRecorderStateAtom
  );
  const setTimeTravelLogList = (0, import_jotai8.useSetAtom)(timeTravelLogListAtom);
  const currentTimeTravelLogs = (0, import_react3.useRef)([]);
  (0, import_react3.useEffect)(() => {
    return (0, import_utils9.mergeRegister)(
      editor.registerUpdateListener(({ editorState }) => {
        if (timeTravelRecorderState === "recording" /* Recording */) {
          currentTimeTravelLogs.current = [
            ...currentTimeTravelLogs.current,
            {
              time: Date.now(),
              editorState
            }
          ];
        }
      })
    );
  }, [editor, timeTravelRecorderState]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col space-y-4 w-full", children: [
    timeTravelRecorderState === "idle" /* Idle */ && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      Button,
      {
        variant: "default",
        onClick: () => {
          currentTimeTravelLogs.current = [];
          setTimeTravelRecorderState("recording" /* Recording */);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_icons.PlayIcon, { className: "w-4 h-4 mr-2" }),
          "Start Recording"
        ]
      }
    ),
    timeTravelRecorderState === "recording" /* Recording */ && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      Button,
      {
        variant: "outline",
        onClick: () => {
          setTimeTravelRecorderState("idle" /* Idle */);
          setTimeTravelLogList((prev) => [
            ...prev,
            {
              saveTime: Date.now(),
              log: currentTimeTravelLogs.current
            }
          ]);
          import_sonner.toast.success("Recording saved.");
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_icons.StopIcon, { className: "w-4 h-4 mr-2" }),
          "Stop Recording"
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LogList, {})
  ] });
}

// src/components/time-travel/replayer.tsx
var import_jotai9 = require("jotai");
var import_react5 = require("react");

// src/components/ui/label.tsx
var React7 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime12 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React7.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    LabelPrimitive.Root,
    __spreadValues({
      ref,
      className: cn(labelVariants(), className)
    }, props)
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/slider.tsx
var React8 = __toESM(require("react"));
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Slider = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    SliderPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
      ]
    })
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/ui/toggle.tsx
var React9 = __toESM(require("react"));
var TogglePrimitive = __toESM(require("@radix-ui/react-toggle"));
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority3.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React9.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    TogglePrimitive.Root,
    __spreadValues({
      ref,
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/time-travel/replayer.tsx
var import_LexicalComposerContext5 = require("@lexical/react/LexicalComposerContext");
var import_react_icons4 = require("@radix-ui/react-icons");

// src/components/ui/scroll-area.tsx
var React10 = __toESM(require("react"));
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"));
var import_jsx_runtime15 = require("react/jsx-runtime");
var ScrollArea = React10.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    ScrollAreaPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("relative overflow-hidden", className)
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ScrollAreaPrimitive.Corner, {})
      ]
    })
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React10.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "vertical" } = _b, props = __objRest(_b, ["className", "orientation"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    __spreadProps(__spreadValues({
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
        className
      )
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          className: cn(
            "relative rounded-full bg-border",
            orientation === "vertical" && "flex-1"
          )
        }
      )
    })
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/ui/tabs.tsx
var React11 = __toESM(require("react"));
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var Tabs = TabsPrimitive.Root;
var TabsList = React11.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    TabsPrimitive.List,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React11.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React11.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/grid-select.tsx
var import_react4 = require("react");

// src/components/ui/tooltip.tsx
var React12 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React12.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/grid-select.tsx
var import_react_icons2 = require("@radix-ui/react-icons");
var import_react_label = require("@radix-ui/react-label");
var import_jsx_runtime18 = require("react/jsx-runtime");
function GridSelect({
  label,
  options,
  value,
  onChange,
  leftIndication,
  rightIndication
}) {
  const [selected, setSelected] = (0, import_react4.useState)(value);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-col space-y-3", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_label.Label, { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Tooltip, { delayDuration: 100, children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Button, { size: "icon", variant: "link", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_icons2.InfoCircledIcon, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TooltipContent, { children: label })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: `flex flex-row divide-solid divide-x border rounded`, children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        Toggle,
        {
          variant: "outline",
          className: `rounded-none flex flex-1 justify-center items-center`,
          pressed: selected === option,
          onPressedChange: (pressed) => {
            if (pressed) {
              setSelected(option);
              onChange(option);
            }
          },
          children: option
        },
        index
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-row justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_label.Label, { className: "text-xs text-muted-foreground", children: leftIndication }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_label.Label, { className: "text-xs text-muted-foreground", children: rightIndication })
      ] })
    ] })
  ] });
}

// src/components/ui/sheet.tsx
var React13 = __toESM(require("react"));
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_react_icons3 = require("@radix-ui/react-icons");
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Sheet = SheetPrimitive.Root;
var SheetPortal = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetPrimitive.Portal, __spreadValues({ className: cn(className) }, props));
};
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
var SheetOverlay = React13.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SheetPrimitive.Overlay,
    __spreadProps(__spreadValues({
      className: cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority4.cva)(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React13.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = __objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      SheetPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(sheetVariants({ side }), className)
      }, props), {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_icons3.Cross2Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )
    }, props)
  );
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React13.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SheetPrimitive.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold text-foreground", className)
    }, props)
  );
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React13.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    SheetPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// src/components/time-travel/pause-form.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function PauseForm({
  open,
  onOpenChange,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Sheet,
    {
      defaultOpen: false,
      open,
      onOpenChange,
      modal: false,
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SheetContent, { className: "flex flex-col text-left h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SheetHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SheetTitle, { children: "What was your mental state when you were blocked?" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SheetDescription, { children: "Click on the possibilites below." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Tabs, { defaultValue: "step-1", className: "w-full flex-1 flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(TabsList, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TabsTrigger, { value: "step-1", children: "Step 1" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TabsTrigger, { value: "step-2", children: "Step 2" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(ScrollArea, { className: "flex-1 max-h-[600px] pr-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(TabsContent, { value: "step-1", className: "flex-1 flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col space-y-4 mt-4 mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Label, { className: "text-xl", children: "Planning" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "space-y-4 list-disc", children: [
                  "Generating ideas to write about",
                  "Organizing ideas to write about",
                  "Setting the writing goal"
                ].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  GridSelect,
                  {
                    label: item,
                    options: ["1", "2", "3", "4", "5", "6", "7"],
                    value: "1",
                    onChange: (value) => {
                    },
                    leftIndication: "Highly unlikely",
                    rightIndication: "Highly likely"
                  }
                ) }, index)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col space-y-4 mt-4 mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Label, { className: "text-xl", children: "Translating" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  GridSelect,
                  {
                    options: ["1", "2", "3", "4", "5", "6", "7"],
                    value: "1",
                    onChange: (value) => {
                    },
                    leftIndication: "Highly unlikely",
                    rightIndication: "Highly likely"
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col space-y-4 mt-4 mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Label, { className: "text-xl", children: "Reviewing" }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "space-y-4 list-disc", children: ["Evaluating written text", "Revising written text"].map(
                  (item, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    GridSelect,
                    {
                      label: item,
                      options: ["1", "2", "3", "4", "5", "6", "7"],
                      value: "1",
                      onChange: (value) => {
                      },
                      leftIndication: "Highly unlikely",
                      rightIndication: "Highly likely"
                    }
                  ) }, index)
                ) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TabsContent, { value: "step-2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ScrollArea, { className: "flex-1 pr-4", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col space-y-4 mt-4 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Label, { className: "text-xl", children: "What kinds of AI assistance can help with this block?" }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "space-y-4 list-disc", children: [
                "AI suggests ideas to write about, e.g., \u201C<response from AI>\u201D",
                "AI helps complete the sentence you are writing, e.g., \u201C<response from AI>\u201D",
                "AI provides feedback to the sentence you are writing, e.g., \u201C<response from AI>\u201D"
              ].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                GridSelect,
                {
                  label: item,
                  options: ["1", "2", "3", "4", "5", "6", "7"],
                  value: "1",
                  onChange: (value) => {
                  },
                  leftIndication: "Highly unlikely",
                  rightIndication: "Highly likely"
                }
              ) }, index)) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SheetFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { type: "submit", onClick: onClose, children: "Save changes" }) })
      ] })
    }
  );
}

// src/components/time-travel/replayer.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var PLAYBACK_SPEEDS = [0.5, 0.25, 1, 2, 4];
function Replayer() {
  const [editor] = (0, import_LexicalComposerContext5.useLexicalComposerContext)();
  const timeTravelLogs = (0, import_jotai9.useAtomValue)(currentTimeTravelLogAtom);
  const latestEditorState = (0, import_jotai9.useAtomValue)(latestEditorStateAtom);
  const [replayState, setReplayState] = (0, import_jotai9.useAtom)(timeTravelReplayerStateAtom);
  const [sliderValue, setSliderValue] = (0, import_react5.useState)(0);
  const currentStepRef = (0, import_react5.useRef)(0);
  const [pauseFormOpen, setPauseFormOpen] = (0, import_react5.useState)(false);
  const setTimeTravelState = (0, import_jotai9.useSetAtom)(timeTravelStateAtom);
  const blockThresholdInSec = (0, import_jotai9.useAtomValue)(blockThresholdInSecAtom);
  const setEditorState = (0, import_react5.useCallback)(
    (editorState) => {
      console.log("setEditorState", editorState);
      editor.setEditorState(editorState);
    },
    [editor]
  );
  const totalSteps = timeTravelLogs.length - 1;
  (0, import_react5.useEffect)(() => {
    setEditorState(timeTravelLogs[totalSteps].editorState);
    currentStepRef.current = totalSteps;
    setSliderValue(totalSteps);
  }, [totalSteps]);
  const [playbackSpeedIndex, setPlaybackSpeedIndex] = (0, import_react5.useState)(2);
  (0, import_react5.useEffect)(() => {
    if (replayState === "playing" /* Playing */) {
      let timeoutId;
      const play = () => {
        const currentStep = currentStepRef.current;
        if (currentStepRef.current === totalSteps) {
          setReplayState("finished" /* Finished */);
          return;
        }
        const currentTime = timeTravelLogs[currentStep].time;
        const nextTime = timeTravelLogs[currentStep + 1].time;
        const timeDiff = nextTime - currentTime;
        if (timeDiff > blockThresholdInSec * 1e3) {
          console.log("timeDiff", timeDiff, blockThresholdInSec * 1e3);
          setPauseFormOpen(true);
          setReplayState("idle" /* Idle */);
          return;
        }
        timeoutId = setTimeout(() => {
          currentStepRef.current++;
          setSliderValue(currentStepRef.current);
          const newStep = currentStepRef.current;
          setEditorState(timeTravelLogs[newStep].editorState);
          play();
        }, timeDiff / PLAYBACK_SPEEDS[playbackSpeedIndex]);
      };
      play();
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [
    replayState,
    timeTravelLogs,
    editor,
    playbackSpeedIndex,
    totalSteps,
    blockThresholdInSec
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col space-y-2 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      PauseForm,
      {
        open: pauseFormOpen,
        onOpenChange: setPauseFormOpen,
        onClose: () => {
          setPauseFormOpen(false);
          currentStepRef.current++;
          setSliderValue(currentStepRef.current);
          setReplayState("playing" /* Playing */);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "grid grid-cols-3 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        Toggle,
        {
          className: "justify-self-start",
          variant: "default",
          "aria-label": "autoplay",
          pressed: replayState === "playing" /* Playing */,
          onPressedChange: (pressed) => {
            if (pressed) {
              setReplayState("playing" /* Playing */);
              if (currentStepRef.current === totalSteps) {
                currentStepRef.current = 0;
                setSliderValue(0);
              }
            } else {
              setReplayState("idle" /* Idle */);
              setPauseFormOpen(true);
            }
          },
          children: {
            ["idle" /* Idle */]: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_icons4.PlayIcon, { className: "w-4 h-4" }),
            ["playing" /* Playing */]: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_icons4.StopIcon, { className: "w-4 h-4" }),
            ["finished" /* Finished */]: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_icons4.ReloadIcon, { className: "w-4 h-4" })
          }[replayState]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Label, { className: "justify-self-center", children: [
        "Step ",
        sliderValue,
        "/",
        totalSteps
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        Button,
        {
          variant: "link",
          className: "justify-self-end",
          onClick: () => {
            setPlaybackSpeedIndex(
              (playbackSpeedIndex + 1) % PLAYBACK_SPEEDS.length
            );
          },
          children: [
            PLAYBACK_SPEEDS[playbackSpeedIndex],
            "x"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      Slider,
      {
        min: 1,
        max: totalSteps,
        value: [sliderValue],
        onValueChange: ([ind]) => {
          setSliderValue(ind);
          const editorState = timeTravelLogs[ind].editorState;
          setEditorState(editorState);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      Button,
      {
        variant: "link",
        onClick: () => {
          const index = totalSteps;
          if (latestEditorState) {
            setEditorState(latestEditorState);
          }
          setSliderValue(index);
          setReplayState("idle" /* Idle */);
          setTimeTravelState("recording" /* Recording */);
        },
        children: "Exit"
      }
    ) })
  ] });
}

// src/components/time-travel/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function TimeTravel() {
  const [editor] = (0, import_LexicalComposerContext6.useLexicalComposerContext)();
  const timeTravelState = (0, import_jotai10.useAtomValue)(timeTravelStateAtom);
  const [blockThresholdInSec, setBlockThresholdInSec] = (0, import_jotai10.useAtom)(
    blockThresholdInSecAtom
  );
  (0, import_react6.useEffect)(() => {
    const rootElement = editor.getRootElement();
    if (!rootElement) {
      return;
    }
    rootElement.contentEditable = timeTravelState === "relaying" /* Replaying */ ? "false" : "true";
  }, [editor, timeTravelState]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Card, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CardTitle, { children: "Time Travel" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CardDescription, { children: "See how your essay has evolved." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CardContent, { className: "flex justify-between items-center space-x-2", children: {
      ["recording" /* Recording */]: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Recorder, {}),
      ["relaying" /* Replaying */]: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Replayer, {})
    }[timeTravelState] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col space-y-2 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_label2.Label, { htmlFor: "blockThresholdInSec", children: "Block Threshold (in sec)" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        Input,
        {
          id: "blockThresholdInSec",
          type: "number",
          placeholder: "Block Threshold",
          value: blockThresholdInSec,
          onChange: (e) => {
            setBlockThresholdInSec(Number(e.target.value));
          }
        }
      )
    ] }) })
  ] }) });
}

// src/components/lexical-editor/plugins/timetravel-plugin.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function TimeTravelPlugin() {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "absolute top-0 left-0 z-20 m-4", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TimeTravel, {}) });
}

// src/components/lexical-editor/plugins/treeview-plugin.tsx
var import_LexicalComposerContext7 = require("@lexical/react/LexicalComposerContext");
var import_LexicalTreeView = require("@lexical/react/LexicalTreeView");
var import_jsx_runtime24 = require("react/jsx-runtime");
function TreeViewPlugin() {
  const [editor] = (0, import_LexicalComposerContext7.useLexicalComposerContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    import_LexicalTreeView.TreeView,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      editor
    }
  );
}

// src/components/lexical-editor/plugins/user-behavior-detector-plugin.tsx
var import_jotai11 = require("jotai");
var import_react8 = __toESM(require("react"));

// src/utils/hooks/use-leaving-count.tsx
var import_react7 = require("react");
var useLeavingCount = (onReturning) => {
  const [leaving, setLeaving] = (0, import_react7.useState)(false);
  const [count, setCount] = (0, import_react7.useState)(0);
  const clearCount = () => {
    setCount(0);
  };
  (0, import_react7.useEffect)(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setLeaving(true);
      } else {
        setLeaving(false);
        onReturning == null ? void 0 : onReturning();
        setCount((count2) => count2 + 1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return { leaving, count, clearCount };
};

// src/components/lexical-editor/plugins/user-behavior-detector-plugin.tsx
var import_LexicalComposerContext8 = require("@lexical/react/LexicalComposerContext");
function UserBehaviorDetectorPlugin() {
  const [editor] = (0, import_LexicalComposerContext8.useLexicalComposerContext)();
  const setTypingSpeed = (0, import_jotai11.useSetAtom)(typingSpeedAtom);
  const setProbDistraction = (0, import_jotai11.useSetAtom)(probDistractionAtom);
  const lastCharacterCount = import_react8.default.useRef(0);
  const lastTime = import_react8.default.useRef(Date.now());
  const { count } = useLeavingCount();
  (0, import_react8.useEffect)(() => {
    const removeTextContentListener = editor.registerTextContentListener(
      (textContent) => {
        const characterCount = textContent.length;
        const currentTime = Date.now();
        const typingSpeed = (characterCount - lastCharacterCount.current) / (currentTime - lastTime.current) * 1e3;
        if (typingSpeed > 0) {
          setTypingSpeed(typingSpeed);
        }
        lastCharacterCount.current = characterCount;
        lastTime.current = currentTime;
      }
    );
    return removeTextContentListener;
  }, []);
  (0, import_react8.useEffect)(() => {
    setProbDistraction(count);
  }, [count]);
  return null;
}

// src/components/lexical-editor/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function prepopulatedRichText() {
  const root = (0, import_lexical4.$getRoot)();
  if (root.getFirstChild() === null) {
    const paragraph = $createCustomParagraphNode(false, false);
    paragraph.append(
      (0, import_lexical4.$createTextNode)(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla orci vel ex sagittis pretium. Donec a metus sodales, auctor erat nec, laoreet arcu. In ut nunc vel mi molestie varius eu sit amet ligula. Praesent a consequat tortor. Nullam consequat, metus eu pellentesque ultricies, turpis tortor tempor est, a egestas augue dui in felis. Etiam consectetur, felis sed tincidunt tempor, purus lorem rhoncus sem, eu fermentum nisi dui porttitor lectus. Nunc venenatis volutpat risus ut eleifend."
      )
    );
    root.append(paragraph);
    const paragraph2 = $createCustomParagraphNode(false, false);
    paragraph2.append(
      (0, import_lexical4.$createTextNode)(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla orci vel ex sagittis pretium. Donec a metus sodales, auctor erat nec, laoreet arcu. In ut nunc vel mi molestie varius eu sit amet ligula. Praesent a consequat tortor. Nullam consequat, metus eu pellentesque ultricies, turpis tortor tempor est, a egestas augue dui in felis. Etiam consectetur, felis sed tincidunt tempor, purus lorem rhoncus sem, eu fermentum nisi dui porttitor lectus. Nunc venenatis volutpat risus ut eleifend."
      )
    );
    root.append(paragraph2);
  }
}
function onError(error) {
  console.error(error);
}
function Editor({
  debugMode = false,
  onUserBehaviorChange
}) {
  const config = {
    namespace: "lexical-editor",
    theme: {
      root: "prose dark:prose-invert lg:prose-xl focus:outline-none flex-1 mx-auto",
      link: "cursor-pointer",
      placeholder: "text-gray-400",
      text: {
        bold: "font-semibold",
        underline: "underline",
        italic: "italic",
        strikethrough: "line-through",
        underlineStrikethrough: "underlined-line-through"
      }
    },
    nodes: [
      import_rich_text.HeadingNode,
      import_list.ListNode,
      import_list.ListItemNode,
      import_rich_text.QuoteNode,
      import_code.CodeNode,
      import_code.CodeHighlightNode,
      import_link.AutoLinkNode,
      import_link.LinkNode,
      import_mark.MarkNode,
      AiHiglightNode,
      CustomParagraphNode,
      {
        replace: import_lexical4.ParagraphNode,
        with(node) {
          return new CustomParagraphNode(false, false);
        }
      }
    ],
    onError,
    editorState: prepopulatedRichText
  };
  const typingSpeed = (0, import_jotai12.useAtomValue)(typingSpeedAtom);
  const probDistraction = (0, import_jotai12.useAtomValue)(probDistractionAtom);
  const userBehavior = (0, import_jotai12.useAtomValue)(userBehaviorAtom);
  (0, import_react9.useEffect)(() => {
    onUserBehaviorChange == null ? void 0 : onUserBehaviorChange(userBehavior);
  }, [userBehavior]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "relative h-full overflow-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_sonner2.Toaster, { position: "bottom-left" }),
    debugMode && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Card, { className: "fixed bottom-10 right-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CardTitle, { children: "User Behavior" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm font-medium leading-none", children: "Typing Speed" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
            typingSpeed.toFixed(2),
            " chars/s"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm font-medium leading-none", children: "Distraction Count" }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
            probDistraction,
            " times"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CardFooter, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "h-full flex flex-row justify-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "div",
        {
          className: "w-full relative p-6 rounded-xl border bg-card text-card-foreground shadow",
          children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_LexicalComposer.LexicalComposer, { initialConfig: config, children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              import_LexicalRichTextPlugin.RichTextPlugin,
              {
                contentEditable: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalContentEditable.ContentEditable, {}),
                placeholder: null,
                ErrorBoundary: import_LexicalErrorBoundary.default
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalAutoFocusPlugin.AutoFocusPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalMarkdownShortcutPlugin.MarkdownShortcutPlugin, { transformers: import_markdown.TRANSFORMERS }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalHistoryPlugin.HistoryPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalListPlugin.ListPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalLinkPlugin.LinkPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_LexicalTabIndentationPlugin.TabIndentationPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(AiHighlightPlugin, { debugMode }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(UserBehaviorDetectorPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CommentPlugin, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: !!debugMode && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "absolute bottom-0 left-0 border border-red-500 overflow-auto max-w-full h-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TreeViewPlugin, {}) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TimeTravelPlugin, {})
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CommentList, {})
    ] })
  ] });
}

// src/components/tompi-ui/index.tsx
var import_jotai13 = require("jotai");
var import_sonner3 = require("sonner");
function useTompiUI() {
  const setComments = (0, import_jotai13.useSetAtom)(commentsAtom);
  function notification(message, data) {
    return (0, import_sonner3.toast)(message, data);
  }
  function highlight(editor, text, highlight2) {
    const regex = new RegExp(highlight2, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  }
  function comment(paragraphIndex, comment2) {
    setComments((comments) => {
      return [
        ...comments,
        {
          id: `comment-${comments.length}`,
          type: "comment",
          paragraphIndex,
          comment: comment2
        }
      ];
    });
  }
  const UI = {
    notification,
    highlight,
    comment
  };
  return UI;
}
var tompi_ui_default = useTompiUI;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Editor,
  TimeTravel,
  useTompiUI
});

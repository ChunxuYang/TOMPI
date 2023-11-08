'use client'
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
styleInject('*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n}\n::before,\n::after {\n  --tw-content: "";\n}\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    var(--font-sans),\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n:root {\n  --background: 0 0% 100%;\n  --foreground: 222.2 84% 4.9%;\n  --card: 0 0% 100%;\n  --card-foreground: 222.2 84% 4.9%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 222.2 84% 4.9%;\n  --primary: 222.2 47.4% 11.2%;\n  --primary-foreground: 210 40% 98%;\n  --secondary: 210 40% 96.1%;\n  --secondary-foreground: 222.2 47.4% 11.2%;\n  --muted: 210 40% 96.1%;\n  --muted-foreground: 215.4 16.3% 46.9%;\n  --accent: 210 40% 96.1%;\n  --accent-foreground: 222.2 47.4% 11.2%;\n  --destructive: 0 84.2% 60.2%;\n  --destructive-foreground: 210 40% 98%;\n  --border: 214.3 31.8% 91.4%;\n  --input: 214.3 31.8% 91.4%;\n  --ring: 222.2 84% 4.9%;\n  --radius: 0.5rem;\n}\n.dark {\n  --background: 222.2 84% 4.9%;\n  --foreground: 210 40% 98%;\n  --card: 222.2 84% 4.9%;\n  --card-foreground: 210 40% 98%;\n  --popover: 222.2 84% 4.9%;\n  --popover-foreground: 210 40% 98%;\n  --primary: 210 40% 98%;\n  --primary-foreground: 222.2 47.4% 11.2%;\n  --secondary: 217.2 32.6% 17.5%;\n  --secondary-foreground: 210 40% 98%;\n  --muted: 217.2 32.6% 17.5%;\n  --muted-foreground: 215 20.2% 65.1%;\n  --accent: 217.2 32.6% 17.5%;\n  --accent-foreground: 210 40% 98%;\n  --destructive: 0 62.8% 30.6%;\n  --destructive-foreground: 210 40% 98%;\n  --border: 217.2 32.6% 17.5%;\n  --input: 217.2 32.6% 17.5%;\n  --ring: 212.7 26.8% 83.9%;\n}\n* {\n  border-color: hsl(var(--border));\n}\nbody {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n}\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(a strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n.prose :where(ol[type=A]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=A s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=I]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=I s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type="1"]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: disc;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.25em;\n}\n.prose :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: "\\201c""\\201d""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 900;\n  color: inherit;\n}\n.prose :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 800;\n  color: inherit;\n}\n.prose :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  display: block;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--tw-prose-kbd);\n  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);\n  font-size: 0.875em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1875em;\n  padding-right: 0.375em;\n  padding-bottom: 0.1875em;\n  padding-left: 0.375em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: "`";\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: "`";\n}\n.prose :where(a code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h1 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.9em;\n}\n.prose :where(h4 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: baseline;\n}\n.prose :where(tfoot):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-top-width: 1px;\n  border-top-color: var(--tw-prose-th-borders);\n}\n.prose :where(tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: top;\n}\n.prose :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-kbd: #111827;\n  --tw-prose-kbd-shadows: 17 24 39;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-kbd: #fff;\n  --tw-prose-invert-kbd-shadows: 255 255 255;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(.prose > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(.prose > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(.prose > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  padding-left: 1.625em;\n}\n.prose :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(.prose > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(.prose > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n.paragraph {\n  line-height: 1.75rem;\n}\n.paragraph:not(:first-child) {\n  margin-top: 2rem;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-10 {\n  bottom: 2.5rem;\n}\n.left-0 {\n  left: 0px;\n}\n.right-10 {\n  right: 2.5rem;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.hidden {\n  display: none;\n}\n.h-1\\/2 {\n  height: 50%;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.h-\\[1px\\] {\n  height: 1px;\n}\n.h-full {\n  height: 100%;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-input {\n  border-color: hsl(var(--input));\n}\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 68 68 / var(--tw-border-opacity));\n}\n.bg-border {\n  background-color: hsl(var(--border));\n}\n.bg-card {\n  background-color: hsl(var(--card));\n}\n.bg-destructive {\n  background-color: hsl(var(--destructive));\n}\n.bg-popover {\n  background-color: hsl(var(--popover));\n}\n.bg-primary {\n  background-color: hsl(var(--primary));\n}\n.bg-secondary {\n  background-color: hsl(var(--secondary));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-yellow-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 240 138 / var(--tw-bg-opacity));\n}\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.italic {\n  font-style: italic;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-card-foreground {\n  color: hsl(var(--card-foreground));\n}\n.text-destructive-foreground {\n  color: hsl(var(--destructive-foreground));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n.text-muted-foreground {\n  color: hsl(var(--muted-foreground));\n}\n.text-popover-foreground {\n  color: hsl(var(--popover-foreground));\n}\n.text-primary {\n  color: hsl(var(--primary));\n}\n.text-primary-foreground {\n  color: hsl(var(--primary-foreground));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.text-secondary-foreground {\n  color: hsl(var(--secondary-foreground));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.decoration-blue-500 {\n  text-decoration-color: #3b82f6;\n}\n.decoration-red-500 {\n  text-decoration-color: #ef4444;\n}\n.decoration-yellow-500 {\n  text-decoration-color: #eab308;\n}\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n@keyframes enter {\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.lexical-placeholder {\n  color: #adb5bd;\n  content: attr(data-placeholder);\n  float: left;\n  height: 0;\n  pointer-events: none;\n  position: absolute;\n}\n:is(.dark .dark\\:prose-invert) {\n  --tw-prose-body: var(--tw-prose-invert-body);\n  --tw-prose-headings: var(--tw-prose-invert-headings);\n  --tw-prose-lead: var(--tw-prose-invert-lead);\n  --tw-prose-links: var(--tw-prose-invert-links);\n  --tw-prose-bold: var(--tw-prose-invert-bold);\n  --tw-prose-counters: var(--tw-prose-invert-counters);\n  --tw-prose-bullets: var(--tw-prose-invert-bullets);\n  --tw-prose-hr: var(--tw-prose-invert-hr);\n  --tw-prose-quotes: var(--tw-prose-invert-quotes);\n  --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);\n  --tw-prose-captions: var(--tw-prose-invert-captions);\n  --tw-prose-kbd: var(--tw-prose-invert-kbd);\n  --tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);\n  --tw-prose-code: var(--tw-prose-invert-code);\n  --tw-prose-pre-code: var(--tw-prose-invert-pre-code);\n  --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);\n  --tw-prose-th-borders: var(--tw-prose-invert-th-borders);\n  --tw-prose-td-borders: var(--tw-prose-invert-td-borders);\n}\n@media (min-width: 1024px) {\n  .lg\\:prose-xl {\n    font-size: 1.25rem;\n    line-height: 1.8;\n  }\n  .lg\\:prose-xl :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.2em;\n    line-height: 1.5;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n  .lg\\:prose-xl :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-left: 1.0666667em;\n  }\n  .lg\\:prose-xl :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 2.8em;\n    margin-top: 0;\n    margin-bottom: 0.8571429em;\n    line-height: 1;\n  }\n  .lg\\:prose-xl :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.8em;\n    margin-top: 1.5555556em;\n    margin-bottom: 0.8888889em;\n    line-height: 1.1111111;\n  }\n  .lg\\:prose-xl :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.5em;\n    margin-top: 1.6em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.3333333;\n  }\n  .lg\\:prose-xl :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.8em;\n    margin-bottom: 0.6em;\n    line-height: 1.6;\n  }\n  .lg\\:prose-xl :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    border-radius: 0.3125rem;\n    padding-top: 0.25em;\n    padding-right: 0.4em;\n    padding-bottom: 0.25em;\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n  }\n  .lg\\:prose-xl :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8611111em;\n  }\n  .lg\\:prose-xl :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n  }\n  .lg\\:prose-xl :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.7777778;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.5rem;\n    padding-top: 1.1111111em;\n    padding-right: 1.3333333em;\n    padding-bottom: 1.1111111em;\n    padding-left: 1.3333333em;\n  }\n  .lg\\:prose-xl :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6em;\n    margin-bottom: 0.6em;\n  }\n  .lg\\:prose-xl :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n  .lg\\:prose-xl :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2.8em;\n    margin-bottom: 2.8em;\n  }\n  .lg\\:prose-xl :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n  }\n  .lg\\:prose-xl :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n  .lg\\:prose-xl :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-xl :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-xl :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-top: 0.8888889em;\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n  .lg\\:prose-xl :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-xl :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-xl :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n    margin-top: 1em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 0;\n  }\n}\n.hover\\:bg-accent:hover {\n  background-color: hsl(var(--accent));\n}\n.hover\\:bg-destructive\\/90:hover {\n  background-color: hsl(var(--destructive) / 0.9);\n}\n.hover\\:bg-primary\\/90:hover {\n  background-color: hsl(var(--primary) / 0.9);\n}\n.hover\\:bg-secondary\\/80:hover {\n  background-color: hsl(var(--secondary) / 0.8);\n}\n.hover\\:text-accent-foreground:hover {\n  color: hsl(var(--accent-foreground));\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--ring));\n}\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n.group:hover .group-hover\\:bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}\n.data-\\[state\\=open\\]\\:animate-in[data-state=open] {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {\n  --tw-exit-opacity: 0;\n}\n.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {\n  --tw-enter-opacity: 0;\n}\n.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {\n  --tw-exit-scale: .95;\n}\n.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {\n  --tw-enter-scale: .95;\n}\n.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {\n  --tw-enter-translate-y: -0.5rem;\n}\n.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {\n  --tw-enter-translate-x: 0.5rem;\n}\n.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {\n  --tw-enter-translate-x: -0.5rem;\n}\n.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {\n  --tw-enter-translate-y: 0.5rem;\n}\n:is(.dark .dark\\:bg-yellow-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(202 138 4 / var(--tw-bg-opacity));\n}\n:is(.dark .dark\\:bg-yellow-700) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\n}\n');

// src/components/lexical-editor/index.tsx
import { useAtomValue as useAtomValue4 } from "jotai";
import {
  $createTextNode as $createTextNode2,
  $getRoot as $getRoot2,
  ParagraphNode as ParagraphNode2
} from "lexical";
import { useTheme } from "next-themes";
import { useEffect as useEffect5 } from "react";
import { Toaster } from "sonner";

// src/components/comment/comment-list.tsx
import { useAtom as useAtom2 } from "jotai";
import { splitAtom } from "jotai/utils";

// src/components/comment/comment-item.tsx
import { useAtom, useAtomValue } from "jotai";

// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
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
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
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
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";

// src/stores/comments.ts
import { atom, createStore } from "jotai";
import { atomWithStore } from "jotai-zustand";
import { createStore as createZustandStore } from "zustand/vanilla";
var commentsAtom = atom([]);
var store = createStore();
var currentActiveCommentAtom = atom((get) => {
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
var commentIdStore = createZustandStore(() => ({
  activeCommentId: null
}));
var currentActiveCommentIdAtom = atomWithStore(commentIdStore);

// src/components/comment/comment-item.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function CommentItem({
  commentAtom,
  onRemove
}) {
  const comment = useAtomValue(commentAtom);
  const [currentActiveCommentId, setCurrentActiveCommentId] = useAtom(
    currentActiveCommentIdAtom
  );
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: "w-64",
      onMouseEnter: () => setCurrentActiveCommentId(() => ({ activeCommentId: comment.id })),
      onMouseLeave: () => setCurrentActiveCommentId(() => ({ activeCommentId: null })),
      children: [
        /* @__PURE__ */ jsx3(CardHeader, { children: /* @__PURE__ */ jsx3(CardTitle, { children: comment.comment }) }),
        currentActiveCommentId.activeCommentId === comment.id && /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx3(
            Button,
            {
              variant: "outline",
              onClick: () => {
                console.log("remove");
                onRemove();
              },
              children: "Decline"
            }
          ),
          /* @__PURE__ */ jsx3(Button, { children: "Accept" })
        ] })
      ]
    }
  );
}

// src/components/comment/comment-list.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function CommentList() {
  const splitedComments = splitAtom(commentsAtom);
  const [comments, dispatch] = useAtom2(splitedComments);
  return /* @__PURE__ */ jsx4("div", { className: "space-y-4 min-w-fit", children: comments.map((comment, id) => /* @__PURE__ */ jsx4(
    CommentItem,
    {
      commentAtom: comment,
      onRemove: () => {
        console.log("remove");
        dispatch({ type: "remove", atom: comment });
      }
    },
    id
  )) });
}

// src/components/ui/separator.tsx
import * as React3 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx5 } from "react/jsx-runtime";
var Separator = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ jsx5(
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
import { atom as atom2 } from "jotai";
import { focusAtom } from "jotai-optics";
var userBehaviorAtom = atom2({
  duration_block: 0,
  typing_speed: 0,
  sentence_complete: 0,
  revision_frequency: 0,
  prob_distraction: 0
});
var durationBlockAtom = focusAtom(
  userBehaviorAtom,
  (optic) => optic.prop("duration_block")
);
var typingSpeedAtom = focusAtom(
  userBehaviorAtom,
  (optic) => optic.prop("typing_speed")
);
var sentenceCompleteAtom = focusAtom(
  userBehaviorAtom,
  (optic) => optic.prop("sentence_complete")
);
var revisionFrequencyAtom = focusAtom(
  userBehaviorAtom,
  (optic) => optic.prop("revision_frequency")
);
var probDistractionAtom = focusAtom(
  userBehaviorAtom,
  (optic) => optic.prop("prob_distraction")
);

// src/components/lexical-editor/index.tsx
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { MarkNode } from "@lexical/mark";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {
  LexicalComposer
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

// src/components/lexical-editor/plugins/ai-highlight-plugin.tsx
import {
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  DecoratorNode
} from "lexical";
import { useEffect } from "react";

// src/components/ui/hover-card.tsx
import * as React4 from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { jsx as jsx6 } from "react/jsx-runtime";
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx6(
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
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var TOGGLE_AI_HIGHLIGHT_COMMAND = createCommand();
var AiHiglightNode = class _AiHiglightNode extends DecoratorNode {
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
    return /* @__PURE__ */ jsxs2(HoverCard, { openDelay: 0, closeDelay: 200, children: [
      /* @__PURE__ */ jsx7(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsx7("span", { className: textCN, contentEditable: false, children: this.__text }) }),
      /* @__PURE__ */ jsxs2(HoverCardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs2("div", { className: "text-sm", children: [
          "... ",
          /* @__PURE__ */ jsx7("span", { className: "text-green-600", children: this.__correction }),
          " ",
          /* @__PURE__ */ jsx7("span", { className: "text-red-600 line-through", children: this.__text }),
          " ..."
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", contentEditable: false, children: [
          /* @__PURE__ */ jsx7(
            Button,
            {
              size: "sm",
              onClick: () => {
                this.__onAccept();
              },
              children: "Accept"
            }
          ),
          /* @__PURE__ */ jsx7(
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
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([AiHiglightNode])) {
      throw new Error(
        "TwitterPlugin: TweetNode not registered on editor (initialConfig.nodes)"
      );
    }
    return editor.registerCommand(
      TOGGLE_AI_HIGHLIGHT_COMMAND,
      () => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) {
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
              node.replace($createTextNode(correction));
            });
          },
          () => {
            editor.update(() => {
              node.replace($createTextNode(text));
            });
          }
        );
        selection.insertNodes([node]);
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);
  return null;
}

// src/components/lexical-editor/plugins/comment-plugin.tsx
import { useAtomValue as useAtomValue3 } from "jotai";
import {
  $getRoot,
  COMMAND_PRIORITY_EDITOR as COMMAND_PRIORITY_EDITOR2,
  createCommand as createCommand2
} from "lexical";
import { useEffect as useEffect2 } from "react";
import { useLexicalComposerContext as useLexicalComposerContext2 } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";

// src/components/lexical-editor/plugins/custom-paragraph-plugin.tsx
import { ParagraphNode } from "lexical";
var current_id = 0;
var CustomParagraphNode = class _CustomParagraphNode extends ParagraphNode {
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
var HIGHLIGHT_RANGE_COMMAND = createCommand2();
function CommentPlugin() {
  const [editor] = useLexicalComposerContext2();
  const currentActiveComment = useAtomValue3(currentActiveCommentAtom);
  const comments = useAtomValue3(commentsAtom);
  useEffect2(() => {
    return mergeRegister(
      editor.registerCommand(
        HIGHLIGHT_RANGE_COMMAND,
        ({ paragraphIndex, id }) => {
          const rootNode = $getRoot();
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
        COMMAND_PRIORITY_EDITOR2
      )
    );
  }, [editor]);
  useEffect2(() => {
    editor.update(() => {
      const rootNode = $getRoot();
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
  useEffect2(() => {
    editor.update(() => {
      const rootNode = $getRoot();
      const paragraphNodes = rootNode.getChildren().filter(
        (node) => node instanceof CustomParagraphNode
      );
      paragraphNodes.forEach((node) => {
        node.setActive(false);
      });
      if (currentActiveComment) {
        const { paragraphIndex } = currentActiveComment;
        const rootNode2 = $getRoot();
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

// src/components/lexical-editor/plugins/treeview-plugin.tsx
import { useLexicalComposerContext as useLexicalComposerContext3 } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";
import { jsx as jsx8 } from "react/jsx-runtime";
function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext3();
  return /* @__PURE__ */ jsx8(
    TreeView,
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
import { useSetAtom } from "jotai";
import React5, { useEffect as useEffect4 } from "react";

// src/utils/hooks/use-leaving-count.tsx
import { useEffect as useEffect3, useState } from "react";
var useLeavingCount = (onReturning) => {
  const [leaving, setLeaving] = useState(false);
  const [count, setCount] = useState(0);
  const clearCount = () => {
    setCount(0);
  };
  useEffect3(() => {
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
import { useLexicalComposerContext as useLexicalComposerContext4 } from "@lexical/react/LexicalComposerContext";
function UserBehaviorDetectorPlugin() {
  const [editor] = useLexicalComposerContext4();
  const setTypingSpeed = useSetAtom(typingSpeedAtom);
  const setProbDistraction = useSetAtom(probDistractionAtom);
  const lastCharacterCount = React5.useRef(0);
  const lastTime = React5.useRef(Date.now());
  const { count } = useLeavingCount();
  useEffect4(() => {
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
  useEffect4(() => {
    setProbDistraction(count);
  }, [count]);
  return null;
}

// src/components/lexical-editor/index.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
function prepopulatedRichText() {
  const root = $getRoot2();
  if (root.getFirstChild() === null) {
    const paragraph = $createCustomParagraphNode(false, false);
    paragraph.append(
      $createTextNode2(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla orci vel ex sagittis pretium. Donec a metus sodales, auctor erat nec, laoreet arcu. In ut nunc vel mi molestie varius eu sit amet ligula. Praesent a consequat tortor. Nullam consequat, metus eu pellentesque ultricies, turpis tortor tempor est, a egestas augue dui in felis. Etiam consectetur, felis sed tincidunt tempor, purus lorem rhoncus sem, eu fermentum nisi dui porttitor lectus. Nunc venenatis volutpat risus ut eleifend."
      )
    );
    root.append(paragraph);
    const paragraph2 = $createCustomParagraphNode(false, false);
    paragraph2.append(
      $createTextNode2(
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
  const { theme } = useTheme();
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
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
      MarkNode,
      AiHiglightNode,
      CustomParagraphNode,
      {
        replace: ParagraphNode2,
        with(node) {
          return new CustomParagraphNode(false, false);
        }
      }
    ],
    onError,
    editorState: prepopulatedRichText
  };
  const typingSpeed = useAtomValue4(typingSpeedAtom);
  const probDistraction = useAtomValue4(probDistractionAtom);
  const userBehavior = useAtomValue4(userBehaviorAtom);
  useEffect5(() => {
    onUserBehaviorChange == null ? void 0 : onUserBehaviorChange(userBehavior);
  }, [userBehavior]);
  return /* @__PURE__ */ jsxs3("div", { className: "relative h-full overflow-auto", children: [
    /* @__PURE__ */ jsx9(Toaster, { position: "bottom-left", theme }),
    debugMode && /* @__PURE__ */ jsxs3(Card, { className: "fixed bottom-10 right-10", children: [
      /* @__PURE__ */ jsx9(CardHeader, { children: /* @__PURE__ */ jsx9(CardTitle, { children: "User Behavior" }) }),
      /* @__PURE__ */ jsx9(CardContent, { children: /* @__PURE__ */ jsxs3("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium leading-none", children: "Typing Speed" }),
          /* @__PURE__ */ jsxs3("p", { className: "text-sm text-muted-foreground", children: [
            typingSpeed.toFixed(2),
            " chars/s"
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium leading-none", children: "Distraction Count" }),
          /* @__PURE__ */ jsxs3("p", { className: "text-sm text-muted-foreground", children: [
            probDistraction,
            " times"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx9(CardFooter, {})
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "h-full flex flex-row justify-center space-x-4", children: [
      /* @__PURE__ */ jsx9(
        "div",
        {
          className: "w-full relative p-6 rounded-xl border bg-card text-card-foreground shadow",
          children: /* @__PURE__ */ jsxs3(LexicalComposer, { initialConfig: config, children: [
            /* @__PURE__ */ jsx9(
              RichTextPlugin,
              {
                contentEditable: /* @__PURE__ */ jsx9(ContentEditable, {}),
                placeholder: null,
                ErrorBoundary: LexicalErrorBoundary
              }
            ),
            /* @__PURE__ */ jsx9(AutoFocusPlugin, {}),
            /* @__PURE__ */ jsx9(MarkdownShortcutPlugin, { transformers: TRANSFORMERS }),
            /* @__PURE__ */ jsx9(HistoryPlugin, {}),
            /* @__PURE__ */ jsx9(ListPlugin, {}),
            /* @__PURE__ */ jsx9(LinkPlugin, {}),
            /* @__PURE__ */ jsx9(TabIndentationPlugin, {}),
            /* @__PURE__ */ jsx9(AiHighlightPlugin, { debugMode }),
            /* @__PURE__ */ jsx9(UserBehaviorDetectorPlugin, {}),
            /* @__PURE__ */ jsx9(CommentPlugin, {}),
            /* @__PURE__ */ jsx9(Fragment, { children: !!debugMode && /* @__PURE__ */ jsx9("div", { className: "absolute bottom-0 left-0 border border-red-500 overflow-auto max-w-full h-1/2", children: /* @__PURE__ */ jsx9(TreeViewPlugin, {}) }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx9(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ jsx9(CommentList, {})
    ] })
  ] });
}

// src/components/tompi-ui/index.tsx
import { useSetAtom as useSetAtom2 } from "jotai";
import { toast } from "sonner";
function useTompiUI() {
  const setComments = useSetAtom2(commentsAtom);
  function notification(message, data) {
    return toast(message, data);
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
export {
  Editor,
  tompi_ui_default as useTompiUI
};

'use client'
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
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
styleInject("@tailwind base;\n@tailwind components;\n@tailwind utilities;\n@layer base {\n  :root {\n    --background: 0 0% 100%;\n    --foreground: 222.2 84% 4.9%;\n    --card: 0 0% 100%;\n    --card-foreground: 222.2 84% 4.9%;\n    --popover: 0 0% 100%;\n    --popover-foreground: 222.2 84% 4.9%;\n    --primary: 222.2 47.4% 11.2%;\n    --primary-foreground: 210 40% 98%;\n    --secondary: 210 40% 96.1%;\n    --secondary-foreground: 222.2 47.4% 11.2%;\n    --muted: 210 40% 96.1%;\n    --muted-foreground: 215.4 16.3% 46.9%;\n    --accent: 210 40% 96.1%;\n    --accent-foreground: 222.2 47.4% 11.2%;\n    --destructive: 0 84.2% 60.2%;\n    --destructive-foreground: 210 40% 98%;\n    --border: 214.3 31.8% 91.4%;\n    --input: 214.3 31.8% 91.4%;\n    --ring: 222.2 84% 4.9%;\n    --radius: 0.5rem;\n  }\n  .dark {\n    --background: 222.2 84% 4.9%;\n    --foreground: 210 40% 98%;\n    --card: 222.2 84% 4.9%;\n    --card-foreground: 210 40% 98%;\n    --popover: 222.2 84% 4.9%;\n    --popover-foreground: 210 40% 98%;\n    --primary: 210 40% 98%;\n    --primary-foreground: 222.2 47.4% 11.2%;\n    --secondary: 217.2 32.6% 17.5%;\n    --secondary-foreground: 210 40% 98%;\n    --muted: 217.2 32.6% 17.5%;\n    --muted-foreground: 215 20.2% 65.1%;\n    --accent: 217.2 32.6% 17.5%;\n    --accent-foreground: 210 40% 98%;\n    --destructive: 0 62.8% 30.6%;\n    --destructive-foreground: 210 40% 98%;\n    --border: 217.2 32.6% 17.5%;\n    --input: 217.2 32.6% 17.5%;\n    --ring: 212.7 26.8% 83.9%;\n  }\n}\n@layer base {\n  * {\n    @apply border-border;\n  }\n  body {\n    @apply bg-background text-foreground;\n  }\n}\n@layer components {\n  .title {\n    @apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl select-none;\n  }\n  .paragraph {\n    @apply leading-7 [&:not(:first-child)]:mt-8;\n  }\n}\n.lexical-placeholder {\n  color: #adb5bd;\n  content: attr(data-placeholder);\n  float: left;\n  height: 0;\n  pointer-events: none;\n  position: absolute;\n}\n");

// src/components/lexical-editor/index.tsx
import { useAtomValue as useAtomValue4 } from "jotai";
import {
  $createTextNode as $createTextNode2,
  $getRoot as $getRoot2,
  ParagraphNode as ParagraphNode3
} from "lexical";
import { useTheme } from "next-themes";
import { useEffect as useEffect8 } from "react";
import { Toaster } from "sonner";

// src/components/comment/comment-item.tsx
import { useAtom, useAtomValue } from "jotai";

// src/stores/comments.ts
import { atom, createStore } from "jotai";
import { atomWithStore } from "jotai-zustand";
import { splitAtom } from "jotai/utils";
import { createStore as createZustandStore } from "zustand/vanilla";
var _commentsAtom = atom([
  {
    id: "3da02fe4-1eb7-41e9-b0a4-7ebc7f8acf7e",
    paragraphIndex: 0,
    comment: "This is a comment"
  },
  {
    id: "146b4244-2030-4a18-be2b-238b29dcc781",
    paragraphIndex: 1,
    comment: "This is another comment"
  }
]);
var commentsAtom = splitAtom(_commentsAtom);
var store = createStore();
var currentActiveCommentAtom = atom((get) => {
  var _a;
  const comments = get(_commentsAtom);
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

// ../ui/dist/index.mjs
import * as React8 from "react";

// ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// ../../node_modules/.pnpm/tailwind-merge@2.0.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  const separator = config.separator;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  return function splitModifiers(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index2 = 0; index2 < className.length; index2++) {
      let currentCharacter = className[index2];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index2, index2 + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index2;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return __spreadValues({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(originalClassName);
    let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter((parsed) => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map((parsed) => parsed.originalClassName).join(" ");
}
function twJoin() {
  let index2 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index2 < arguments.length) {
    if (argument = arguments[index2++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
function getDefaultConfig() {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isLength, isArbitraryValue]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// ../ui/dist/index.mjs
import { jsx } from "react/jsx-runtime";
import * as React22 from "react";

// ../../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// ../../node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs
import { forwardRef as $9IrjX$forwardRef, Children as $9IrjX$Children, isValidElement as $9IrjX$isValidElement, createElement as $9IrjX$createElement, cloneElement as $9IrjX$cloneElement, Fragment as $9IrjX$Fragment } from "react";

// ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import { useCallback as $3vqmr$useCallback } from "react";
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return $3vqmr$useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// ../../node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ $9IrjX$forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  const childrenArray = $9IrjX$Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if ($9IrjX$Children.count(newElement) > 1)
          return $9IrjX$Children.only(null);
        return /* @__PURE__ */ $9IrjX$isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ $9IrjX$createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ $9IrjX$isValidElement(newElement) ? /* @__PURE__ */ $9IrjX$cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ $9IrjX$createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ $9IrjX$forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  if (/* @__PURE__ */ $9IrjX$isValidElement(children))
    return /* @__PURE__ */ $9IrjX$cloneElement(children, __spreadProps(__spreadValues({}, $5e63c961fc1ce211$var$mergeProps(slotProps, children.props)), {
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    }));
  return $9IrjX$Children.count(children) > 1 ? $9IrjX$Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ $9IrjX$createElement($9IrjX$Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ $9IrjX$isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = __spreadValues({}, childProps);
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return __spreadValues(__spreadValues({}, slotProps), overrideProps);
}

// ../../node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let _a = param1, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// ../ui/dist/index.mjs
import { jsx as jsx2 } from "react/jsx-runtime";
import * as React32 from "react";

// ../../node_modules/.pnpm/@radix-ui+react-hover-card@1.0.7_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-hover-card/dist/index.mjs
import { useRef as $eRSIW$useRef, useCallback as $eRSIW$useCallback, useEffect as $eRSIW$useEffect, createElement as $eRSIW$createElement, forwardRef as $eRSIW$forwardRef, useState as $eRSIW$useState } from "react";

// ../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// ../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs
import { createContext as $3bkAK$createContext, useMemo as $3bkAK$useMemo, createElement as $3bkAK$createElement, useContext as $3bkAK$useContext } from "react";
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ $3bkAK$createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const _a = props, { scope, children } = _a, context = __objRest(_a, ["scope", "children"]);
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = $3bkAK$useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ $3bkAK$createElement(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = $3bkAK$useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ $3bkAK$createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return $3bkAK$useMemo(
        () => ({
          [`__scope${scopeName}`]: __spreadProps(__spreadValues({}, scope), {
            [scopeName]: contexts
          })
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return __spreadValues(__spreadValues({}, nextScopes), currentScope);
      }, {});
      return $3bkAK$useMemo(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import { useCallback as $bnPw9$useCallback, useState as $bnPw9$useState, useRef as $bnPw9$useRef, useEffect as $bnPw9$useEffect } from "react";

// ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
import { useRef as $lwiWj$useRef, useEffect as $lwiWj$useEffect, useMemo as $lwiWj$useMemo } from "react";
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = $lwiWj$useRef(callback);
  $lwiWj$useEffect(() => {
    callbackRef.current = callback;
  });
  return $lwiWj$useMemo(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = $bnPw9$useCallback((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = $bnPw9$useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = $bnPw9$useRef(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  $bnPw9$useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// ../../node_modules/.pnpm/@radix-ui+react-popper@1.1.3_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-popper/dist/index.mjs
import { useState as $kY93V$useState, createElement as $kY93V$createElement, forwardRef as $kY93V$forwardRef, useRef as $kY93V$useRef, useEffect as $kY93V$useEffect } from "react";

// ../../node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// ../../node_modules/.pnpm/@floating-ui+core@1.5.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = (reference, floating, config) => __async(void 0, null, function* () {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
  let rects = yield platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? yield platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
});
function detectOverflow(state, options) {
  return __async(this, null, function* () {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(yield platform2.getClippingRect({
      element: ((_await$platform$isEle = yield platform2.isElement == null ? void 0 : platform2.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x,
      y
    }) : rects.reference;
    const offsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating);
    const offsetScale = (yield platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? (yield platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
}
var arrow = (options) => ({
  name: "arrow",
  options,
  fn(state) {
    return __async(this, null, function* () {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = yield platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element);
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !(yield platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: __spreadValues({
          [axis]: offset2,
          centerOffset: center - offset2 - alignmentOffset
        }, shouldAddOffset && {
          alignmentOffset
        }),
        reset: shouldAddOffset
      };
    });
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    fn(state) {
      return __async(this, null, function* () {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      });
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          rects
        } = state;
        const _a2 = evaluate(options, state), {
          strategy = "referenceHidden"
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "strategy"
        ]);
        switch (strategy) {
          case "referenceHidden": {
            const overflow = yield detectOverflow(state, __spreadProps(__spreadValues({}, detectOverflowOptions), {
              elementContext: "reference"
            }));
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case "escaped": {
            const overflow = yield detectOverflow(state, __spreadProps(__spreadValues({}, detectOverflowOptions), {
              altBoundary: true
            }));
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default: {
            return {};
          }
        }
      });
    }
  };
};
function convertValueToCoords(state, options) {
  return __async(this, null, function* () {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : __spreadValues({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, rawValue);
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x,
          y
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      });
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x,
          y,
          placement
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x,
          y
        };
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, state), {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        }));
        return __spreadProps(__spreadValues({}, limitedCoords), {
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        });
      });
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : __spreadValues({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          apply = () => {
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "apply"
        ]);
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === ((yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        yield apply(__spreadProps(__spreadValues({}, state), {
          availableWidth,
          availableHeight
        }));
        const nextDimensions = yield platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      });
    }
  };
};

// ../../node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// ../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = __spreadProps(__spreadValues({}, clippingAncestor), {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = function(_ref) {
  return __async(this, null, function* () {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
      floating: __spreadValues({
        x: 0,
        y: 0
      }, yield getDimensionsFn(floating))
    };
  });
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// ../../node_modules/.pnpm/@floating-ui+react-dom@2.0.2_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React from "react";
import { useLayoutEffect, useEffect } from "react";
import * as ReactDOM from "react-dom";
var arrow2 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? useLayoutEffect : useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = __spreadProps(__spreadValues({}, data2), {
        isPositioned: true
      });
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => __spreadProps(__spreadValues({}, data2), {
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return __spreadValues(__spreadProps(__spreadValues({}, initialStyles), {
        transform: "translate(" + x + "px, " + y + "px)"
      }), getDPR(elements.floating) >= 1.5 && {
        willChange: "transform"
      });
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => __spreadProps(__spreadValues({}, data), {
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// ../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs
import { forwardRef as $4q5Fq$forwardRef, useEffect as $4q5Fq$useEffect, createElement as $4q5Fq$createElement } from "react";
import { flushSync as $4q5Fq$flushSync } from "react-dom";
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ $4q5Fq$forwardRef((props, forwardedRef) => {
    const _a = props, { asChild } = _a, primitiveProps = __objRest(_a, ["asChild"]);
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    $4q5Fq$useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ $4q5Fq$createElement(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return __spreadProps(__spreadValues({}, primitive), {
    [node]: Node2
  });
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    $4q5Fq$flushSync(
      () => target.dispatchEvent(event)
    );
}

// ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import { useLayoutEffect as $dxlwH$useLayoutEffect } from "react";
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? $dxlwH$useLayoutEffect : () => {
};

// ../../node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs
import { useState as $9gyGR$useState } from "react";
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size2, setSize] = $9gyGR$useState(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size2;
}

// ../../node_modules/.pnpm/@radix-ui+react-popper@1.1.3_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = $kY93V$useState(null);
  return /* @__PURE__ */ $kY93V$createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ $kY93V$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopePopper, virtualRef } = _a, anchorProps = __objRest(_a, ["__scopePopper", "virtualRef"]);
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = $kY93V$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  $kY93V$useEffect(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ $kY93V$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ $kY93V$forwardRef((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const _a = props, { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced } = _a, contentProps = __objRest(_a, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]);
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = $kY93V$useState(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow3, setArrow] = $kY93V$useState(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow3);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, collisionPaddingProp);
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift(__spreadValues({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : void 0
      }, detectOverflowOptions)),
      avoidCollisions && flip(__spreadValues({}, detectOverflowOptions)),
      size(__spreadProps(__spreadValues({}, detectOverflowOptions), {
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      })),
      arrow3 && arrow2({
        element: arrow3,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide(__spreadValues({
        strategy: "referenceHidden"
      }, detectOverflowOptions))
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = $kY93V$useState();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ $kY93V$createElement("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: __spreadProps(__spreadValues({}, floatingStyles), {
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    }),
    dir: props.dir
  }, /* @__PURE__ */ $kY93V$createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ $kY93V$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: __spreadProps(__spreadValues({}, contentProps.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    })
  }))));
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x,
        y
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;

// ../../node_modules/.pnpm/@radix-ui+react-portal@1.0.4_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-portal/dist/index.mjs
import { forwardRef as $7SXl2$forwardRef, createElement as $7SXl2$createElement } from "react";
import $7SXl2$reactdom from "react-dom";
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ $7SXl2$forwardRef((props, forwardedRef) => {
  var _globalThis$document;
  const _a = props, { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body } = _a, portalProps = __objRest(_a, ["container"]);
  return container ? /* @__PURE__ */ $7SXl2$reactdom.createPortal(/* @__PURE__ */ $7SXl2$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// ../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs
import { Children as $iqq3r$Children, cloneElement as $iqq3r$cloneElement, useState as $iqq3r$useState, useRef as $iqq3r$useRef, useEffect as $iqq3r$useEffect, useCallback as $iqq3r$useCallback, useReducer as $iqq3r$useReducer } from "react";
import { flushSync as $iqq3r$flushSync } from "react-dom";
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return $iqq3r$useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : $iqq3r$Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ $iqq3r$cloneElement(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = $iqq3r$useState();
  const stylesRef = $iqq3r$useRef({});
  const prevPresentRef = $iqq3r$useRef(present);
  const prevAnimationNameRef = $iqq3r$useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  $iqq3r$useEffect(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          $iqq3r$flushSync(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: $iqq3r$useCallback((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.5_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import { createContext as $kqwpH$createContext, forwardRef as $kqwpH$forwardRef, useContext as $kqwpH$useContext, useState as $kqwpH$useState, useEffect as $kqwpH$useEffect, createElement as $kqwpH$createElement, useRef as $kqwpH$useRef } from "react";

// ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.0.3_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
import { useEffect as $hPSQ5$useEffect } from "react";
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  $hPSQ5$useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.5_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ $kqwpH$createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ $kqwpH$forwardRef((props, forwardedRef) => {
  var _node$ownerDocument;
  const _a = props, { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss } = _a, layerProps = __objRest(_a, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]);
  const context = $kqwpH$useContext($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = $kqwpH$useState(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = $kqwpH$useState({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  $kqwpH$useEffect(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  $kqwpH$useEffect(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  $kqwpH$useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ $kqwpH$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: __spreadValues({
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0
    }, props.style),
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = $kqwpH$useRef(false);
  const handleClickRef = $kqwpH$useRef(() => {
  });
  $kqwpH$useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent2();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = $kqwpH$useRef(false);
  $kqwpH$useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// ../../node_modules/.pnpm/@radix-ui+react-hover-card@1.0.7_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-hover-card/dist/index.mjs
var $cef8881cdc69808e$var$originalBodyUserSelect;
var $cef8881cdc69808e$var$HOVERCARD_NAME = "HoverCard";
var [$cef8881cdc69808e$var$createHoverCardContext, $cef8881cdc69808e$export$47b6998a836b7260] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cef8881cdc69808e$var$HOVERCARD_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cef8881cdc69808e$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cef8881cdc69808e$var$HoverCardProvider, $cef8881cdc69808e$var$useHoverCardContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$HOVERCARD_NAME);
var $cef8881cdc69808e$export$57a077cc9fbe653e = (props) => {
  const { __scopeHoverCard, children, open: openProp, defaultOpen, onOpenChange, openDelay = 700, closeDelay = 300 } = props;
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const openTimerRef = $eRSIW$useRef(0);
  const closeTimerRef = $eRSIW$useRef(0);
  const hasSelectionRef = $eRSIW$useRef(false);
  const isPointerDownOnContentRef = $eRSIW$useRef(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const handleOpen = $eRSIW$useCallback(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(
      () => setOpen(true),
      openDelay
    );
  }, [
    openDelay,
    setOpen
  ]);
  const handleClose = $eRSIW$useCallback(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current)
      closeTimerRef.current = window.setTimeout(
        () => setOpen(false),
        closeDelay
      );
  }, [
    closeDelay,
    setOpen
  ]);
  const handleDismiss = $eRSIW$useCallback(
    () => setOpen(false),
    [
      setOpen
    ]
  );
  $eRSIW$useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ $eRSIW$createElement($cef8881cdc69808e$var$HoverCardProvider, {
    scope: __scopeHoverCard,
    open,
    onOpenChange: setOpen,
    onOpen: handleOpen,
    onClose: handleClose,
    onDismiss: handleDismiss,
    hasSelectionRef,
    isPointerDownOnContentRef
  }, /* @__PURE__ */ $eRSIW$createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, children));
};
var $cef8881cdc69808e$var$TRIGGER_NAME = "HoverCardTrigger";
var $cef8881cdc69808e$export$ef9f7fd8e4ba882f = /* @__PURE__ */ $eRSIW$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeHoverCard } = _a, triggerProps = __objRest(_a, ["__scopeHoverCard"]);
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$TRIGGER_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  return /* @__PURE__ */ $eRSIW$createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), /* @__PURE__ */ $eRSIW$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-state": context.open ? "open" : "closed"
  }, triggerProps, {
    ref: forwardedRef,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, context.onOpen),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onTouchStart: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onTouchStart,
      (event) => event.preventDefault()
    )
  })));
});
var $cef8881cdc69808e$var$PORTAL_NAME = "HoverCardPortal";
var [$cef8881cdc69808e$var$PortalProvider, $cef8881cdc69808e$var$usePortalContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cef8881cdc69808e$var$CONTENT_NAME = "HoverCardContent";
var $cef8881cdc69808e$export$aa4724a5938c586 = /* @__PURE__ */ $eRSIW$forwardRef((props, forwardedRef) => {
  const portalContext = $cef8881cdc69808e$var$usePortalContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  const _a = props, { forceMount = portalContext.forceMount } = _a, contentProps = __objRest(_a, ["forceMount"]);
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  return /* @__PURE__ */ $eRSIW$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ $eRSIW$createElement($cef8881cdc69808e$var$HoverCardContentImpl, _extends({
    "data-state": context.open ? "open" : "closed"
  }, contentProps, {
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    ref: forwardedRef
  })));
});
var $cef8881cdc69808e$var$HoverCardContentImpl = /* @__PURE__ */ $eRSIW$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside } = _a, contentProps = __objRest(_a, ["__scopeHoverCard", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]);
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const ref = $eRSIW$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [containSelection, setContainSelection] = $eRSIW$useState(false);
  $eRSIW$useEffect(() => {
    if (containSelection) {
      const body = document.body;
      $cef8881cdc69808e$var$originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
        body.style.webkitUserSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
      };
    }
  }, [
    containSelection
  ]);
  $eRSIW$useEffect(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          var _document$getSelectio;
          const hasSelection = ((_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.toString()) !== "";
          if (hasSelection)
            context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [
    context.isPointerDownOnContentRef,
    context.hasSelectionRef
  ]);
  $eRSIW$useEffect(() => {
    if (ref.current) {
      const tabbables = $cef8881cdc69808e$var$getTabbableNodes(ref.current);
      tabbables.forEach(
        (tabbable) => tabbable.setAttribute("tabindex", "-1")
      );
    }
  });
  return /* @__PURE__ */ $eRSIW$createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onFocusOutside, (event) => {
      event.preventDefault();
    }),
    onDismiss: context.onDismiss
  }, /* @__PURE__ */ $eRSIW$createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, contentProps, {
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onPointerDown, (event) => {
      if (event.currentTarget.contains(event.target))
        setContainSelection(true);
      context.hasSelectionRef.current = false;
      context.isPointerDownOnContentRef.current = true;
    }),
    ref: composedRefs,
    style: __spreadProps(__spreadValues({}, contentProps.style), {
      userSelect: containSelection ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: containSelection ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    })
  })));
});
function $cef8881cdc69808e$var$excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function $cef8881cdc69808e$var$getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
var $cef8881cdc69808e$export$be92b6f5f03c0fe9 = $cef8881cdc69808e$export$57a077cc9fbe653e;
var $cef8881cdc69808e$export$41fb9f06171c75f4 = $cef8881cdc69808e$export$ef9f7fd8e4ba882f;
var $cef8881cdc69808e$export$7c6e2c02157bb7d2 = $cef8881cdc69808e$export$aa4724a5938c586;

// ../ui/dist/index.mjs
import { jsx as jsx3 } from "react/jsx-runtime";
import * as React42 from "react";

// ../../node_modules/.pnpm/@radix-ui+react-separator@1.0.3_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-separator/dist/index.mjs
import { forwardRef as $5WXm8$forwardRef, createElement as $5WXm8$createElement } from "react";
var $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
var $89eedd556c436f6a$var$ORIENTATIONS = [
  "horizontal",
  "vertical"
];
var $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ $5WXm8$forwardRef((props, forwardedRef) => {
  const _a = props, { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION } = _a, domProps = __objRest(_a, ["decorative", "orientation"]);
  const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? {
    role: "none"
  } : {
    "aria-orientation": ariaOrientation,
    role: "separator"
  };
  return /* @__PURE__ */ $5WXm8$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, semanticProps, domProps, {
    ref: forwardedRef
  }));
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
  orientation(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
      return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
    return null;
  }
};
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
  return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
var $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;

// ../ui/dist/index.mjs
import { jsx as jsx4 } from "react/jsx-runtime";
import * as React52 from "react";

// ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.0.6_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
import { useRef as $9kmUS$useRef, createElement as $9kmUS$createElement, useCallback as $9kmUS$useCallback, forwardRef as $9kmUS$forwardRef } from "react";

// ../../node_modules/.pnpm/@radix-ui+react-menu@2.0.6_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-menu/dist/index.mjs
import { useState as $epM9y$useState, useRef as $epM9y$useRef, useEffect as $epM9y$useEffect, createElement as $epM9y$createElement, useCallback as $epM9y$useCallback, forwardRef as $epM9y$forwardRef, Fragment as $epM9y$Fragment } from "react";

// ../../node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs
import $6vYhU$react from "react";
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = $6vYhU$react.useRef(null);
    const itemMap = $6vYhU$react.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ $6vYhU$react.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  /* @__PURE__ */ Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ $6vYhU$react.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ $6vYhU$react.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ $6vYhU$react.forwardRef((props, forwardedRef) => {
    const _a = props, { scope, children } = _a, itemData = __objRest(_a, ["scope", "children"]);
    const ref = $6vYhU$react.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    $6vYhU$react.useEffect(() => {
      context.itemMap.set(ref, __spreadValues({
        ref
      }, itemData));
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ $6vYhU$react.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = $6vYhU$react.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// ../../node_modules/.pnpm/@radix-ui+react-direction@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs
import { createContext as $7Gjcd$createContext, createElement as $7Gjcd$createElement, useContext as $7Gjcd$useContext } from "react";
var $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ $7Gjcd$createContext(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = $7Gjcd$useContext($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
import { useEffect as $1wErz$useEffect } from "react";
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  $1wErz$useEffect(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.0.4_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
import { forwardRef as $45QHv$forwardRef, useState as $45QHv$useState, useRef as $45QHv$useRef, useEffect as $45QHv$useEffect, useCallback as $45QHv$useCallback, createElement as $45QHv$createElement } from "react";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ $45QHv$forwardRef((props, forwardedRef) => {
  const _a = props, { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp } = _a, scopeProps = __objRest(_a, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]);
  const [container1, setContainer] = $45QHv$useState(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = $45QHv$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = $45QHv$useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  $45QHv$useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  $45QHv$useEffect(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = $45QHv$useCallback((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ $45QHv$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// ../../node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.5_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs
import * as $2AODx$react from "react";
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.0.4_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import { forwardRef as $98Iye$forwardRef, createElement as $98Iye$createElement, useRef as $98Iye$useRef, useState as $98Iye$useState, useEffect as $98Iye$useEffect, useCallback as $98Iye$useCallback } from "react";
var $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /* @__PURE__ */ $98Iye$forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ $98Iye$createElement($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ $98Iye$createElement($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ $98Iye$createElement($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
var $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /* @__PURE__ */ $98Iye$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus } = _a, groupProps = __objRest(_a, ["__scopeRovingFocusGroup", "orientation", "loop", "dir", "currentTabStopId", "defaultCurrentTabStopId", "onCurrentTabStopIdChange", "onEntryFocus"]);
  const ref = $98Iye$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = $98Iye$useState(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = $98Iye$useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = $98Iye$useState(0);
  $98Iye$useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return /* @__PURE__ */ $98Iye$createElement($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: $98Iye$useCallback(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: $98Iye$useCallback(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: $98Iye$useCallback(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: $98Iye$useCallback(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, /* @__PURE__ */ $98Iye$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: __spreadValues({
      outline: "none"
    }, props.style),
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ $98Iye$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId } = _a, itemProps = __objRest(_a, ["__scopeRovingFocusGroup", "focusable", "active", "tabStopId"]);
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  $98Iye$useEffect(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return /* @__PURE__ */ $98Iye$createElement($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, /* @__PURE__ */ $98Iye$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// ../../node_modules/.pnpm/aria-hidden@1.2.3/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        var attr = node.getAttribute(controlAttribute);
        var alreadyHidden = attr !== null && attr !== "false";
        var counterValue = (counterMap.get(node) || 0) + 1;
        var markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// ../../node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
import * as React7 from "react";

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
import * as React3 from "react";

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState as useState3 } from "react";
function useCallbackRef(initialValue, callback) {
  var ref = useState3(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.5_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.5_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.5_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
import * as React2 from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React2.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React3.forwardRef(function(props, parentRef) {
  var ref = React3.useRef(null);
  var _a = React3.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React3.createElement(
    React3.Fragment,
    null,
    enabled && React3.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React3.cloneElement(React3.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import * as React6 from "react";

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React5 from "react";

// ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
import * as React4 from "react";

// ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React4.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.5_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React5.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React5.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React6.useRef([]);
  var touchStartRef = React6.useRef([0, 0]);
  var activeAxis = React6.useRef();
  var id = React6.useState(idCounter++)[0];
  var Style2 = React6.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React6.useRef(props);
  React6.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React6.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React6.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React6.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React6.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React6.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React6.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React6.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React6.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React6.createElement(
    React6.Fragment,
    null,
    inert ? React6.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React6.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.5_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React7.forwardRef(function(props, ref) {
  return React7.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../../node_modules/.pnpm/@radix-ui+react-menu@2.0.6_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-menu/dist/index.mjs
var $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
var $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
var $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
var $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
var $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
var $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
var $6cc32821e9371a1c$var$MENU_NAME = "Menu";
var [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeMenu } = _a, anchorProps = __objRest(_a, ["__scopeMenu"]);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return /* @__PURE__ */ $epM9y$createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
var [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
var $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, /* @__PURE__ */ $epM9y$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ $epM9y$createElement($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
var [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
var $6cc32821e9371a1c$export$479f0f2f71193efe = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const _a = props, { forceMount = portalContext.forceMount } = _a, contentProps = __objRest(_a, ["forceMount"]);
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ $epM9y$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })))));
});
var $6cc32821e9371a1c$var$MenuRootContentModal = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = $epM9y$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  $epM9y$useEffect(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuRootContentNonModal = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuContentImpl = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll } = _a, contentProps = __objRest(_a, ["__scopeMenu", "loop", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEntryFocus", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss", "disableOutsideScroll"]);
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = $epM9y$useState(null);
  const contentRef = $epM9y$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = $epM9y$useRef(0);
  const searchRef = $epM9y$useRef("");
  const pointerGraceTimerRef = $epM9y$useRef(0);
  const pointerGraceIntentRef = $epM9y$useRef(null);
  const pointerDirRef = $epM9y$useRef("right");
  const lastPointerXRef = $epM9y$useRef(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : $epM9y$Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  $epM9y$useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = $epM9y$useCallback((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: $epM9y$useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: $epM9y$useCallback((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: $epM9y$useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: $epM9y$useCallback((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, /* @__PURE__ */ $epM9y$createElement(ScrollLockWrapper, scrollLockWrapperProps, /* @__PURE__ */ $epM9y$createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ $epM9y$createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, /* @__PURE__ */ $epM9y$createElement($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), /* @__PURE__ */ $epM9y$createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: __spreadValues({
      outline: "none"
    }, contentProps.style),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
var $6cc32821e9371a1c$export$dd37bec0e8a99143 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeMenu } = _a, labelProps = __objRest(_a, ["__scopeMenu"]);
  return /* @__PURE__ */ $epM9y$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
var $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
var $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { disabled = false, onSelect } = _a, itemProps = __objRest(_a, ["disabled", "onSelect"]);
  const ref = $epM9y$useRef(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = $epM9y$useRef(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
var $6cc32821e9371a1c$var$MenuItemImpl = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeMenu, disabled = false, textValue } = _a, itemProps = __objRest(_a, ["__scopeMenu", "disabled", "textValue"]);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = $epM9y$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = $epM9y$useState(false);
  const [textContent, setTextContent] = $epM9y$useState("");
  $epM9y$useEffect(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, /* @__PURE__ */ $epM9y$createElement($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), /* @__PURE__ */ $epM9y$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
var $6cc32821e9371a1c$export$f6f243521332502d = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { checked = false, onCheckedChange } = _a, checkboxItemProps = __objRest(_a, ["checked", "onCheckedChange"]);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
var [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
var $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
var $6cc32821e9371a1c$export$69bd225e9817f6d0 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { value } = _a, radioItemProps = __objRest(_a, ["value"]);
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
var $6cc32821e9371a1c$export$a2593e23056970a3 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeMenu, forceMount } = _a, itemIndicatorProps = __objRest(_a, ["__scopeMenu", "forceMount"]);
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return /* @__PURE__ */ $epM9y$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, /* @__PURE__ */ $epM9y$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
var $6cc32821e9371a1c$export$1cec7dcdd713e220 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeMenu } = _a, separatorProps = __objRest(_a, ["__scopeMenu"]);
  return /* @__PURE__ */ $epM9y$createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
var [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
var $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
var $6cc32821e9371a1c$export$5fbbb3ba7297405f = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = $epM9y$useRef(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = $epM9y$useCallback(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  $epM9y$useEffect(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  $epM9y$useEffect(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
    asChild: true
  }, scope), /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuItemImpl, _extends({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
var $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
var $6cc32821e9371a1c$export$e7142ab31822bde6 = /* @__PURE__ */ $epM9y$forwardRef((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const _a = props, { forceMount = portalContext.forceMount } = _a, subContentProps = __objRest(_a, ["forceMount"]);
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = $epM9y$useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ $epM9y$createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ $epM9y$createElement($6cc32821e9371a1c$var$MenuContentImpl, _extends({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v) => v !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
var $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
var $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
var $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
var $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
var $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
var $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
var $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
var $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
var $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;

// ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.0.6_@types+react-dom@18.2.3_@types+react@18.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
var [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
var $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const _a = props, { __scopeDropdownMenu } = _a, portalProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
};
var $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
var $d08ef79370b62062$export$6e76d93a37c01248 = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, contentProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = $9kmUS$useRef(false);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: __spreadProps(__spreadValues({}, props.style), {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }));
});
var $d08ef79370b62062$export$76e48c5b57f24495 = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, labelProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$ed97964d1871885d = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, itemProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$53a69729da201fa9 = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, checkboxItemProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$e4f69b41b1637536 = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, radioItemProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$42355ae145153fb6 = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, itemIndicatorProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$da160178fd3bc7e9 = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, separatorProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$21dcb7ec56f874cf = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, subTriggerProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$f34ec8bc2482cc5f = /* @__PURE__ */ $9kmUS$forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeDropdownMenu } = _a, subContentProps = __objRest(_a, ["__scopeDropdownMenu"]);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ $9kmUS$createElement($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: __spreadProps(__spreadValues({}, props.style), {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }));
});
var $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
var $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
var $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
var $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
var $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
var $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
var $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
var $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
var $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
var $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;

// ../../node_modules/.pnpm/@radix-ui+react-icons@1.3.0_react@18.2.0/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
import { forwardRef as forwardRef3, createElement as createElement6 } from "react";
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$T = ["color"];
var CheckIcon = /* @__PURE__ */ forwardRef3(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  return createElement6("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), createElement6("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
var _excluded$Y = ["color"];
var ChevronRightIcon = /* @__PURE__ */ forwardRef3(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  return createElement6("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), createElement6("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
var _excluded$1I = ["color"];
var DotFilledIcon = /* @__PURE__ */ forwardRef3(function(_ref, forwardedRef) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, _excluded$1I);
  return createElement6("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), createElement6("path", {
    d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
    fill: color
  }));
});

// ../ui/dist/index.mjs
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function styleInject2(css, { insertAt } = {}) {
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
styleInject2('*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n}\n::before,\n::after {\n  --tw-content: "";\n}\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden] {\n  display: none;\n}\n:root {\n  --background: 0 0% 100%;\n  --foreground: 222.2 47.4% 11.2%;\n  --muted: 210 40% 96.1%;\n  --muted-foreground: 215.4 16.3% 46.9%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 222.2 47.4% 11.2%;\n  --border: 214.3 31.8% 91.4%;\n  --input: 214.3 31.8% 91.4%;\n  --card: 0 0% 100%;\n  --card-foreground: 222.2 47.4% 11.2%;\n  --primary: 222.2 47.4% 11.2%;\n  --primary-foreground: 210 40% 98%;\n  --secondary: 210 40% 96.1%;\n  --secondary-foreground: 222.2 47.4% 11.2%;\n  --accent: 210 40% 96.1%;\n  --accent-foreground: 222.2 47.4% 11.2%;\n  --destructive: 0 100% 50%;\n  --destructive-foreground: 210 40% 98%;\n  --ring: 215 20.2% 65.1%;\n  --radius: 0.5rem;\n}\n.dark {\n  --background: 224 71% 4%;\n  --foreground: 213 31% 91%;\n  --muted: 223 47% 11%;\n  --muted-foreground: 215.4 16.3% 56.9%;\n  --accent: 216 34% 17%;\n  --accent-foreground: 210 40% 98%;\n  --popover: 224 71% 4%;\n  --popover-foreground: 215 20.2% 65.1%;\n  --border: 216 34% 17%;\n  --input: 216 34% 17%;\n  --card: 224 71% 4%;\n  --card-foreground: 213 31% 91%;\n  --primary: 210 40% 98%;\n  --primary-foreground: 222.2 47.4% 1.2%;\n  --secondary: 222.2 47.4% 11.2%;\n  --secondary-foreground: 210 40% 98%;\n  --destructive: 0 63% 31%;\n  --destructive-foreground: 210 40% 98%;\n  --ring: 216 34% 17%;\n  --radius: 0.5rem;\n}\n* {\n  border-color: hsl(var(--border));\n}\nbody {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n  font-feature-settings: "rlig" 1, "calt" 1;\n}\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n.\\!container {\n  width: 100% !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  padding-right: 2rem !important;\n  padding-left: 2rem !important;\n}\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n@media (min-width: 1400px) {\n  .\\!container {\n    max-width: 1400px !important;\n  }\n  .container {\n    max-width: 1400px;\n  }\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(a strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n.prose :where(ol[type=A]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=A s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=I]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=I s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type="1"]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: disc;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.25em;\n}\n.prose :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: "\\201c""\\201d""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 900;\n  color: inherit;\n}\n.prose :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 800;\n  color: inherit;\n}\n.prose :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  display: block;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--tw-prose-kbd);\n  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);\n  font-size: 0.875em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1875em;\n  padding-right: 0.375em;\n  padding-bottom: 0.1875em;\n  padding-left: 0.375em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: "`";\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: "`";\n}\n.prose :where(a code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h1 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.9em;\n}\n.prose :where(h4 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: baseline;\n}\n.prose :where(tfoot):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-top-width: 1px;\n  border-top-color: var(--tw-prose-th-borders);\n}\n.prose :where(tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: top;\n}\n.prose :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-kbd: #111827;\n  --tw-prose-kbd-shadows: 17 24 39;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-kbd: #fff;\n  --tw-prose-invert-kbd-shadows: 255 255 255;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n.prose :where(.prose > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(.prose > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(.prose > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  padding-left: 1.625em;\n}\n.prose :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(.prose > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(.prose > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n.prose-lg {\n  font-size: 1.125rem;\n  line-height: 1.7777778;\n}\n.prose-lg :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n}\n.prose-lg :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.2222222em;\n  line-height: 1.4545455;\n  margin-top: 1.0909091em;\n  margin-bottom: 1.0909091em;\n}\n.prose-lg :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.6666667em;\n  margin-bottom: 1.6666667em;\n  padding-left: 1em;\n}\n.prose-lg :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 2.6666667em;\n  margin-top: 0;\n  margin-bottom: 0.8333333em;\n  line-height: 1;\n}\n.prose-lg :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.6666667em;\n  margin-top: 1.8666667em;\n  margin-bottom: 1.0666667em;\n  line-height: 1.3333333;\n}\n.prose-lg :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.3333333em;\n  margin-top: 1.6666667em;\n  margin-bottom: 0.6666667em;\n  line-height: 1.5;\n}\n.prose-lg :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 0.4444444em;\n  line-height: 1.5555556;\n}\n.prose-lg :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose-lg :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  border-radius: 0.3125rem;\n  padding-top: 0.2222222em;\n  padding-right: 0.4444444em;\n  padding-bottom: 0.2222222em;\n  padding-left: 0.4444444em;\n}\n.prose-lg :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n}\n.prose-lg :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8666667em;\n}\n.prose-lg :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.875em;\n}\n.prose-lg :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.75;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  border-radius: 0.375rem;\n  padding-top: 1em;\n  padding-right: 1.5em;\n  padding-bottom: 1em;\n  padding-left: 1.5em;\n}\n.prose-lg :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n  padding-left: 1.5555556em;\n}\n.prose-lg :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n  padding-left: 1.5555556em;\n}\n.prose-lg :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.6666667em;\n  margin-bottom: 0.6666667em;\n}\n.prose-lg :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.4444444em;\n}\n.prose-lg :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.4444444em;\n}\n.prose-lg :where(.prose-lg > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.prose-lg :where(.prose-lg > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n}\n.prose-lg :where(.prose-lg > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.3333333em;\n}\n.prose-lg :where(.prose-lg > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n}\n.prose-lg :where(.prose-lg > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.3333333em;\n}\n.prose-lg :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.prose-lg :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n}\n.prose-lg :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n}\n.prose-lg :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.6666667em;\n  padding-left: 1.5555556em;\n}\n.prose-lg :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 3.1111111em;\n  margin-bottom: 3.1111111em;\n}\n.prose-lg :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.5;\n}\n.prose-lg :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0.75em;\n  padding-bottom: 0.75em;\n  padding-left: 0.75em;\n}\n.prose-lg :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose-lg :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose-lg :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.75em;\n  padding-right: 0.75em;\n  padding-bottom: 0.75em;\n  padding-left: 0.75em;\n}\n.prose-lg :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.prose-lg :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.prose-lg :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.prose-lg :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose-lg :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.5;\n  margin-top: 1em;\n}\n.prose-lg :where(.prose-lg > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-lg :where(.prose-lg > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.not-sr-only {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.visible {\n  visibility: visible;\n}\n.invisible {\n  visibility: hidden;\n}\n.\\!collapse {\n  visibility: collapse !important;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.-inset-1 {\n  inset: -0.25rem;\n}\n.bottom-10 {\n  bottom: 2.5rem;\n}\n.left-2 {\n  left: 0.5rem;\n}\n.right-10 {\n  right: 2.5rem;\n}\n.isolate {\n  isolation: isolate;\n}\n.isolation-auto {\n  isolation: auto;\n}\n.z-50 {\n  z-index: 50;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n.float-none {\n  float: none;\n}\n.clear-left {\n  clear: left;\n}\n.clear-right {\n  clear: right;\n}\n.clear-both {\n  clear: both;\n}\n.clear-none {\n  clear: none;\n}\n.-mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.box-content {\n  box-sizing: content-box;\n}\n.line-clamp-none {\n  overflow: visible;\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-line-clamp: none;\n}\n.\\!block {\n  display: block !important;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.\\!table {\n  display: table !important;\n}\n.table {\n  display: table;\n}\n.inline-table {\n  display: inline-table;\n}\n.table-caption {\n  display: table-caption;\n}\n.table-cell {\n  display: table-cell;\n}\n.table-column {\n  display: table-column;\n}\n.table-column-group {\n  display: table-column-group;\n}\n.table-footer-group {\n  display: table-footer-group;\n}\n.table-header-group {\n  display: table-header-group;\n}\n.table-row-group {\n  display: table-row-group;\n}\n.table-row {\n  display: table-row;\n}\n.flow-root {\n  display: flow-root;\n}\n.grid {\n  display: grid;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.contents {\n  display: contents;\n}\n.list-item {\n  display: list-item;\n}\n.hidden {\n  display: none;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-3\\.5 {\n  height: 0.875rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.h-\\[1px\\] {\n  height: 1px;\n}\n.h-full {\n  height: 100%;\n}\n.h-px {\n  height: 1px;\n}\n.w-1 {\n  width: 0.25rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-3\\.5 {\n  width: 0.875rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[8rem\\] {\n  min-width: 8rem;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.shrink {\n  flex-shrink: 1;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.grow {\n  flex-grow: 1;\n}\n.table-auto {\n  table-layout: auto;\n}\n.table-fixed {\n  table-layout: fixed;\n}\n.caption-top {\n  caption-side: top;\n}\n.caption-bottom {\n  caption-side: bottom;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.border-separate {\n  border-collapse: separate;\n}\n.\\!transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-cpu {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-gpu {\n  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-none {\n  transform: none;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.touch-auto {\n  touch-action: auto;\n}\n.touch-none {\n  touch-action: none;\n}\n.touch-pan-x {\n  --tw-pan-x: pan-x;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-pan-left {\n  --tw-pan-x: pan-left;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-pan-right {\n  --tw-pan-x: pan-right;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-pan-y {\n  --tw-pan-y: pan-y;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-pan-up {\n  --tw-pan-y: pan-up;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-pan-down {\n  --tw-pan-y: pan-down;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-pinch-zoom {\n  --tw-pinch-zoom: pinch-zoom;\n  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);\n}\n.touch-manipulation {\n  touch-action: manipulation;\n}\n.select-none {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.select-text {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n.select-all {\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n}\n.select-auto {\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  user-select: auto;\n}\n.resize-none {\n  resize: none;\n}\n.resize-y {\n  resize: vertical;\n}\n.resize-x {\n  resize: horizontal;\n}\n.resize {\n  resize: both;\n}\n.snap-none {\n  scroll-snap-type: none;\n}\n.snap-x {\n  scroll-snap-type: x var(--tw-scroll-snap-strictness);\n}\n.snap-y {\n  scroll-snap-type: y var(--tw-scroll-snap-strictness);\n}\n.snap-both {\n  scroll-snap-type: both var(--tw-scroll-snap-strictness);\n}\n.snap-mandatory {\n  --tw-scroll-snap-strictness: mandatory;\n}\n.snap-proximity {\n  --tw-scroll-snap-strictness: proximity;\n}\n.snap-start {\n  scroll-snap-align: start;\n}\n.snap-end {\n  scroll-snap-align: end;\n}\n.snap-center {\n  scroll-snap-align: center;\n}\n.snap-align-none {\n  scroll-snap-align: none;\n}\n.snap-normal {\n  scroll-snap-stop: normal;\n}\n.snap-always {\n  scroll-snap-stop: always;\n}\n.list-inside {\n  list-style-position: inside;\n}\n.list-outside {\n  list-style-position: outside;\n}\n.appearance-none {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.break-before-auto {\n  -moz-column-break-before: auto;\n  break-before: auto;\n}\n.break-before-avoid {\n  -moz-column-break-before: avoid;\n  break-before: avoid;\n}\n.break-before-all {\n  -moz-column-break-before: all;\n  break-before: all;\n}\n.break-before-avoid-page {\n  -moz-column-break-before: avoid;\n  break-before: avoid-page;\n}\n.break-before-page {\n  -moz-column-break-before: page;\n  break-before: page;\n}\n.break-before-left {\n  -moz-column-break-before: left;\n  break-before: left;\n}\n.break-before-right {\n  -moz-column-break-before: right;\n  break-before: right;\n}\n.break-before-column {\n  -moz-column-break-before: column;\n  break-before: column;\n}\n.break-inside-auto {\n  -moz-column-break-inside: auto;\n  break-inside: auto;\n}\n.break-inside-avoid {\n  -moz-column-break-inside: avoid;\n  break-inside: avoid;\n}\n.break-inside-avoid-page {\n  break-inside: avoid-page;\n}\n.break-inside-avoid-column {\n  -moz-column-break-inside: avoid;\n  break-inside: avoid-column;\n}\n.break-after-auto {\n  -moz-column-break-after: auto;\n  break-after: auto;\n}\n.break-after-avoid {\n  -moz-column-break-after: avoid;\n  break-after: avoid;\n}\n.break-after-all {\n  -moz-column-break-after: all;\n  break-after: all;\n}\n.break-after-avoid-page {\n  -moz-column-break-after: avoid;\n  break-after: avoid-page;\n}\n.break-after-page {\n  -moz-column-break-after: page;\n  break-after: page;\n}\n.break-after-left {\n  -moz-column-break-after: left;\n  break-after: left;\n}\n.break-after-right {\n  -moz-column-break-after: right;\n  break-after: right;\n}\n.break-after-column {\n  -moz-column-break-after: column;\n  break-after: column;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-flow-dense {\n  grid-auto-flow: dense;\n}\n.grid-flow-row-dense {\n  grid-auto-flow: row dense;\n}\n.grid-flow-col-dense {\n  grid-auto-flow: column dense;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.place-content-center {\n  place-content: center;\n}\n.place-content-start {\n  place-content: start;\n}\n.place-content-end {\n  place-content: end;\n}\n.place-content-between {\n  place-content: space-between;\n}\n.place-content-around {\n  place-content: space-around;\n}\n.place-content-evenly {\n  place-content: space-evenly;\n}\n.place-content-baseline {\n  place-content: baseline;\n}\n.place-content-stretch {\n  place-content: stretch;\n}\n.place-items-start {\n  place-items: start;\n}\n.place-items-end {\n  place-items: end;\n}\n.place-items-center {\n  place-items: center;\n}\n.place-items-baseline {\n  place-items: baseline;\n}\n.place-items-stretch {\n  place-items: stretch;\n}\n.content-normal {\n  align-content: normal;\n}\n.content-center {\n  align-content: center;\n}\n.content-start {\n  align-content: flex-start;\n}\n.content-end {\n  align-content: flex-end;\n}\n.content-between {\n  align-content: space-between;\n}\n.content-around {\n  align-content: space-around;\n}\n.content-evenly {\n  align-content: space-evenly;\n}\n.content-baseline {\n  align-content: baseline;\n}\n.content-stretch {\n  align-content: stretch;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-normal {\n  justify-content: normal;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.justify-stretch {\n  justify-content: stretch;\n}\n.justify-items-start {\n  justify-items: start;\n}\n.justify-items-end {\n  justify-items: end;\n}\n.justify-items-center {\n  justify-items: center;\n}\n.justify-items-stretch {\n  justify-items: stretch;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-reverse > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 1;\n}\n.space-x-reverse > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 1;\n}\n.divide-x > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(1px * var(--tw-divide-x-reverse));\n  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n}\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n.divide-y-reverse > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 1;\n}\n.divide-x-reverse > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 1;\n}\n.divide-solid > :not([hidden]) ~ :not([hidden]) {\n  border-style: solid;\n}\n.divide-dashed > :not([hidden]) ~ :not([hidden]) {\n  border-style: dashed;\n}\n.divide-dotted > :not([hidden]) ~ :not([hidden]) {\n  border-style: dotted;\n}\n.divide-double > :not([hidden]) ~ :not([hidden]) {\n  border-style: double;\n}\n.divide-none > :not([hidden]) ~ :not([hidden]) {\n  border-style: none;\n}\n.place-self-auto {\n  place-self: auto;\n}\n.place-self-start {\n  place-self: start;\n}\n.place-self-end {\n  place-self: end;\n}\n.place-self-center {\n  place-self: center;\n}\n.place-self-stretch {\n  place-self: stretch;\n}\n.self-auto {\n  align-self: auto;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.self-stretch {\n  align-self: stretch;\n}\n.self-baseline {\n  align-self: baseline;\n}\n.justify-self-auto {\n  justify-self: auto;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.justify-self-center {\n  justify-self: center;\n}\n.justify-self-stretch {\n  justify-self: stretch;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-clip {\n  overflow: clip;\n}\n.overflow-visible {\n  overflow: visible;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.overflow-x-clip {\n  overflow-x: clip;\n}\n.overflow-y-clip {\n  overflow-y: clip;\n}\n.overflow-x-visible {\n  overflow-x: visible;\n}\n.overflow-y-visible {\n  overflow-y: visible;\n}\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.overscroll-auto {\n  overscroll-behavior: auto;\n}\n.overscroll-contain {\n  overscroll-behavior: contain;\n}\n.overscroll-none {\n  overscroll-behavior: none;\n}\n.overscroll-y-auto {\n  overscroll-behavior-y: auto;\n}\n.overscroll-y-contain {\n  overscroll-behavior-y: contain;\n}\n.overscroll-y-none {\n  overscroll-behavior-y: none;\n}\n.overscroll-x-auto {\n  overscroll-behavior-x: auto;\n}\n.overscroll-x-contain {\n  overscroll-behavior-x: contain;\n}\n.overscroll-x-none {\n  overscroll-behavior-x: none;\n}\n.scroll-auto {\n  scroll-behavior: auto;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.text-clip {\n  text-overflow: clip;\n}\n.hyphens-none {\n  -webkit-hyphens: none;\n  hyphens: none;\n}\n.hyphens-manual {\n  -webkit-hyphens: manual;\n  hyphens: manual;\n}\n.hyphens-auto {\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.whitespace-normal {\n  white-space: normal;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre {\n  white-space: pre;\n}\n.whitespace-pre-line {\n  white-space: pre-line;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.whitespace-break-spaces {\n  white-space: break-spaces;\n}\n.break-normal {\n  overflow-wrap: normal;\n  word-break: normal;\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.break-all {\n  word-break: break-all;\n}\n.break-keep {\n  word-break: keep-all;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-lg {\n  border-radius: var(--radius);\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n.rounded-sm {\n  border-radius: calc(var(--radius) - 4px);\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-b {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded-e {\n  border-start-end-radius: 0.25rem;\n  border-end-end-radius: 0.25rem;\n}\n.rounded-l {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded-r {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.rounded-s {\n  border-start-start-radius: 0.25rem;\n  border-end-start-radius: 0.25rem;\n}\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.rounded-bl {\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded-br {\n  border-bottom-right-radius: 0.25rem;\n}\n.rounded-ee {\n  border-end-end-radius: 0.25rem;\n}\n.rounded-es {\n  border-end-start-radius: 0.25rem;\n}\n.rounded-se {\n  border-start-end-radius: 0.25rem;\n}\n.rounded-ss {\n  border-start-start-radius: 0.25rem;\n}\n.rounded-tl {\n  border-top-left-radius: 0.25rem;\n}\n.rounded-tr {\n  border-top-right-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-x {\n  border-left-width: 1px;\n  border-right-width: 1px;\n}\n.border-y {\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-e {\n  border-inline-end-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-s {\n  border-inline-start-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-t-2 {\n  border-top-width: 2px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-dotted {\n  border-style: dotted;\n}\n.border-double {\n  border-style: double;\n}\n.border-hidden {\n  border-style: hidden;\n}\n.border-none {\n  border-style: none;\n}\n.border-input {\n  border-color: hsl(var(--input));\n}\n.border-red-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity));\n}\n.border-red-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity));\n}\n.bg-\\[rgb\\(255\\,0\\,0\\)\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 0 0 / var(--tw-bg-opacity));\n}\n.bg-border {\n  background-color: hsl(var(--border));\n}\n.bg-card {\n  background-color: hsl(var(--card));\n}\n.bg-destructive {\n  background-color: hsl(var(--destructive));\n}\n.bg-muted {\n  background-color: hsl(var(--muted));\n}\n.bg-popover {\n  background-color: hsl(var(--popover));\n}\n.bg-primary {\n  background-color: hsl(var(--primary));\n}\n.bg-secondary {\n  background-color: hsl(var(--secondary));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.decoration-slice {\n  -webkit-box-decoration-break: slice;\n  box-decoration-break: slice;\n}\n.decoration-clone {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.box-decoration-slice {\n  -webkit-box-decoration-break: slice;\n  box-decoration-break: slice;\n}\n.box-decoration-clone {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.bg-fixed {\n  background-attachment: fixed;\n}\n.bg-local {\n  background-attachment: local;\n}\n.bg-scroll {\n  background-attachment: scroll;\n}\n.bg-clip-border {\n  background-clip: border-box;\n}\n.bg-clip-padding {\n  background-clip: padding-box;\n}\n.bg-clip-content {\n  background-clip: content-box;\n}\n.bg-clip-text {\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.bg-repeat {\n  background-repeat: repeat;\n}\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n.bg-repeat-x {\n  background-repeat: repeat-x;\n}\n.bg-repeat-y {\n  background-repeat: repeat-y;\n}\n.bg-repeat-round {\n  background-repeat: round;\n}\n.bg-repeat-space {\n  background-repeat: space;\n}\n.bg-origin-border {\n  background-origin: border-box;\n}\n.bg-origin-padding {\n  background-origin: padding-box;\n}\n.bg-origin-content {\n  background-origin: content-box;\n}\n.fill-current {\n  fill: currentColor;\n}\n.object-contain {\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.object-cover {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.object-fill {\n  -o-object-fit: fill;\n  object-fit: fill;\n}\n.object-none {\n  -o-object-fit: none;\n  object-fit: none;\n}\n.object-scale-down {\n  -o-object-fit: scale-down;\n  object-fit: scale-down;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pl-6 {\n  padding-left: 1.5rem;\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-start {\n  text-align: start;\n}\n.text-end {\n  text-align: end;\n}\n.align-baseline {\n  vertical-align: baseline;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.align-bottom {\n  vertical-align: bottom;\n}\n.align-text-top {\n  vertical-align: text-top;\n}\n.align-text-bottom {\n  vertical-align: text-bottom;\n}\n.align-sub {\n  vertical-align: sub;\n}\n.align-super {\n  vertical-align: super;\n}\n.font-mono {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.normal-case {\n  text-transform: none;\n}\n.italic {\n  font-style: italic;\n}\n.not-italic {\n  font-style: normal;\n}\n.normal-nums {\n  font-variant-numeric: normal;\n}\n.ordinal {\n  --tw-ordinal: ordinal;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.slashed-zero {\n  --tw-slashed-zero: slashed-zero;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.lining-nums {\n  --tw-numeric-figure: lining-nums;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.oldstyle-nums {\n  --tw-numeric-figure: oldstyle-nums;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.proportional-nums {\n  --tw-numeric-spacing: proportional-nums;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.tabular-nums {\n  --tw-numeric-spacing: tabular-nums;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.diagonal-fractions {\n  --tw-numeric-fraction: diagonal-fractions;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.stacked-fractions {\n  --tw-numeric-fraction: stacked-fractions;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.text-\\[\\#336699\\]\\/\\[\\.35\\] {\n  color: rgb(51 102 153 / .35);\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.text-card-foreground {\n  color: hsl(var(--card-foreground));\n}\n.text-destructive-foreground {\n  color: hsl(var(--destructive-foreground));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n.text-muted-foreground {\n  color: hsl(var(--muted-foreground));\n}\n.text-popover-foreground {\n  color: hsl(var(--popover-foreground));\n}\n.text-primary {\n  color: hsl(var(--primary));\n}\n.text-primary-foreground {\n  color: hsl(var(--primary-foreground));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.text-secondary-foreground {\n  color: hsl(var(--secondary-foreground));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.overline {\n  text-decoration-line: overline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.no-underline {\n  text-decoration-line: none;\n}\n.decoration-blue-500 {\n  text-decoration-color: #3b82f6;\n}\n.decoration-red-500 {\n  text-decoration-color: #ef4444;\n}\n.decoration-yellow-500 {\n  text-decoration-color: #eab308;\n}\n.decoration-solid {\n  text-decoration-style: solid;\n}\n.decoration-double {\n  text-decoration-style: double;\n}\n.decoration-dotted {\n  text-decoration-style: dotted;\n}\n.decoration-dashed {\n  text-decoration-style: dashed;\n}\n.decoration-wavy {\n  text-decoration-style: wavy;\n}\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.subpixel-antialiased {\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\n.opacity-60 {\n  opacity: 0.6;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.bg-blend-normal {\n  background-blend-mode: normal;\n}\n.bg-blend-multiply {\n  background-blend-mode: multiply;\n}\n.bg-blend-screen {\n  background-blend-mode: screen;\n}\n.bg-blend-overlay {\n  background-blend-mode: overlay;\n}\n.bg-blend-darken {\n  background-blend-mode: darken;\n}\n.bg-blend-lighten {\n  background-blend-mode: lighten;\n}\n.bg-blend-color-dodge {\n  background-blend-mode: color-dodge;\n}\n.bg-blend-color-burn {\n  background-blend-mode: color-burn;\n}\n.bg-blend-hard-light {\n  background-blend-mode: hard-light;\n}\n.bg-blend-soft-light {\n  background-blend-mode: soft-light;\n}\n.bg-blend-difference {\n  background-blend-mode: difference;\n}\n.bg-blend-exclusion {\n  background-blend-mode: exclusion;\n}\n.bg-blend-hue {\n  background-blend-mode: hue;\n}\n.bg-blend-saturation {\n  background-blend-mode: saturation;\n}\n.bg-blend-color {\n  background-blend-mode: color;\n}\n.bg-blend-luminosity {\n  background-blend-mode: luminosity;\n}\n.mix-blend-normal {\n  mix-blend-mode: normal;\n}\n.mix-blend-multiply {\n  mix-blend-mode: multiply;\n}\n.mix-blend-screen {\n  mix-blend-mode: screen;\n}\n.mix-blend-overlay {\n  mix-blend-mode: overlay;\n}\n.mix-blend-darken {\n  mix-blend-mode: darken;\n}\n.mix-blend-lighten {\n  mix-blend-mode: lighten;\n}\n.mix-blend-color-dodge {\n  mix-blend-mode: color-dodge;\n}\n.mix-blend-color-burn {\n  mix-blend-mode: color-burn;\n}\n.mix-blend-hard-light {\n  mix-blend-mode: hard-light;\n}\n.mix-blend-soft-light {\n  mix-blend-mode: soft-light;\n}\n.mix-blend-difference {\n  mix-blend-mode: difference;\n}\n.mix-blend-exclusion {\n  mix-blend-mode: exclusion;\n}\n.mix-blend-hue {\n  mix-blend-mode: hue;\n}\n.mix-blend-saturation {\n  mix-blend-mode: saturation;\n}\n.mix-blend-color {\n  mix-blend-mode: color;\n}\n.mix-blend-luminosity {\n  mix-blend-mode: luminosity;\n}\n.mix-blend-plus-lighter {\n  mix-blend-mode: plus-lighter;\n}\n.\\!shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow) !important;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.outline-dashed {\n  outline-style: dashed;\n}\n.outline-dotted {\n  outline-style: dotted;\n}\n.outline-double {\n  outline-style: double;\n}\n.ring {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.ring-inset {\n  --tw-ring-inset: inset;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.invert {\n  --tw-invert: invert(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.sepia {\n  --tw-sepia: sepia(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.\\!filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter-none {\n  filter: none;\n}\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-grayscale {\n  --tw-backdrop-grayscale: grayscale(100%);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-invert {\n  --tw-backdrop-invert: invert(100%);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-sepia {\n  --tw-backdrop-sepia: sepia(100%);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-filter {\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-filter-none {\n  -webkit-backdrop-filter: none;\n  backdrop-filter: none;\n}\n.\\!transition {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    -webkit-backdrop-filter !important;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    backdrop-filter !important;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    backdrop-filter,\n    -webkit-backdrop-filter !important;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration: 150ms !important;\n}\n.transition {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    -webkit-backdrop-filter;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    backdrop-filter;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    opacity,\n    box-shadow,\n    transform,\n    filter,\n    backdrop-filter,\n    -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.content-\\[\\\'this-is-also-valid\\]-weirdly-enough\\\'\\] {\n  --tw-content: "this-is-also-valid]-weirdly-enough";\n  content: var(--tw-content);\n}\n@keyframes enter {\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.animate-in {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.animate-out {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.fade-in {\n  --tw-enter-opacity: 0;\n}\n.fade-out {\n  --tw-exit-opacity: 0;\n}\n.zoom-in {\n  --tw-enter-scale: 0;\n}\n.zoom-out {\n  --tw-exit-scale: 0;\n}\n.spin-in {\n  --tw-enter-rotate: 30deg;\n}\n.spin-out {\n  --tw-exit-rotate: 30deg;\n}\n.slide-in-from-bottom {\n  --tw-enter-translate-y: 100%;\n}\n.slide-in-from-left {\n  --tw-enter-translate-x: -100%;\n}\n.slide-in-from-right {\n  --tw-enter-translate-x: 100%;\n}\n.slide-in-from-top {\n  --tw-enter-translate-y: -100%;\n}\n.slide-out-to-bottom {\n  --tw-exit-translate-y: 100%;\n}\n.slide-out-to-left {\n  --tw-exit-translate-x: -100%;\n}\n.slide-out-to-right {\n  --tw-exit-translate-x: 100%;\n}\n.slide-out-to-top {\n  --tw-exit-translate-y: -100%;\n}\n.ease-in {\n  animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.running {\n  animation-play-state: running;\n}\n.paused {\n  animation-play-state: paused;\n}\n.hover\\:prose-lg:hover {\n  font-size: 1.125rem;\n  line-height: 1.7777778;\n}\n.hover\\:prose-lg:hover :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.2222222em;\n  line-height: 1.4545455;\n  margin-top: 1.0909091em;\n  margin-bottom: 1.0909091em;\n}\n.hover\\:prose-lg:hover :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.6666667em;\n  margin-bottom: 1.6666667em;\n  padding-left: 1em;\n}\n.hover\\:prose-lg:hover :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 2.6666667em;\n  margin-top: 0;\n  margin-bottom: 0.8333333em;\n  line-height: 1;\n}\n.hover\\:prose-lg:hover :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.6666667em;\n  margin-top: 1.8666667em;\n  margin-bottom: 1.0666667em;\n  line-height: 1.3333333;\n}\n.hover\\:prose-lg:hover :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.3333333em;\n  margin-top: 1.6666667em;\n  margin-bottom: 0.6666667em;\n  line-height: 1.5;\n}\n.hover\\:prose-lg:hover :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 0.4444444em;\n  line-height: 1.5555556;\n}\n.hover\\:prose-lg:hover :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.hover\\:prose-lg:hover :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.hover\\:prose-lg:hover :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.hover\\:prose-lg:hover :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.hover\\:prose-lg:hover :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  border-radius: 0.3125rem;\n  padding-top: 0.2222222em;\n  padding-right: 0.4444444em;\n  padding-bottom: 0.2222222em;\n  padding-left: 0.4444444em;\n}\n.hover\\:prose-lg:hover :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n}\n.hover\\:prose-lg:hover :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8666667em;\n}\n.hover\\:prose-lg:hover :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.875em;\n}\n.hover\\:prose-lg:hover :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.75;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  border-radius: 0.375rem;\n  padding-top: 1em;\n  padding-right: 1.5em;\n  padding-bottom: 1em;\n  padding-left: 1.5em;\n}\n.hover\\:prose-lg:hover :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n  padding-left: 1.5555556em;\n}\n.hover\\:prose-lg:hover :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n  padding-left: 1.5555556em;\n}\n.hover\\:prose-lg:hover :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.6666667em;\n  margin-bottom: 0.6666667em;\n}\n.hover\\:prose-lg:hover :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.4444444em;\n}\n.hover\\:prose-lg:hover :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.4444444em;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.hover\\:prose-lg:hover :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n}\n.hover\\:prose-lg:hover :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.6666667em;\n  padding-left: 1.5555556em;\n}\n.hover\\:prose-lg:hover :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 3.1111111em;\n  margin-bottom: 3.1111111em;\n}\n.hover\\:prose-lg:hover :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.hover\\:prose-lg:hover :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.hover\\:prose-lg:hover :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.hover\\:prose-lg:hover :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.hover\\:prose-lg:hover :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.5;\n}\n.hover\\:prose-lg:hover :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0.75em;\n  padding-bottom: 0.75em;\n  padding-left: 0.75em;\n}\n.hover\\:prose-lg:hover :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.hover\\:prose-lg:hover :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.hover\\:prose-lg:hover :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.75em;\n  padding-right: 0.75em;\n  padding-bottom: 0.75em;\n  padding-left: 0.75em;\n}\n.hover\\:prose-lg:hover :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n.hover\\:prose-lg:hover :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n.hover\\:prose-lg:hover :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7777778em;\n  margin-bottom: 1.7777778em;\n}\n.hover\\:prose-lg:hover :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.hover\\:prose-lg:hover :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n  line-height: 1.5;\n  margin-top: 1em;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.hover\\:prose-lg:hover :where(.hover\\:prose-lg:hover > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n:is(.dark .dark\\:prose) {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n:is(.dark .dark\\:prose) :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n:is(.dark .dark\\:prose) :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n:is(.dark .dark\\:prose) :where(a):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n:is(.dark .dark\\:prose) :where(strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n:is(.dark .dark\\:prose) :where(a strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(blockquote strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(thead th strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n:is(.dark .dark\\:prose) :where(ol[type=A]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n:is(.dark .dark\\:prose) :where(ol[type=a]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n:is(.dark .dark\\:prose) :where(ol[type=A s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n:is(.dark .dark\\:prose) :where(ol[type=a s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n:is(.dark .dark\\:prose) :where(ol[type=I]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n:is(.dark .dark\\:prose) :where(ol[type=i]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n:is(.dark .dark\\:prose) :where(ol[type=I s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n:is(.dark .dark\\:prose) :where(ol[type=i s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n:is(.dark .dark\\:prose) :where(ol[type="1"]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n}\n:is(.dark .dark\\:prose) :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: disc;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-left: 1.625em;\n}\n:is(.dark .dark\\:prose) :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n:is(.dark .dark\\:prose) :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n:is(.dark .dark\\:prose) :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.25em;\n}\n:is(.dark .dark\\:prose) :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n:is(.dark .dark\\:prose) :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: "\\201c""\\201d""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}\n:is(.dark .dark\\:prose) :where(blockquote p:first-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: open-quote;\n}\n:is(.dark .dark\\:prose) :where(blockquote p:last-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: close-quote;\n}\n:is(.dark .dark\\:prose) :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n:is(.dark .dark\\:prose) :where(h1 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 900;\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n:is(.dark .dark\\:prose) :where(h2 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 800;\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n:is(.dark .dark\\:prose) :where(h3 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n:is(.dark .dark\\:prose) :where(h4 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n:is(.dark .dark\\:prose) :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  display: block;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n:is(.dark .dark\\:prose) :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--tw-prose-kbd);\n  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);\n  font-size: 0.875em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1875em;\n  padding-right: 0.375em;\n  padding-bottom: 0.1875em;\n  padding-left: 0.375em;\n}\n:is(.dark .dark\\:prose) :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n:is(.dark .dark\\:prose) :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: "`";\n}\n:is(.dark .dark\\:prose) :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: "`";\n}\n:is(.dark .dark\\:prose) :where(a code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(h1 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.875em;\n}\n:is(.dark .dark\\:prose) :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.9em;\n}\n:is(.dark .dark\\:prose) :where(h4 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(blockquote code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(thead th code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n:is(.dark .dark\\:prose) :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}\n:is(.dark .dark\\:prose) :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n:is(.dark .dark\\:prose) :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: none;\n}\n:is(.dark .dark\\:prose) :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: none;\n}\n:is(.dark .dark\\:prose) :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n:is(.dark .dark\\:prose) :where(thead):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n:is(.dark .dark\\:prose) :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n:is(.dark .dark\\:prose) :where(tbody tr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n:is(.dark .dark\\:prose) :where(tbody tr:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 0;\n}\n:is(.dark .dark\\:prose) :where(tbody td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: baseline;\n}\n:is(.dark .dark\\:prose) :where(tfoot):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-top-width: 1px;\n  border-top-color: var(--tw-prose-th-borders);\n}\n:is(.dark .dark\\:prose) :where(tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: top;\n}\n:is(.dark .dark\\:prose) :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n:is(.dark .dark\\:prose) :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n:is(.dark .dark\\:prose) {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-kbd: #111827;\n  --tw-prose-kbd-shadows: 17 24 39;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-kbd: #fff;\n  --tw-prose-invert-kbd-shadows: 255 255 255;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n:is(.dark .dark\\:prose) :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n:is(.dark .dark\\:prose) :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n:is(.dark .dark\\:prose) :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n:is(.dark .dark\\:prose) :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n:is(.dark .dark\\:prose) :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0.375em;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n:is(.dark .dark\\:prose) :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n:is(.dark .dark\\:prose) :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n:is(.dark .dark\\:prose) :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  padding-left: 1.625em;\n}\n:is(.dark .dark\\:prose) :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n:is(.dark .dark\\:prose) :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n:is(.dark .dark\\:prose) :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n:is(.dark .dark\\:prose) :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n:is(.dark .dark\\:prose) :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n:is(.dark .dark\\:prose) :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n:is(.dark .dark\\:prose) :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}\n:is(.dark .dark\\:prose) :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-left: 0;\n}\n:is(.dark .dark\\:prose) :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-right: 0;\n}\n:is(.dark .dark\\:prose) :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n:is(.dark .dark\\:prose) :where(:is(.dark .dark\\:prose) > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n:is(.dark .dark\\:prose-invert) {\n  --tw-prose-body: var(--tw-prose-invert-body);\n  --tw-prose-headings: var(--tw-prose-invert-headings);\n  --tw-prose-lead: var(--tw-prose-invert-lead);\n  --tw-prose-links: var(--tw-prose-invert-links);\n  --tw-prose-bold: var(--tw-prose-invert-bold);\n  --tw-prose-counters: var(--tw-prose-invert-counters);\n  --tw-prose-bullets: var(--tw-prose-invert-bullets);\n  --tw-prose-hr: var(--tw-prose-invert-hr);\n  --tw-prose-quotes: var(--tw-prose-invert-quotes);\n  --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);\n  --tw-prose-captions: var(--tw-prose-invert-captions);\n  --tw-prose-kbd: var(--tw-prose-invert-kbd);\n  --tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);\n  --tw-prose-code: var(--tw-prose-invert-code);\n  --tw-prose-pre-code: var(--tw-prose-invert-pre-code);\n  --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);\n  --tw-prose-th-borders: var(--tw-prose-invert-th-borders);\n  --tw-prose-td-borders: var(--tw-prose-invert-td-borders);\n}\n@media (min-width: 640px) {\n  .sm\\:container {\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n  @media (min-width: 1400px) {\n    .sm\\:container {\n      max-width: 1400px;\n    }\n  }\n  .sm\\:prose {\n    color: var(--tw-prose-body);\n    max-width: 65ch;\n  }\n  .sm\\:prose :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n  }\n  .sm\\:prose :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-lead);\n    font-size: 1.25em;\n    line-height: 1.6;\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .sm\\:prose :where(a):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-links);\n    text-decoration: underline;\n    font-weight: 500;\n  }\n  .sm\\:prose :where(strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-bold);\n    font-weight: 600;\n  }\n  .sm\\:prose :where(a strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(blockquote strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(thead th strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: decimal;\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n    padding-left: 1.625em;\n  }\n  .sm\\:prose :where(ol[type=A]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: upper-alpha;\n  }\n  .sm\\:prose :where(ol[type=a]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: lower-alpha;\n  }\n  .sm\\:prose :where(ol[type=A s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: upper-alpha;\n  }\n  .sm\\:prose :where(ol[type=a s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: lower-alpha;\n  }\n  .sm\\:prose :where(ol[type=I]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: upper-roman;\n  }\n  .sm\\:prose :where(ol[type=i]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: lower-roman;\n  }\n  .sm\\:prose :where(ol[type=I s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: upper-roman;\n  }\n  .sm\\:prose :where(ol[type=i s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: lower-roman;\n  }\n  .sm\\:prose :where(ol[type="1"]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: decimal;\n  }\n  .sm\\:prose :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    list-style-type: disc;\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n    padding-left: 1.625em;\n  }\n  .sm\\:prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n    font-weight: 400;\n    color: var(--tw-prose-counters);\n  }\n  .sm\\:prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n    color: var(--tw-prose-bullets);\n  }\n  .sm\\:prose :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-headings);\n    font-weight: 600;\n    margin-top: 1.25em;\n  }\n  .sm\\:prose :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    border-color: var(--tw-prose-hr);\n    border-top-width: 1px;\n    margin-top: 3em;\n    margin-bottom: 3em;\n  }\n  .sm\\:prose :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-weight: 500;\n    font-style: italic;\n    color: var(--tw-prose-quotes);\n    border-left-width: 0.25rem;\n    border-left-color: var(--tw-prose-quote-borders);\n    quotes: "\\201c""\\201d""\\2018""\\2019";\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-left: 1em;\n  }\n  .sm\\:prose :where(blockquote p:first-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n    content: open-quote;\n  }\n  .sm\\:prose :where(blockquote p:last-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n    content: close-quote;\n  }\n  .sm\\:prose :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-headings);\n    font-weight: 800;\n    font-size: 2.25em;\n    margin-top: 0;\n    margin-bottom: 0.8888889em;\n    line-height: 1.1111111;\n  }\n  .sm\\:prose :where(h1 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-weight: 900;\n    color: inherit;\n  }\n  .sm\\:prose :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-headings);\n    font-weight: 700;\n    font-size: 1.5em;\n    margin-top: 2em;\n    margin-bottom: 1em;\n    line-height: 1.3333333;\n  }\n  .sm\\:prose :where(h2 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-weight: 800;\n    color: inherit;\n  }\n  .sm\\:prose :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-headings);\n    font-weight: 600;\n    font-size: 1.25em;\n    margin-top: 1.6em;\n    margin-bottom: 0.6em;\n    line-height: 1.6;\n  }\n  .sm\\:prose :where(h3 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-weight: 700;\n    color: inherit;\n  }\n  .sm\\:prose :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-headings);\n    font-weight: 600;\n    margin-top: 1.5em;\n    margin-bottom: 0.5em;\n    line-height: 1.5;\n  }\n  .sm\\:prose :where(h4 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-weight: 700;\n    color: inherit;\n  }\n  .sm\\:prose :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .sm\\:prose :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    display: block;\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .sm\\:prose :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-weight: 500;\n    font-family: inherit;\n    color: var(--tw-prose-kbd);\n    box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);\n    font-size: 0.875em;\n    border-radius: 0.3125rem;\n    padding-top: 0.1875em;\n    padding-right: 0.375em;\n    padding-bottom: 0.1875em;\n    padding-left: 0.375em;\n  }\n  .sm\\:prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-code);\n    font-weight: 600;\n    font-size: 0.875em;\n  }\n  .sm\\:prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n    content: "`";\n  }\n  .sm\\:prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n    content: "`";\n  }\n  .sm\\:prose :where(a code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(h1 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n    font-size: 0.875em;\n  }\n  .sm\\:prose :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n    font-size: 0.9em;\n  }\n  .sm\\:prose :where(h4 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(blockquote code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(thead th code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: inherit;\n  }\n  .sm\\:prose :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-pre-code);\n    background-color: var(--tw-prose-pre-bg);\n    overflow-x: auto;\n    font-weight: 400;\n    font-size: 0.875em;\n    line-height: 1.7142857;\n    margin-top: 1.7142857em;\n    margin-bottom: 1.7142857em;\n    border-radius: 0.375rem;\n    padding-top: 0.8571429em;\n    padding-right: 1.1428571em;\n    padding-bottom: 0.8571429em;\n    padding-left: 1.1428571em;\n  }\n  .sm\\:prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    background-color: transparent;\n    border-width: 0;\n    border-radius: 0;\n    padding: 0;\n    font-weight: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    line-height: inherit;\n  }\n  .sm\\:prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n    content: none;\n  }\n  .sm\\:prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n    content: none;\n  }\n  .sm\\:prose :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    width: 100%;\n    table-layout: auto;\n    text-align: left;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    font-size: 0.875em;\n    line-height: 1.7142857;\n  }\n  .sm\\:prose :where(thead):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    border-bottom-width: 1px;\n    border-bottom-color: var(--tw-prose-th-borders);\n  }\n  .sm\\:prose :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-headings);\n    font-weight: 600;\n    vertical-align: bottom;\n    padding-right: 0.5714286em;\n    padding-bottom: 0.5714286em;\n    padding-left: 0.5714286em;\n  }\n  .sm\\:prose :where(tbody tr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    border-bottom-width: 1px;\n    border-bottom-color: var(--tw-prose-td-borders);\n  }\n  .sm\\:prose :where(tbody tr:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    border-bottom-width: 0;\n  }\n  .sm\\:prose :where(tbody td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    vertical-align: baseline;\n  }\n  .sm\\:prose :where(tfoot):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    border-top-width: 1px;\n    border-top-color: var(--tw-prose-th-borders);\n  }\n  .sm\\:prose :where(tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    vertical-align: top;\n  }\n  .sm\\:prose :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .sm\\:prose :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    color: var(--tw-prose-captions);\n    font-size: 0.875em;\n    line-height: 1.4285714;\n    margin-top: 0.8571429em;\n  }\n  .sm\\:prose {\n    --tw-prose-body: #374151;\n    --tw-prose-headings: #111827;\n    --tw-prose-lead: #4b5563;\n    --tw-prose-links: #111827;\n    --tw-prose-bold: #111827;\n    --tw-prose-counters: #6b7280;\n    --tw-prose-bullets: #d1d5db;\n    --tw-prose-hr: #e5e7eb;\n    --tw-prose-quotes: #111827;\n    --tw-prose-quote-borders: #e5e7eb;\n    --tw-prose-captions: #6b7280;\n    --tw-prose-kbd: #111827;\n    --tw-prose-kbd-shadows: 17 24 39;\n    --tw-prose-code: #111827;\n    --tw-prose-pre-code: #e5e7eb;\n    --tw-prose-pre-bg: #1f2937;\n    --tw-prose-th-borders: #d1d5db;\n    --tw-prose-td-borders: #e5e7eb;\n    --tw-prose-invert-body: #d1d5db;\n    --tw-prose-invert-headings: #fff;\n    --tw-prose-invert-lead: #9ca3af;\n    --tw-prose-invert-links: #fff;\n    --tw-prose-invert-bold: #fff;\n    --tw-prose-invert-counters: #9ca3af;\n    --tw-prose-invert-bullets: #4b5563;\n    --tw-prose-invert-hr: #374151;\n    --tw-prose-invert-quotes: #f3f4f6;\n    --tw-prose-invert-quote-borders: #374151;\n    --tw-prose-invert-captions: #9ca3af;\n    --tw-prose-invert-kbd: #fff;\n    --tw-prose-invert-kbd-shadows: 255 255 255;\n    --tw-prose-invert-code: #fff;\n    --tw-prose-invert-pre-code: #d1d5db;\n    --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n    --tw-prose-invert-th-borders: #4b5563;\n    --tw-prose-invert-td-borders: #374151;\n    font-size: 1rem;\n    line-height: 1.75;\n  }\n  .sm\\:prose :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .sm\\:prose :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .sm\\:prose :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n  }\n  .sm\\:prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.375em;\n  }\n  .sm\\:prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.375em;\n  }\n  .sm\\:prose :where(.sm\\:prose > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n  }\n  .sm\\:prose :where(.sm\\:prose > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.25em;\n  }\n  .sm\\:prose :where(.sm\\:prose > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.25em;\n  }\n  .sm\\:prose :where(.sm\\:prose > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.25em;\n  }\n  .sm\\:prose :where(.sm\\:prose > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.25em;\n  }\n  .sm\\:prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n  }\n  .sm\\:prose :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n  }\n  .sm\\:prose :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.5em;\n    padding-left: 1.625em;\n  }\n  .sm\\:prose :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .sm\\:prose :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .sm\\:prose :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .sm\\:prose :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .sm\\:prose :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .sm\\:prose :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .sm\\:prose :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-top: 0.5714286em;\n    padding-right: 0.5714286em;\n    padding-bottom: 0.5714286em;\n    padding-left: 0.5714286em;\n  }\n  .sm\\:prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .sm\\:prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .sm\\:prose :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .sm\\:prose :where(.sm\\:prose > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .sm\\:prose :where(.sm\\:prose > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:prose-lg {\n    font-size: 1.125rem;\n    line-height: 1.7777778;\n  }\n  .lg\\:prose-lg :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n    margin-bottom: 1.3333333em;\n  }\n  .lg\\:prose-lg :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.2222222em;\n    line-height: 1.4545455;\n    margin-top: 1.0909091em;\n    margin-bottom: 1.0909091em;\n  }\n  .lg\\:prose-lg :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.6666667em;\n    margin-bottom: 1.6666667em;\n    padding-left: 1em;\n  }\n  .lg\\:prose-lg :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 2.6666667em;\n    margin-top: 0;\n    margin-bottom: 0.8333333em;\n    line-height: 1;\n  }\n  .lg\\:prose-lg :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.6666667em;\n    margin-top: 1.8666667em;\n    margin-bottom: 1.0666667em;\n    line-height: 1.3333333;\n  }\n  .lg\\:prose-lg :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.3333333em;\n    margin-top: 1.6666667em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.5;\n  }\n  .lg\\:prose-lg :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 0.4444444em;\n    line-height: 1.5555556;\n  }\n  .lg\\:prose-lg :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }\n  .lg\\:prose-lg :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }\n  .lg\\:prose-lg :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-lg :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }\n  .lg\\:prose-lg :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8888889em;\n    border-radius: 0.3125rem;\n    padding-top: 0.2222222em;\n    padding-right: 0.4444444em;\n    padding-bottom: 0.2222222em;\n    padding-left: 0.4444444em;\n  }\n  .lg\\:prose-lg :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8888889em;\n  }\n  .lg\\:prose-lg :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8666667em;\n  }\n  .lg\\:prose-lg :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.875em;\n  }\n  .lg\\:prose-lg :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8888889em;\n    line-height: 1.75;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.375rem;\n    padding-top: 1em;\n    padding-right: 1.5em;\n    padding-bottom: 1em;\n    padding-left: 1.5em;\n  }\n  .lg\\:prose-lg :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n    margin-bottom: 1.3333333em;\n    padding-left: 1.5555556em;\n  }\n  .lg\\:prose-lg :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n    margin-bottom: 1.3333333em;\n    padding-left: 1.5555556em;\n  }\n  .lg\\:prose-lg :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6666667em;\n    margin-bottom: 0.6666667em;\n  }\n  .lg\\:prose-lg :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4444444em;\n  }\n  .lg\\:prose-lg :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4444444em;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8888889em;\n    margin-bottom: 0.8888889em;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.3333333em;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.3333333em;\n  }\n  .lg\\:prose-lg :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8888889em;\n    margin-bottom: 0.8888889em;\n  }\n  .lg\\:prose-lg :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n    margin-bottom: 1.3333333em;\n  }\n  .lg\\:prose-lg :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.3333333em;\n  }\n  .lg\\:prose-lg :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6666667em;\n    padding-left: 1.5555556em;\n  }\n  .lg\\:prose-lg :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 3.1111111em;\n    margin-bottom: 3.1111111em;\n  }\n  .lg\\:prose-lg :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-lg :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-lg :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-lg :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-lg :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8888889em;\n    line-height: 1.5;\n  }\n  .lg\\:prose-lg :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0.75em;\n    padding-bottom: 0.75em;\n    padding-left: 0.75em;\n  }\n  .lg\\:prose-lg :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-lg :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-lg :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-top: 0.75em;\n    padding-right: 0.75em;\n    padding-bottom: 0.75em;\n    padding-left: 0.75em;\n  }\n  .lg\\:prose-lg :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-lg :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-lg :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.7777778em;\n    margin-bottom: 1.7777778em;\n  }\n  .lg\\:prose-lg :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-lg :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8888889em;\n    line-height: 1.5;\n    margin-top: 1em;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-lg :where(.lg\\:prose-lg > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl {\n    font-size: 1.25rem;\n    line-height: 1.8;\n  }\n  .lg\\:prose-xl :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.2em;\n    line-height: 1.5;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n  .lg\\:prose-xl :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-left: 1.0666667em;\n  }\n  .lg\\:prose-xl :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 2.8em;\n    margin-top: 0;\n    margin-bottom: 0.8571429em;\n    line-height: 1;\n  }\n  .lg\\:prose-xl :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.8em;\n    margin-top: 1.5555556em;\n    margin-bottom: 0.8888889em;\n    line-height: 1.1111111;\n  }\n  .lg\\:prose-xl :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 1.5em;\n    margin-top: 1.6em;\n    margin-bottom: 0.6666667em;\n    line-height: 1.3333333;\n  }\n  .lg\\:prose-xl :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.8em;\n    margin-bottom: 0.6em;\n    line-height: 1.6;\n  }\n  .lg\\:prose-xl :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    border-radius: 0.3125rem;\n    padding-top: 0.25em;\n    padding-right: 0.4em;\n    padding-bottom: 0.25em;\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n  }\n  .lg\\:prose-xl :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.8611111em;\n  }\n  .lg\\:prose-xl :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n  }\n  .lg\\:prose-xl :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.7777778;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    border-radius: 0.5rem;\n    padding-top: 1.1111111em;\n    padding-right: 1.3333333em;\n    padding-bottom: 1.1111111em;\n    padding-left: 1.3333333em;\n  }\n  .lg\\:prose-xl :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6em;\n    margin-bottom: 0.6em;\n  }\n  .lg\\:prose-xl :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0.4em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ul > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ol > li > *:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > ol > li > *:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }\n  .lg\\:prose-xl :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n  }\n  .lg\\:prose-xl :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 1.2em;\n  }\n  .lg\\:prose-xl :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0.6em;\n    padding-left: 1.6em;\n  }\n  .lg\\:prose-xl :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2.8em;\n    margin-bottom: 2.8em;\n  }\n  .lg\\:prose-xl :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n  }\n  .lg\\:prose-xl :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n  .lg\\:prose-xl :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-xl :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-xl :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-top: 0.8888889em;\n    padding-right: 0.6666667em;\n    padding-bottom: 0.8888889em;\n    padding-left: 0.6666667em;\n  }\n  .lg\\:prose-xl :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-left: 0;\n  }\n  .lg\\:prose-xl :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    padding-right: 0;\n  }\n  .lg\\:prose-xl :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n  .lg\\:prose-xl :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .lg\\:prose-xl :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    font-size: 0.9em;\n    line-height: 1.5555556;\n    margin-top: 1em;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-top: 0;\n  }\n  .lg\\:prose-xl :where(.lg\\:prose-xl > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n    margin-bottom: 0;\n  }\n}\n.hover\\:bg-accent:hover {\n  background-color: hsl(var(--accent));\n}\n.hover\\:bg-destructive\\/90:hover {\n  background-color: hsl(var(--destructive) / 0.9);\n}\n.hover\\:bg-primary\\/90:hover {\n  background-color: hsl(var(--primary) / 0.9);\n}\n.hover\\:bg-secondary\\/80:hover {\n  background-color: hsl(var(--secondary) / 0.8);\n}\n.hover\\:font-bold:hover {\n  font-weight: 700;\n}\n.hover\\:text-accent-foreground:hover {\n  color: hsl(var(--accent-foreground));\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.before\\:hover\\:text-center:hover::before {\n  content: var(--tw-content);\n  text-align: center;\n}\n.hover\\:before\\:text-center:hover::before {\n  content: var(--tw-content);\n  text-align: center;\n}\n.focus\\:bg-accent:focus {\n  background-color: hsl(var(--accent));\n}\n.focus\\:text-accent-foreground:focus {\n  color: hsl(var(--accent-foreground));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:hover\\:text-center:hover:focus {\n  text-align: center;\n}\n.hover\\:focus\\:text-center:focus:hover {\n  text-align: center;\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--ring));\n}\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n.group:hover .group-hover\\:bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 249 195 / var(--tw-bg-opacity));\n}\n.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {\n  pointer-events: none;\n}\n.data-\\[state\\=open\\]\\:bg-accent[data-state=open] {\n  background-color: hsl(var(--accent));\n}\n.data-\\[disabled\\]\\:opacity-50[data-disabled] {\n  opacity: 0.5;\n}\n.data-\\[state\\=open\\]\\:animate-in[data-state=open] {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {\n  --tw-exit-opacity: 0;\n}\n.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {\n  --tw-enter-opacity: 0;\n}\n.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {\n  --tw-exit-scale: .95;\n}\n.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {\n  --tw-enter-scale: .95;\n}\n.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {\n  --tw-enter-translate-y: -0.5rem;\n}\n.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {\n  --tw-enter-translate-x: 0.5rem;\n}\n.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {\n  --tw-enter-translate-x: -0.5rem;\n}\n.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {\n  --tw-enter-translate-y: 0.5rem;\n}\n.prose-headings\\:text-ellipsis :is(:where(h1, h2, h3, h4, h5, h6, th):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  text-overflow: ellipsis;\n}\n.prose-headings\\:underline :is(:where(h1, h2, h3, h4, h5, h6, th):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  text-decoration-line: underline;\n}\n.prose-h1\\:text-center :is(:where(h1):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  text-align: center;\n}\n.prose-h1\\:text-3xl :is(:where(h1):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.prose-h2\\:text-2xl :is(:where(h2):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.prose-h3\\:text-xl :is(:where(h3):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.prose-h4\\:text-lg :is(:where(h4):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.prose-h5\\:text-sm :is(:where(h5):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.prose-h6\\:text-xl :is(:where(h6):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.prose-p\\:text-gray-700 :is(:where(p):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.prose-a\\:font-bold :is(:where(a):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-weight: 700;\n}\n.prose-blockquote\\:italic :is(:where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-style: italic;\n}\n.prose-figure\\:mx-auto :is(:where(figure):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  margin-left: auto;\n  margin-right: auto;\n}\n.prose-figcaption\\:opacity-75 :is(:where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  opacity: 0.75;\n}\n.prose-strong\\:font-medium :is(:where(strong):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-weight: 500;\n}\n.prose-em\\:italic :is(:where(em):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-style: italic;\n}\n.prose-code\\:font-mono :is(:where(code):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n}\n.prose-pre\\:font-mono :is(:where(pre):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n}\n.prose-ol\\:pl-6 :is(:where(ol):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  padding-left: 1.5rem;\n}\n.prose-ul\\:pl-8 :is(:where(ul):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  padding-left: 2rem;\n}\n.prose-li\\:my-4 :is(:where(li):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.prose-table\\:my-8 :is(:where(table):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.prose-thead\\:border-red-300 :is(:where(thead):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity));\n}\n.prose-tr\\:border-red-200 :is(:where(tr):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity));\n}\n.prose-th\\:text-left :is(:where(th):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  text-align: left;\n}\n.prose-img\\:rounded-lg :is(:where(img):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  border-radius: var(--radius);\n}\n.prose-video\\:my-12 :is(:where(video):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.prose-hr\\:border-t-2 :is(:where(hr):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  border-top-width: 2px;\n}\n.prose-lead\\:italic :is(:where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *))) {\n  font-style: italic;\n}\n@media (min-width: 640px) {\n  .sm\\:underline {\n    text-decoration-line: underline;\n  }\n}\n@media (min-width: 1024px) {\n  :is(.dark .dark\\:lg\\:hover\\:\\[paint-order\\:markers\\]:hover) {\n    paint-order: markers;\n  }\n}\n');
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var Card = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues2({
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )
    }, props)
  );
});
Card.displayName = "Card";
var CardHeader = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues2({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "h3",
    __spreadValues2({
      ref,
      className: cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues2({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx("div", __spreadValues2({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues2({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
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
var Button = React22.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size: size2, asChild = false } = _b, props = __objRest2(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
    return /* @__PURE__ */ jsx2(
      Comp,
      __spreadValues2({
        className: cn(buttonVariants({ variant, size: size2, className })),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";
var HoverCard = $cef8881cdc69808e$export$be92b6f5f03c0fe9;
var HoverCardTrigger = $cef8881cdc69808e$export$41fb9f06171c75f4;
var HoverCardContent = React32.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest2(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx3(
    $cef8881cdc69808e$export$7c6e2c02157bb7d2,
    __spreadValues2({
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
HoverCardContent.displayName = $cef8881cdc69808e$export$7c6e2c02157bb7d2.displayName;
var Separator = React42.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest2(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ jsx4(
      $89eedd556c436f6a$export$be92b6f5f03c0fe9,
      __spreadValues2({
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
Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
var DropdownMenuSubTrigger = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest2(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs(
    $d08ef79370b62062$export$2ea8a7a591ac5eac,
    __spreadProps2(__spreadValues2({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx5(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = $d08ef79370b62062$export$2ea8a7a591ac5eac.displayName;
var DropdownMenuSubContent = React52.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx5(
    $d08ef79370b62062$export$6d4de93b380beddf,
    __spreadValues2({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = $d08ef79370b62062$export$6d4de93b380beddf.displayName;
var DropdownMenuContent = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest2(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx5($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ jsx5(
    $d08ef79370b62062$export$7c6e2c02157bb7d2,
    __spreadValues2({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = $d08ef79370b62062$export$7c6e2c02157bb7d2.displayName;
var DropdownMenuItem = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest2(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx5(
    $d08ef79370b62062$export$6d08773d2e66f8f2,
    __spreadValues2({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = $d08ef79370b62062$export$6d08773d2e66f8f2.displayName;
var DropdownMenuCheckboxItem = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest2(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs(
    $d08ef79370b62062$export$16ce288f89fa631c,
    __spreadProps2(__spreadValues2({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx5("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx5($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsx5(CheckIcon, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = $d08ef79370b62062$export$16ce288f89fa631c.displayName;
var DropdownMenuRadioItem = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest2(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    $d08ef79370b62062$export$371ab307eab489c0,
    __spreadProps2(__spreadValues2({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx5("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx5($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ jsx5(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = $d08ef79370b62062$export$371ab307eab489c0.displayName;
var DropdownMenuLabel = React52.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest2(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx5(
    $d08ef79370b62062$export$b04be29aa201d4f5,
    __spreadValues2({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = $d08ef79370b62062$export$b04be29aa201d4f5.displayName;
var DropdownMenuSeparator = React52.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest2(_b, ["className"]);
  return /* @__PURE__ */ jsx5(
    $d08ef79370b62062$export$1ff3c3f08ae963c0,
    __spreadValues2({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = $d08ef79370b62062$export$1ff3c3f08ae963c0.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest2(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx5(
    "span",
    __spreadValues2({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/comment/comment-item.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function CommentItem({ commentAtom }) {
  const comment = useAtomValue(commentAtom);
  const [currentActiveCommentId, setCurrentActiveCommentId] = useAtom(
    currentActiveCommentIdAtom
  );
  return /* @__PURE__ */ jsxs2(
    Card,
    {
      className: currentActiveCommentId.activeCommentId === comment.id ? "shadow-lg" : "shadow-sm",
      onMouseEnter: () => setCurrentActiveCommentId(() => ({ activeCommentId: comment.id })),
      onMouseLeave: () => setCurrentActiveCommentId(() => ({ activeCommentId: null })),
      children: [
        /* @__PURE__ */ jsx6(CardHeader, { children: /* @__PURE__ */ jsx6(CardTitle, { children: comment.comment }) }),
        currentActiveCommentId.activeCommentId === comment.id && /* @__PURE__ */ jsxs2(CardFooter, { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx6(Button, { variant: "outline", children: "Decline" }),
          /* @__PURE__ */ jsx6(Button, { children: "Accept" })
        ] })
      ]
    }
  );
}

// src/components/comment/comment-list.tsx
import { useAtomValue as useAtomValue2 } from "jotai";
import { jsx as jsx7 } from "react/jsx-runtime";
function CommentList() {
  const comments = useAtomValue2(commentsAtom);
  return /* @__PURE__ */ jsx7("div", { className: "space-y-4 min-w-fit", children: comments.map((comment, id) => /* @__PURE__ */ jsx7(CommentItem, { commentAtom: comment }, id)) });
}

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
import { useEffect as useEffect4 } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs3(HoverCard, { openDelay: 0, closeDelay: 200, children: [
      /* @__PURE__ */ jsx8(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsx8("span", { className: textCN, contentEditable: false, children: this.__text }) }),
      /* @__PURE__ */ jsxs3(HoverCardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs3("div", { className: "text-sm", children: [
          "... ",
          /* @__PURE__ */ jsx8("span", { className: "text-green-600", children: this.__correction }),
          " ",
          /* @__PURE__ */ jsx8("span", { className: "text-red-600 line-through", children: this.__text }),
          " ..."
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2", contentEditable: false, children: [
          /* @__PURE__ */ jsx8(
            Button,
            {
              size: "sm",
              onClick: () => {
                this.__onAccept();
              },
              children: "Accept"
            }
          ),
          /* @__PURE__ */ jsx8(
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
  useEffect4(() => {
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
  createCommand as createCommand2,
  TextNode
} from "lexical";
import { useEffect as useEffect5 } from "react";
import { useLexicalComposerContext as useLexicalComposerContext2 } from "@lexical/react/LexicalComposerContext";
import {
  mergeRegister
} from "@lexical/utils";

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
var CommentTextNode = class _CommentTextNode extends TextNode {
  constructor(text, commentId, key) {
    super(text, key);
    this.__active = false;
    this.__commentId = commentId;
  }
  static getType() {
    return "commentText";
  }
  static clone(node) {
    return new _CommentTextNode(node.__text, node.__commentId, node.__key);
  }
  createDOM(config) {
    const element = super.createDOM(config);
    element.classList.add(
      "bg-yellow-200",
      "underline",
      "cursor-pointer",
      "dark:bg-yellow-700"
    );
    element.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      e.preventDefault();
      commentIdStore.setState({
        activeCommentId: this.__commentId
      });
    });
    element.addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      e.preventDefault();
      commentIdStore.setState({
        activeCommentId: null
      });
    });
    return element;
  }
  updateDOM(prevNode, dom, config) {
    const isUpdated = super.updateDOM(prevNode, dom, config);
    if (prevNode.__active !== this.__active) {
      if (this.__active) {
        dom.classList.add("bg-yellow-300", "dark:bg-yellow-600");
      } else {
        dom.classList.remove("bg-yellow-300", "dark:bg-yellow-600");
      }
    }
    return isUpdated;
  }
};
function CommentPlugin() {
  const [editor] = useLexicalComposerContext2();
  const currentActiveComment = useAtomValue3(currentActiveCommentAtom);
  const comments = useAtomValue3(_commentsAtom);
  useEffect5(() => {
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
  useEffect5(() => {
    let addedIndex = 0;
    comments.forEach((comment) => {
      editor.dispatchCommand(HIGHLIGHT_RANGE_COMMAND, {
        paragraphIndex: comment.paragraphIndex,
        id: comment.id
      });
      addedIndex++;
    });
  }, [comments]);
  useEffect5(() => {
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
import { jsx as jsx9 } from "react/jsx-runtime";
function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext3();
  return /* @__PURE__ */ jsx9(
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
import React9, { useEffect as useEffect7 } from "react";

// src/utils/hooks/use-leaving-count.tsx
import { useEffect as useEffect6, useState as useState6 } from "react";
var useLeavingCount = (onReturning) => {
  const [leaving, setLeaving] = useState6(false);
  const [count, setCount] = useState6(0);
  const clearCount = () => {
    setCount(0);
  };
  useEffect6(() => {
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
  const lastCharacterCount = React9.useRef(0);
  const lastTime = React9.useRef(Date.now());
  const { count } = useLeavingCount();
  useEffect7(() => {
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
  useEffect7(() => {
    setProbDistraction(count);
  }, [count]);
  return null;
}

// src/components/lexical-editor/index.tsx
import { Fragment as Fragment3, jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
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
      CommentTextNode,
      CustomParagraphNode,
      {
        replace: ParagraphNode3,
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
  useEffect8(() => {
    onUserBehaviorChange == null ? void 0 : onUserBehaviorChange(userBehavior);
  }, [userBehavior]);
  return /* @__PURE__ */ jsxs4("div", { className: "relative h-full overflow-auto", children: [
    /* @__PURE__ */ jsx10(Toaster, { position: "bottom-left", theme }),
    debugMode && /* @__PURE__ */ jsxs4(Card, { className: "fixed bottom-10 right-10", children: [
      /* @__PURE__ */ jsx10(CardHeader, { children: /* @__PURE__ */ jsx10(CardTitle, { children: "User Behavior" }) }),
      /* @__PURE__ */ jsx10(CardContent, { children: /* @__PURE__ */ jsxs4("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx10("p", { className: "text-sm font-medium leading-none", children: "Typing Speed" }),
          /* @__PURE__ */ jsxs4("p", { className: "text-sm text-muted-foreground", children: [
            typingSpeed.toFixed(2),
            " chars/s"
          ] })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx10("p", { className: "text-sm font-medium leading-none", children: "Distraction Count" }),
          /* @__PURE__ */ jsxs4("p", { className: "text-sm text-muted-foreground", children: [
            probDistraction,
            " times"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx10(CardFooter, {})
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "h-full flex flex-row justify-center space-x-4", children: [
      /* @__PURE__ */ jsx10(
        "div",
        {
          className: "w-full relative p-6 rounded-xl border bg-card text-card-foreground shadow",
          children: /* @__PURE__ */ jsxs4(LexicalComposer, { initialConfig: config, children: [
            /* @__PURE__ */ jsx10(
              RichTextPlugin,
              {
                contentEditable: /* @__PURE__ */ jsx10(ContentEditable, {}),
                placeholder: null,
                ErrorBoundary: LexicalErrorBoundary
              }
            ),
            /* @__PURE__ */ jsx10(AutoFocusPlugin, {}),
            /* @__PURE__ */ jsx10(MarkdownShortcutPlugin, { transformers: TRANSFORMERS }),
            /* @__PURE__ */ jsx10(HistoryPlugin, {}),
            /* @__PURE__ */ jsx10(ListPlugin, {}),
            /* @__PURE__ */ jsx10(LinkPlugin, {}),
            /* @__PURE__ */ jsx10(TabIndentationPlugin, {}),
            /* @__PURE__ */ jsx10(AiHighlightPlugin, { debugMode }),
            /* @__PURE__ */ jsx10(UserBehaviorDetectorPlugin, {}),
            /* @__PURE__ */ jsx10(CommentPlugin, {}),
            /* @__PURE__ */ jsx10(Fragment3, { children: !!debugMode && /* @__PURE__ */ jsx10("div", { className: "absolute bottom-0 left-0 border border-red-500 overflow-auto max-w-full h-1/2", children: /* @__PURE__ */ jsx10(TreeViewPlugin, {}) }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx10(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ jsx10(CommentList, {})
    ] })
  ] });
}

// src/components/tompi-ui/index.tsx
import { toast } from "sonner";
function notification(message, data) {
  return toast(message, data);
}
function highlight(editor, text, highlight2) {
  const regex = new RegExp(highlight2, "gi");
  return text.replace(regex, (match) => `<mark>${match}</mark>`);
}
var UI = {
  notification,
  highlight
};
var tompi_ui_default = UI;
export {
  Editor,
  tompi_ui_default as UI
};

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1af72a68.js');

/*
 Stencil Client Patch Esm v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["post-card.cjs",[[0,"post-card",{"title":[1],"body":[1]}]]],["post-list.cjs",[[0,"post-list",{"posts":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;

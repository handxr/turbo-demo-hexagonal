import { p as promiseResolve, b as bootstrapLazy } from './index-4cd33273.js';

/*
 Stencil Client Patch Esm v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["post-card",[[0,"post-card",{"title":[1],"body":[1]}]]],["post-list",[[0,"post-list",{"posts":[16]}]]]], options);
  });
};

export { defineCustomElements };

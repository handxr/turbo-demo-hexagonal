'use strict';

const index = require('./index-1af72a68.js');

/*
 Stencil Client Patch Browser v2.19.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(index.H.prototype);
    }
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('web-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["post-card.cjs",[[0,"post-card",{"title":[1],"body":[1]}]]],["post-list.cjs",[[0,"post-list",{"posts":[16]}]]]], options);
});

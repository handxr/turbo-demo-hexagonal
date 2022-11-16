'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1af72a68.js');

const PostCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.title = undefined;
    this.body = undefined;
  }
  render() {
    return (index.h("div", null, index.h("h2", null, this.title), index.h("p", null, this.body)));
  }
};

exports.post_card = PostCard;

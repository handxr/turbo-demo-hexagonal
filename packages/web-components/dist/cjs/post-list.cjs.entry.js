'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1af72a68.js');

const PostList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.posts = undefined;
  }
  render() {
    console.log("yo");
    return (index.h("ul", null, this.posts
      .slice(-5)
      .reverse()
      .map((post) => (index.h("li", null, post.title)))));
  }
};

exports.post_list = PostList;

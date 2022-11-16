import { r as registerInstance, h } from './index-4cd33273.js';

const PostList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.posts = undefined;
  }
  render() {
    console.log("yo");
    return (h("ul", null, this.posts
      .slice(-5)
      .reverse()
      .map((post) => (h("li", null, post.title)))));
  }
};

export { PostList as post_list };

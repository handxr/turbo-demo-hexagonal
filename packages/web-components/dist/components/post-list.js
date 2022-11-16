import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const PostList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.posts = undefined;
  }
  render() {
    console.log("yo");
    return (h("ul", null, this.posts
      .slice(-5)
      .reverse()
      .map((post) => (h("li", null, post.title)))));
  }
}, [0, "post-list", {
    "posts": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["post-list"];
  components.forEach(tagName => { switch (tagName) {
    case "post-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PostList$1);
      }
      break;
  } });
}

const PostList = PostList$1;
const defineCustomElement = defineCustomElement$1;

export { PostList, defineCustomElement };

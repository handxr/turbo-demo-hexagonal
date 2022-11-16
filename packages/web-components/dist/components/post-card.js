import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const PostCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.title = undefined;
    this.body = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, this.title), h("p", null, this.body)));
  }
}, [0, "post-card", {
    "title": [1],
    "body": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["post-card"];
  components.forEach(tagName => { switch (tagName) {
    case "post-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PostCard$1);
      }
      break;
  } });
}

const PostCard = PostCard$1;
const defineCustomElement = defineCustomElement$1;

export { PostCard, defineCustomElement };

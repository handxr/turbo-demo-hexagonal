import { h } from "@stencil/core";
export class PostList {
  constructor() {
    this.posts = undefined;
  }
  render() {
    console.log("yo");
    return (h("ul", null, this.posts
      .slice(-5)
      .reverse()
      .map((post) => (h("li", null, post.title)))));
  }
  static get is() { return "post-list"; }
  static get properties() {
    return {
      "posts": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
}

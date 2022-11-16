import { h } from "@stencil/core";
export class PostCard {
  constructor() {
    this.title = undefined;
    this.body = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, this.title), h("p", null, this.body)));
  }
  static get is() { return "post-card"; }
  static get properties() {
    return {
      "title": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "title",
        "reflect": false
      },
      "body": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "body",
        "reflect": false
      }
    };
  }
}

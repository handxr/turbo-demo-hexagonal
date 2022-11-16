import { r as registerInstance, h } from './index-4cd33273.js';

const PostCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = undefined;
    this.body = undefined;
  }
  render() {
    return (h("div", null, h("h2", null, this.title), h("p", null, this.body)));
  }
};

export { PostCard as post_card };

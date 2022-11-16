import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "post-card",
})
export class PostCard {
  @Prop() title: string;

  @Prop() body: string;

  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        <p>{this.body}</p>
      </div>
    );
  }
}

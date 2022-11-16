import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "post-list",
})
export class PostList {
  @Prop() posts: any[];

  render() {
    console.log("yo");
    return (
      <ul>
        {this.posts
          .slice(-5)
          .reverse()
          .map((post) => (
            <li>{post.title}</li>
          ))}
      </ul>
    );
  }
}

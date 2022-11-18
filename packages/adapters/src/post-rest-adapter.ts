import type { IPost, PostAdapter } from "domain";

export class PostRestAdapter implements PostAdapter {
  #url = "https://jsonplaceholder.typicode.com/posts";

  async getPosts(): Promise<IPost[]> {
    const response = await fetch(this.#url);
    return await response.json();
  }

  async getPost(id: number): Promise<IPost> {
    const response = await fetch(`${this.#url}/${id}`);
    return await response.json();
  }

  async createPost(post: IPost): Promise<IPost> {
    const response = await fetch(this.#url, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.json();
  }
}

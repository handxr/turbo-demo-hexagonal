import { PostAPI } from "./ports/api/post";
import { Post as IPost } from "./interfaces/post";
import { PostAdapter } from "./ports/spi/post-adapter";

class Post implements PostAPI {
  postAdapter: PostAdapter;

  constructor(postAdapter: PostAdapter) {
    this.postAdapter = postAdapter;
  }

  async getPosts(): Promise<IPost[]> {
    return await this.postAdapter.getPosts();
  }

  async getPost(id: number): Promise<IPost> {
    return await this.postAdapter.getPost(id);
  }

  async createPost(post: IPost): Promise<IPost> {
    return await this.postAdapter.createPost(post);
  }
}

export { Post };

import { Post } from "../../interfaces/post";

export interface PostAPI {
  getPosts(): Promise<Post[]>;
  getPost(id: number): Promise<Post>;
  createPost(post: Post): Promise<Post>;
}

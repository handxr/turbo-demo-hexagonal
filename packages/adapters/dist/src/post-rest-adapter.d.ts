import type { IPost, PostAdapter } from "domain";
export declare class PostRestAdapter implements PostAdapter {
    getPosts(): Promise<IPost[]>;
    getPost(id: number): Promise<IPost>;
    createPost(post: IPost): Promise<IPost>;
}
//# sourceMappingURL=post-rest-adapter.d.ts.map
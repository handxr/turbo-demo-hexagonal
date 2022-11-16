import { usePost } from "../hooks";
import "web-components/dist/components/post-card";

export const PostsList = () => {
  const { posts } = usePost();
  return (
    <ul>
      {posts
        .slice(-5)
        .reverse()
        .map((post) => (
          <li key={post.id}>
            <post-card title={post.title} body={post.body} />
          </li>
        ))}
    </ul>
  );
};

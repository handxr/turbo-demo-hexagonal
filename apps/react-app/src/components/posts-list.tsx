import { usePost } from "../hooks";

export const PostsList = () => {
  const { posts } = usePost();
  return (
    <ul>
      {posts
        .slice(-5)
        .reverse()
        .map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
    </ul>
  );
};

import { AppLoader } from "loader";
import React from "react";

export const usePost = () => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const postAPI = AppLoader.getPostInstance();

  React.useEffect(() => {
    postAPI.getPosts().then((posts) => setPosts(posts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createPost = async (post: any) => {
    await postAPI.createPost(post);
  };

  return {
    posts,
    createPost,
  };
};

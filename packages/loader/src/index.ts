import { PostRestAdapter } from "adapters";
import { Post, PostAPI } from "domain";

namespace AppLoader {
  const postAdapter = new PostRestAdapter();

  const postServiceApi = new Post(postAdapter);

  export function getPostInstance(): PostAPI {
    return postServiceApi;
  }
}

export { AppLoader };

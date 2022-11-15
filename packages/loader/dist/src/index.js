import { PostRestAdapter } from "adapters";
import { Post } from "domain";
var AppLoader;
(function (AppLoader) {
    const postAdapter = new PostRestAdapter();
    const postServiceApi = new Post(postAdapter);
    function getPostInstance() {
        return postServiceApi;
    }
    AppLoader.getPostInstance = getPostInstance;
})(AppLoader || (AppLoader = {}));
export { AppLoader };
//# sourceMappingURL=index.js.map
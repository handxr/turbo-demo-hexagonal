import { AddPostForm, PostsList } from "./components";
import "web-components/dist/components/post-card";

function App() {
  return (
    <main>
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;

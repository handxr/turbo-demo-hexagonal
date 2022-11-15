import React from "react";
import { AppLoader } from "loader";

function App() {
  const postAPI = AppLoader.getPostInstance();

  React.useEffect(() => {
    postAPI.getPosts().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

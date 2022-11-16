import React from "react";
import { usePost } from "../hooks";

export const AddPostForm = () => {
  const { createPost } = usePost();

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(formRef.current!);

    const post = {
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    };

    await createPost(post)
      .then(() => {
        window.alert("Post created");
        formRef.current!.reset();
      })
      .catch((err) => window.alert(err));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea name="body" id="body" />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

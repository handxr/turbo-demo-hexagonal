import React from "react";
import { usePost } from "../hooks";

export const AddPostForm = () => {
  const { createPost } = usePost();

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(formRef.current!);

    const post = {
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    };

    createPost(post);

    formRef.current!.reset();
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

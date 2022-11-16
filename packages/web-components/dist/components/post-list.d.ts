import type { Components, JSX } from "../types/components";

interface PostList extends Components.PostList, HTMLElement {}
export const PostList: {
  prototype: PostList;
  new (): PostList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

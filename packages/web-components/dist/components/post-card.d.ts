import type { Components, JSX } from "../types/components";

interface PostCard extends Components.PostCard, HTMLElement {}
export const PostCard: {
  prototype: PostCard;
  new (): PostCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import { Entity } from "./entity";

export interface Post extends Entity {
  title: string;
  body: string;
  userId: number;
}

import { InjectionKey } from "vue";
import { PostAPI } from "domain";

export const POST_API: InjectionKey<PostAPI> = Symbol("POST_API");

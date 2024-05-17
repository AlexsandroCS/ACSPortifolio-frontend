import { Post } from "./post";

export interface PostPage{
  post: Post[];
  totalPosts: number;
  totalPages: number;
}

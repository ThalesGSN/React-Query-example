import React from "react";
import usePost from "./hooks/usePost";
import PostSkeleton from "./Post.skeleton";
import { CircularProgress } from "@material-ui/core";
import { PostContainer } from "./Post.styles";

const Post = ({ postId, setPostId }) => {
  const {  data, isFetching, isLoading } = usePost(postId);

  if (isLoading) {
    return (
      <PostContainer>
        <PostSkeleton />
      </PostContainer>
    );
  }

  return (
    <PostContainer>
      <div>{isFetching && (<>
        <CircularProgress />
        <span>Background Updating...</span>
      </>)}</div>
      <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div>
      <h1>{data.title}</h1>
      <div>
        <p>{data.body}</p>
      </div>
    </PostContainer>
  );
}
export default Post;


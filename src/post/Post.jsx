import React from "react";
import usePost from "./hooks/usePost";
import PostSkeleton from "./Post.skeleton";
import { CircularProgress, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
        <IconButton onClick={() => setPostId(-1)}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <h1>{data.title}</h1>
      <div>
        <p>{data.body}</p>
      </div>
    </PostContainer>
  );
}
export default Post;


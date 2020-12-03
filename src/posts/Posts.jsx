import React from "react";
import usePosts from "./hooks/usePosts";
import PostCard from "./PostCard";
import { PostsContainer } from "./Posts.styles";
import PostCardSkeleton from "./PostCard.Skeleton";
import { CircularProgress } from "@material-ui/core";

const Posts = ({ setPostId }) => {
  const { data, isFetching, isLoading } = usePosts();

  if (isLoading) {
    return (
      <PostsContainer>
        {Array.from(Array(12).keys()).map(() => <PostCardSkeleton />)}
      </PostsContainer>
    );
  }

  return (
    <main>
      <h1>Posts</h1>
      <div>
        <div>
          {isFetching && (<>
            <CircularProgress />
            <span>Background Updating...</span>
          </>)}
        </div>

        <PostsContainer>
          {data.map((post) => <PostCard key={post.id} post={post} onClick={setPostId} />)}
        </PostsContainer>
      </div>
    </main>
  );
};

export default Posts;

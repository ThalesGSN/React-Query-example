import React from 'react';
import { Skeleton } from '@material-ui/lab';

const PostSkeleton = () => (
  <>
    <Skeleton animation="wave" height={50} width="20%"/>
    <Skeleton animation="wave"/>
    <Skeleton animation="wave"/>
    <Skeleton animation="wave" width="40%"/>
  </>
);

export default PostSkeleton;

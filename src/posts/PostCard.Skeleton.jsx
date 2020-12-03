import { Avatar, Card, CardActions, CardContent, CardHeader } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

const PostCardSkeleton = () => (
    <Card>
      <CardHeader
        avatar={
          <Skeleton variant="circle" animation="wave"><Avatar /></Skeleton>
        }
        title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation="wave" height={10} width="30%" />}
      />
      <Skeleton variant="rect" animation="wave" height={210} />
      <CardContent>
        <Skeleton animation="wave" />
      </CardContent>
      <CardActions disableSpacing>
        <Skeleton variant="circle" animation="wave" width={40} height={40} />
      </CardActions>
    </Card>
  )

export default PostCardSkeleton;

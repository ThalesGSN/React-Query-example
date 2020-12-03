import { Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import * as faker from "faker";
import { useQueryCache } from "react-query";
import { PostCardContainer } from "./PostCard.styles";

const PostCard = ({post, onClick}) => {
  const {title, id} = post;

  const cardPhoto = useMemo(() => `${faker.image.image()}?q=${id}`, [id]);
  const cardDate = useMemo(() => faker.date.recent().toDateString(), []);
  const cardName = useMemo(() => faker.name.findName(), []);

  const cache = useQueryCache();
  const isPostAlreadyVisualized = cache.getQueryData(["post", post.id]);


  return (
    <PostCardContainer>
        <CardHeader
          avatar={
            <Avatar alt="Fulaninho da Silva" src={`https://i.pravatar.cc/150?q=${id}`} />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={cardName}
          subheader={cardDate}

        />
        <CardMedia
          style={{
            height: 150
          }}
          image={cardPhoto}
          title="Paella dish"
          onClick={() => onClick(id)}
        />
        <CardContent onClick={() => onClick(id)}>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
        <CardActions onClick={() => onClick(id)}>
          {isPostAlreadyVisualized ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </CardActions>
    </PostCardContainer>
  );
}

export default PostCard;

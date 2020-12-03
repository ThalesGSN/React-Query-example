import styled from "styled-components";
import { Card } from "@material-ui/core";

export const PostCardContainer = styled(Card)`
  transition: box-shadow 0.25s ease-in-out;
  width: 100%;
  
  &:hover {
    border: 1px solid rgba(100, 100, 100, 0.5);
    box-shadow: 8px 8px 4px rgba(100, 100, 100, 0.1);
  }
`;

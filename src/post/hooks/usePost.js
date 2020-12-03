import axios from "axios";
import { useQuery } from "react-query";

const getPostById = async (key, id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export default function usePost(postId) {
  return useQuery(["post", postId], getPostById, {
    enabled: postId
  });
}

import React from "react";
import Post from "./post/Post";
import Posts from "./posts/Posts";

export default function App() {
  const [postId, setPostId] = React.useState(-1);

  function router(postId) {
    if (postId > -1) {
      return <Post postId={postId} setPostId={setPostId} />;
    }

    return <Posts setPostId={setPostId} />;
  }

  return (
    <>
      <p>
        Dica: vá entrando em cada post e perceba a diferença de velocidade entre os post
        cacheados e os que estão em primeiro loading, perceba tambem que apesar de cacheado
        e o react query dá refetch.

        <strong>
          (Exite no utils uma função de delay que você pode usar dentro das funções
          de fetch para esse tempo ficar mais perceptivel)
        </strong>
      </p>
      {router(postId)}
    </>
  );
}

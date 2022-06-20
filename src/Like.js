import { useState } from "react";

export function Like() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)} className="btn-like">👍{like}</button>
      <button onClick={() => setDisLike(dislike + 1)} className="btn-dislike">👎{dislike}</button>
      
    </div>
  );
}

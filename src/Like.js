import { IconButton } from "@mui/material";
import { useState } from "react";
import Badge from '@mui/material/Badge';


export function Like() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="like-container">

      <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="like">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton color="primary" onClick={() => setDisLike(dislike + 1)} aria-label="dislike">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

    </div>
  );
}

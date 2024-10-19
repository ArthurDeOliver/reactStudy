import styles from "./Comment.module.css";
import like from "../assets/like.svg";
import trash from "../assets/trash.svg";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, deleteComment }) {
  function handleDeleteComment() {
    deleteComment(content);
  }

  const [likedCount, setLikedCount] = useState(0);

  function handleLikeComment() {
    console.log(event.target);
    setLikedCount((value) => {
      return (value = 1);
    });
  }

  return (
    <>
      <article>
        <Avatar
          hasBorder={false}
          src="https://avatars.githubusercontent.com/u/109746247?s=400&u=de10a90eb16a2ea4a264f5207cd5430b4f853e40&v=4"
        ></Avatar>

        <div className={styles.wrapper}>
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <div className={styles.profileInfo}>
                <p>
                  Arthur <span>(Você)</span>
                </p>
                <span>Cerca de 2h</span>
              </div>
              <div className={styles.trashIcon}>
                <button onClick={handleDeleteComment}>
                  <img src={trash} alt="" />
                </button>
              </div>
            </div>
            <div className={styles.commentTxt}>
              <p>{content}</p>
            </div>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <img src={like} />
              <span>Aplaudir</span>
              <span>{likedCount}</span>
            </button>
          </footer>
        </div>
      </article>
    </>
  );
}

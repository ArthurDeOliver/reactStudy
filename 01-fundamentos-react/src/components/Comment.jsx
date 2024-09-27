import styles from "./Comment.module.css";
import like from "../assets/like.svg";
import trash from "../assets/trash.svg";
import { Avatar } from "./Avatar";

export function Comment({ content, deleteComment }) {
  function handleDeleteComment() {
    deleteComment(content);
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
            <button>
              <img src={like} />
            </button>
            <span>Aplaudir</span>
            <span className={styles.dot}></span>
            <span>03</span>
          </footer>
        </div>
      </article>
    </>
  );
}

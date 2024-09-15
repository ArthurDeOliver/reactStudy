import styles from "./Comment.module.css";
import like from "../assets/like.svg";
import trash from "../assets/trash.svg";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <>
      <article>
        <Avatar
          hasBorder={false}
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <button>
                  <img src={trash} alt="" />
                </button>
              </div>
            </div>
            <div className={styles.commentTxt}>
              <p>muito bom!</p>
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

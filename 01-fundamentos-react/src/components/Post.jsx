import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Post({ author, content }) {
  const [comments, setComments] = useState([]);

  function handleCreateNewComment() {
    event.preventDefault();

    const newComment = event.target.comment.value;

    setComments([...comments, newComment]);

    event.target.comment.value = "";

    console.log(newComment);
  }

  return (
    <>
      <main className={styles.postMain}>
        <div className={styles.contentWrapper}>
          <header>
            <div className={styles.profileWrapper}>
              <Avatar hasBorder={true} src={author.avatarUrl}></Avatar>

              <div className={styles.profileInfo}>
                <p>{author.name}</p>
                <span>{author.role}</span>
              </div>
            </div>

            <span>Publicado há 1 hora</span>
          </header>
        </div>

        <div className={styles.postContent}>
          <p>{content}</p>
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.postComment}>
          <span>Deixe seu feedback</span>
          <textarea
            name="comment"
            placeholder="Digite um comentário"
          ></textarea>
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </main>
    </>
  );
}

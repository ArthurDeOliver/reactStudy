import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <main className={styles.postMain}>
        <div className={styles.contentWrapper}>
          <header>
            <div className={styles.profileWrapper}>
              <div className={styles.postPicture}>
                <img
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className={styles.profileInfo}>
                <p>Jane Cooper</p>
                <span>Dev Front-End</span>
              </div>
            </div>

            <span>Publicado há 1 hora</span>
          </header>
        </div>

        <div className={styles.postContent}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            tempore repudiandae accusantium impedit laboriosam iure culpa
            similique quasi laudantium dolorem, ullam saepe rem iusto quo qui,
            nemo minus inventore velit aperiam vero reiciendis. Dicta corporis
            commodi laborum natus, nesciunt deserunt adipisci, nam pariatur
            deleniti aperiam quibusdam quaerat repellendus quisquam cumque in
            qui quo accusamus velit reprehenderit sed minus ab facilis
            doloribus. Fugiat, eveniet? Minima eaque molestias suscipit, nam
            fugiat dolor. Voluptate est magnam similique non quidem, illum
            consequuntur quae atque maxime aspernatur ratione, fugiat dolor
            nulla autem vitae placeat tempora voluptates et, accusantium nobis
            tenetur ab quo! Quis, earum maxime.
          </p>
        </div>

        <form className={styles.postComment}>
          <span>Deixe seu feedback</span>
          <textarea placeholder="Digite um comentário"></textarea>
          <footer>
            <button>Publicar</button>
          </footer>
        </form>

        <Comment />
        <Comment />
      </main>
    </>
  );
}

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            maiores ducimus? Reprehenderit natus quam consectetur fugiat
            explicabo, veritatis quisquam rerum nam beatae nemo expedita.
            Numquam doloremque, architecto alias deserunt explicabo nesciunt
            quaerat esse doloribus eligendi deleniti earum, consequatur illo
            dolorum, laudantium eaque adipisci libero voluptatem officia non
            ipsam animi. Nesciunt omnis non eius molestias labore soluta eum
            obcaecati in praesentium placeat debitis repudiandae, asperiores
            aperiam facere sequi blanditiis, earum nam voluptate necessitatibus!
            Pariatur modi porro suscipit, deleniti alias debitis quae mollitia
            id molestiae. Commodi repellat ipsum veniam veritatis at! Cum,
            reiciendis architecto in minima labore dolores est debitis ratione
            laborum.
          </p>
        </div>

        <form className={styles.postComment}>
          <span>Deixe seu feedback</span>
          <textarea placeholder="Digite um comentário"></textarea>
          <footer>
            <button>Publicar</button>
          </footer>
        </form>
      </main>
    </>
  );
}

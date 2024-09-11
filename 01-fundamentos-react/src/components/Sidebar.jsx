import styles from "./Sidebar.module.css";
import pencil from "../assets/pencil.svg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={styles.img}
      />

      <div className={styles.profile}>
        <strong>Arthur de Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <img src={pencil} alt="" />
          <span>Editar perfil</span>
        </a>
      </footer>
    </aside>
  );
}

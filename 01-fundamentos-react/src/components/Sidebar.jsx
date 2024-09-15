import styles from "./Sidebar.module.css";
import pencil from "../assets/pencil.svg";
import picture from "../assets/foto1.png";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.headerImg}>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={styles.img}
        />
      </div>

      <div className={styles.profile}>
        <Avatar
          hasBorder={true}
          src="https://avatars.githubusercontent.com/u/109746247?s=400&u=de10a90eb16a2ea4a264f5207cd5430b4f853e40&v=4"
        />
        <div className={styles.profileDescription}>
          <strong>Arthur de Oliveira</strong>
          <span>Web Developer</span>
        </div>
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

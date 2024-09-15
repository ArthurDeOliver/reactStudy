import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <>
      <div className={hasBorder ? styles.avatarWithBorder : styles.profileImg}>
        <img src={src} className={styles.avatarImg} />
      </div>
    </>
  );
}

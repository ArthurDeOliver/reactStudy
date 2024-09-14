import { useState } from "react";
import styles from "../app.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post postDescription="teste" />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;

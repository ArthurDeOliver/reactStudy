import { useState } from "react";
import { Post } from "./post";
import styles from "../app.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post author="Arthur" description="arthur é um cara legal" />
          <Post author="Angelo" description="Angelo é amigo de arthur" />
        </main>
      </div>
    </>
  );
}

export default App;

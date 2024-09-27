import { useState } from "react";
import styles from "../app.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Barone",
      role: "Backend developer",
    },
    content: `Estou muito feliz em compartilhar que concluí mais uma etapa do meu estudo de React! 🎉 Esse framework incrível da JavaScript tem sido uma verdadeira revolução na forma como eu construo interfaces de usuário. Durante o processo, mergulhei profundamente em conceitos como componentes, estado e props, e finalmente entendi a importância da renderização eficiente e como o React facilita o gerenciamento de grandes aplicações de forma modular. Também explorei o React Hooks, que tornaram meu código mais limpo e fácil de manter. Ver a aplicação ganhar vida à medida que adicionava novas funcionalidades e interatividade me deu uma sensação de satisfação indescritível. Estou mais motivado do que nunca para continuar aprendendo e explorar o ecossistema do React ainda mais. 🚀 Agora, sinto que estou no caminho certo para me tornar um desenvolvedor front-end mais completo e preparado para os desafios futuros. Vamos com tudo! 💻✨ #React #JavaScript #DevJourney #Frontend`,
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Katarina",
      role: "Fullstack developer",
    },
    content: `Hoje concluo mais um capítulo dos meus estudos em React, e não poderia estar mais satisfeito com o progresso que fiz! 🚀 Ao longo dessa jornada, aprendi a criar componentes reutilizáveis, a manipular estados de maneira eficiente, e como a arquitetura do React facilita o desenvolvimento de interfaces dinâmicas e responsivas. O conceito de Hooks, como useState e useEffect, fez toda a diferença para entender como gerenciar estados e ciclos de vida de componentes de uma maneira mais moderna e prática. Além disso, explorar o React Router me abriu novas possibilidades para criar aplicações com múltiplas páginas sem perder a fluidez.`,
  },
];

console.log(posts);

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post author={post.author} content={post.content} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;

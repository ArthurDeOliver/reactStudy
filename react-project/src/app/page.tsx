import { Title } from "./components/Title";
import { Quadrado } from "./components/Quadrado";
import { Título } from "./components/Título";
import { Botão } from "./components/Botão";
import { ListaItens } from "./components/ListaItens";
import { Imagem } from "./components/Imagem";
import { Paragrafo } from "./components/Paragrafo";
import { Header } from "./components/Header";
import { Rodape } from "./components/Rodape";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="flex items-center gap-10 flex-col p-16">
        <Título />
        <Quadrado></Quadrado>
        <Botão />
        <ListaItens />
        <Imagem
          imagemUrl="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="cachorro"
        />
        <Paragrafo paragrafContent="ausdhiuashdiusahidu"></Paragrafo>
      </div>
      <Rodape></Rodape>
    </>
  );
}

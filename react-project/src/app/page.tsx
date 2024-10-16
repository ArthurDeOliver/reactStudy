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
        <Título text="Olá bem-vindo!" name="Arthur" />
        <Quadrado></Quadrado>
        <Botão />
        <ListaItens />
        <Imagem
          imagemUrl="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/11/29/1147115027-labrador-retriever.jpg"
          description="cachorro"
        />
        <Paragrafo paragrafContent="ausdhiuashdiusahidu"></Paragrafo>
      </div>
      <Rodape></Rodape>
    </>
  );
}

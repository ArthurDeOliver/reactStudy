"use client";

import { ButtonAddress } from "./components/ButtonAddress";

export default function Home() {
  return (
    <>
      <h1 className="bg-blue-800 text-black py-3 text-center text-white">
        Buscar endereço
      </h1>
      <ButtonAddress />

      {/* adicionando evento para o botão */}

      {/* <Header></Header>
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
      <Rodape></Rodape> */}
    </>
  );
}

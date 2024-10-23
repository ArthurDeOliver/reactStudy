"use client";

import { useState } from "react";
import { ButtonAddress } from "./components/ButtonAddress";

export default function Home() {
  const [handleAddress, setHandleAddress] = useState("");
  return (
    <>
      <h1 className="bg-green-700 py-3 text-center text-white w-full">
        🗺️ Buscar endereço
      </h1>
      <div className="h-fit w-1/3 mt-28 bg-slate-300 p-4 rounded-lg shadow-md text-black flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="cep" className="mb-2">
            Digite seu CEP:
          </label>
          <input
            value={setHandleAddress}
            name="cep"
            type="text"
            placeholder="digite seu CEP"
            className=" rounded-md p-2 outline-none focus:outline-green-500 w-56"
          />
        </div>
        <ButtonAddress />
      </div>

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

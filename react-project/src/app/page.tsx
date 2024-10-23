"use client";

import { useState } from "react";
import { ButtonAddress } from "./components/ButtonAddress";

export default function Home() {
  const [handleAddress, setHandleAddress] = useState("");

  function handleAddresForm() {
    event?.preventDefault();

    setHandleAddress(handleAddress);
  }

  function handleAddressInputValue() {
    console.log(event?.target?.value);
    setHandleAddress(event?.target?.value);

    // console.log(event.target.value);
  }

  return (
    <>
      <header className="bg-green-700 py-3 text-center text-white w-full font-semibold text-2xl">
        🗺️ Buscar endereço
      </header>
      <form
        onSubmit={handleAddresForm}
        className="h-fit w-1/3 mt-28 bg-slate-300 p-4 rounded-lg shadow-2xl text-black flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="cep" className="mb-2">
            Digite seu CEP
          </label>
          <input
            onChange={handleAddressInputValue}
            value={handleAddress}
            name="cep"
            type="text"
            placeholder="digite seu CEP"
            className=" rounded-md p-2 outline-none focus:outline-green-500 w-56"
          />
        </div>
        <ButtonAddress handleInfoInput={handleAddress} />
      </form>

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

"use client";
import { useState } from "react";
import { getAddress } from "../../../get-address";
import { AddressInfo } from "./AddressInfo";

interface buttonProps {
  handleInfoInput: string;
}

export function ButtonAddress({ handleInfoInput }: buttonProps) {
  const [address, setAddress] = useState([""]);
  const [loading, setLoading] = useState(false);

  //dependemos de um serviço externo, o retorno da função é uma requisição através do fetchAPI
  async function handleGetAddress() {
    // setAddress(" ");
    setLoading(true);

    try {
      const result = await getAddress(handleInfoInput); //a função tem que ser async e a chamada da função um await(espera)
      const resultInfo = "CEP: 📍 " + result.logradouro;

      setAddress([resultInfo, ...address]);

      console.log(address);
    } catch (error) {
      // throw new Error("CEP não consta, coloque outro");
      alert("erro! cep não incluso no nosso banco");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-4">
        <button
          type="submit"
          onClick={handleGetAddress}
          className={`${
            loading && "opacity-30"
          } px-5 py-3 bg-green-700 text-white rounded-md hover:bg-green-900 transition-all max-w-1/5`}
        >
          {loading ? "Carregando..." : "Obter Endereço"}
        </button>
        {address.map((element) => {
          if (element != "") {
            return <AddressInfo address={element} key={crypto.randomUUID()} />;
          }
        })}
      </div>
    </>
  );
}

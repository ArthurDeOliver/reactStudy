"use client";
import { useState } from "react";
import { getAddress } from "../../../get-address";

export function ButtonAddress() {
  const [address, setAddress] = useState("");

  //dependemos de um serviço externo, o retorno da função é uma requisição através do fetchAPI
  async function handleGetAddress() {
    try {
      const result = await getAddress("53080195"); //a função tem que ser async e a chamada da função um await(espera)
      console.log(result);
      setAddress(result);
    } catch (error) {
      // throw new Error("CEP não consta, coloque outro");
      alert("erro! cep não incluso no nosso banco");
    }
  }

  return (
    <>
      <button
        onClick={handleGetAddress}
        className="px-5 py-3 bg-green-700 text-white rounded-md hover:bg-green-900 transition-all"
      >
        Obter edereço
      </button>
      <p className="">{address}</p>
    </>
  );
}

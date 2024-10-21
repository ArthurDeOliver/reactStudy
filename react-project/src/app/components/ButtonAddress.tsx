"use client";
import { getAddress } from "../../../get-address";

//dependemos de um serviço externo, o retorno da função é uma requisição através do fetchAPI
async function handleGetAddress() {
  try {
    const result = await getAddress("53080195"); //a função tem que ser async e a chamada da função um await(espera)

    console.log(result);
  } catch (error) {
    // throw new Error("CEP não consta, coloque outro");
    alert("erro! cep não incluso no nosso banco");
  }
}

export function ButtonAddress() {
  let address = "teste";
  return (
    <>
      <button
        onClick={handleGetAddress}
        className="px-5 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-900 transition-all mt-10 ml-10"
      >
        Obter edereço
      </button>
      <p className="ml-10 mt-10">{address}</p>
    </>
  );
}

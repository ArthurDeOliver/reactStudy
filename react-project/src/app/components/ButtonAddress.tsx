"use client";
//* criar um array de objetos com os resultados possuindo o logradouro e a data
//! usar date-fns para formatar a data da forma que desejamos
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
      <div className="flex h-full flex-col justify-between gap-4 font-montserrat">
        <button
          type="submit"
          onClick={handleGetAddress}
          className={`${
            loading && "opacity-30"
          } max-w-1/5 rounded-md bg-green-700 px-5 py-3 text-white transition-all hover:bg-green-900`}
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

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
        className="sm:max-h-96 overflow-hidden overflow-y-scroll w-1/3 mt-28 bg-slate-100 p-5 rounded-lg shadow-2xl text-black flex flex-col gap-4 xl:max-h-72"
      >
        <div className="sm:flex flex-col items-center gap-4 xl:flex-row">
          <label className="text-nowrap" htmlFor="cep">
            Digite seu CEP
          </label>
          <input
            onChange={handleAddressInputValue}
            value={handleAddress}
            name="cep"
            type="text"
            placeholder="digite seu CEP"
            className="rounded-md p-2 outline-none focus:outline-green-500 w-full"
            required
          />
        </div>

        <ButtonAddress handleInfoInput={handleAddress} />
      </form>
    </>
  );
}

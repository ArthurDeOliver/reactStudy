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
      <header className="w-full bg-green-700 py-3 text-center font-montserrat text-2xl font-semibold text-white">
        🗺️ Buscar endereço
      </header>
      <form
        onSubmit={handleAddresForm}
        className="mt-28 flex w-1/3 flex-col gap-4 overflow-hidden overflow-y-scroll rounded-lg bg-slate-100 p-5 text-black shadow-2xl sm:max-h-96 xl:max-h-72"
      >
        <div className="flex-col items-center gap-4 font-montserrat sm:flex xl:flex-row">
          <label className="text-nowrap" htmlFor="cep">
            Digite seu CEP
          </label>
          <input
            onChange={handleAddressInputValue}
            value={handleAddress}
            name="cep"
            type="text"
            placeholder="digite seu CEP"
            className="w-full rounded-md p-2 outline-none focus:outline-green-500"
            required
          />
        </div>

        <ButtonAddress handleInfoInput={handleAddress} />
      </form>
    </>
  );
}

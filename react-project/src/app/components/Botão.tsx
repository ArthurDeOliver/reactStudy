"use client";

export function Botão() {
  function mostrarNaTela() {
    console.log("componente clicado!");
  }
  return (
    <>
      <button
        onClick={mostrarNaTela}
        className="rounded-full bg-green-600 p-4 w-44 text-black font-semibold hover:bg-green-400"
      >
        Cliquei aqui
      </button>
    </>
  );
}

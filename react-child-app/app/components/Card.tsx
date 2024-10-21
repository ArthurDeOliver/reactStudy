import type { ReactNode } from "react";

interface cardProps {
  children: ReactNode; //ReactNode é um tipo de dado genérico, que pode assumir tanto papel de um elemento html ou valores brutos como string, boolean, number...
}

export function Card({ children }: cardProps) {
  return (
    <>
      <main className="group bg-cyan-600 p-4 max-w-64  rounded-lg shadow-lg hover:bg-green-700 transition-all cursor-pointer">
        <div className="flex flex-col items-center gap-5">{children}</div>
      </main>
    </>
  );
}

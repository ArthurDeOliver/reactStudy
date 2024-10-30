import { useState, useEffect } from "react";

interface AddressInfoProps {
  address: string;
}

export function AddressInfo({ address }: AddressInfoProps) {
  const [creationTime, setCreationTime] = useState("");

  useEffect(() => {
    // Define o horário de criação ao montar o componente
    const now = new Date();
    const formattedTime = now.toLocaleString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCreationTime(formattedTime);
  }, []);

  return (
    <div className="p-4 bg-green-600 font-jet text-white rounded-lg flex items-center justify-between gap-2">
      <p>{address}</p>
      <time
        className="rounded-full bg-gray-200 px-3 py-1  text-gray-900  text-center"
        dateTime={new Date().toISOString()}
      >
        {creationTime}
      </time>
    </div>
  );
}

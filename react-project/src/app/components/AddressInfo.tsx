import { useState, useEffect } from "react";

interface AddressInfoProps {
  address: string;
}

export function AddressInfo({ address }: AddressInfoProps) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-green-600 p-4 font-montserrat text-white">
      <p>{address}</p>
      <time
        className="rounded-full bg-gray-200 px-3 py-1 text-center text-gray-900"
        dateTime={new Date().toISOString()}
      >
        <p>tempo</p>
      </time>
    </div>
  );
}

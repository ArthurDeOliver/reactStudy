"use client";

interface imagemProps {
  imagemUrl: string;
  description: string;
}

export function Imagem({ imagemUrl, description }: imagemProps) {
  return (
    <>
      <div className="w-1/2 h-1/2 object-cover rounded-xl ">
        <img src={imagemUrl} alt={description} />
      </div>
    </>
  );
}

interface paragraf {
  paragrafContent: string;
}

export function Paragrafo({ paragrafContent }: paragraf) {
  return <p>{paragrafContent}</p>;
}

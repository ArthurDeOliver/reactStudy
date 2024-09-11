//props retorna um objeto com a chave e valor das propriedades do componente

export function Post(props) {
  console.log(props);
  return (
    <>
      <h2>{props.author}</h2>
      <p>{props.description}</p>
    </>
  );
}

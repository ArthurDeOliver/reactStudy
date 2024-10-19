//pode-se colocar essa função em um botão para executar o getAddress

async function getAddress(cep: string) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  //resposta da requisição da chamada da api

  try {
    const response = await fetch(URL); //código só executa o resto quando consegui aplicar o fetch(URL)

    const data = await response.json(); //pegando as informações da resposta
    console.log(data);
  } catch (error) {
    throw new Error("CEP não consta, coloque outro");
  }
}

console.log("restante do código");
getAddress("4324");

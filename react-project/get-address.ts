//pode-se colocar essa função em um botão para executar o getAddress

export async function getAddress(cep: string) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  //resposta da requisição da chamada da api

  const response = await fetch(URL); //código só executa o resto quando consegui aplicar o fetch(URL)
  const data = await response.json(); //pegando as informações da resposta, deverá ser await

  return data;
}

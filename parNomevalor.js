/* 
  par nome/valor
  'Local onde sua variavel foi definida fisicamente'
  lexico == palavra
  Objetos sao grupos aninhados de pares nome/valor
*/

const saudacao = "Opa"; // contexto lexico 1;

function exec() {
  const saudacao = "Fala"; // contexto lexico 2;
  return saudacao;
}

const cliente = {
  nome: "Pedro",
  idade: "32",
  peso: "90",
  endereco: {
    logradouro: "Rua mt legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);

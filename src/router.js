import inicializaEdicao from "./componentes/edita/form-edicao";
import inicializaTabela from "./componentes/lista/listagem-cliente";
const { default: inicializaCadastro } = require("./componentes/cadastro/componente-cadastro");

const rotas = {
  "/": inicializaTabela,
  "/cadastro": inicializaCadastro,
  "/edita": inicializaEdicao
};

const rootDiv = document.querySelector('[data-container]')

const navegacao = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = "";
  const iniciarRota = rotas[window.location.pathname];
  rootDiv.appendChild(iniciarRota());
}

window.navegacao = navegacao;

window.onpopstate = () => {
  rootDiv.innerHTML = "";
  rootDiv.appendChild(rotas[window.location.pathname]());
}

export { navegacao };
// Ano e última modificação no footer
const anoSpan = document.querySelector("#ano-atual");
const ultimaSpan = document.querySelector("#ultima-modificacao");

anoSpan.textContent = new Date().getFullYear();
ultimaSpan.textContent = document.lastModified;

// Menu Hambúrguer
const menuBotao = document.querySelector("#menu-botao");
const navegacao = document.querySelector("#navegacao");

menuBotao.addEventListener("click", () => {
  navegacao.classList.toggle("open");
  menuBotao.textContent = navegacao.classList.contains("open") ? "X" : "☰";
});
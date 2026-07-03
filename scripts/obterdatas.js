// Ano atual no rodapé
const anoSpan = document.getElementById("anoatual");
anoSpan.textContent = new Date().getFullYear();

// Data da última modificação
const ultimaMod = document.getElementById("ultimaModificacao");
ultimaMod.textContent = `Last Modification: ${document.lastModified}`;
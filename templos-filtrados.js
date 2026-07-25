const d = new Date();
document.getElementById("ano-atual").textContent = d.getFullYear();
document.getElementById("lastModified").textContent = `Última Modificação: ${document.lastModified}`;

const hambutton = document.querySelector('.hambutton');
const navmenu = document.querySelector('#navmenu');
const h1 = document.querySelector('h1');

hambutton.addEventListener('click', () => {
    h1.classList.toggle('show');
    navmenu.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function toggleActive(element) {
    document.querySelectorAll('#navmenu a').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    
    const title = document.querySelector('.page-title');
    title.textContent = element.textContent;
}

const temples = [
  { templeName: "Belém Brasil", location: "Belém, Pará, Brasil", dedicated: "2022-11-20", area: 28657, imageUrl: "imagens/belem_brazil.jpg" },
  { templeName: "Manaus Brasil", location: "Manaus, Amazonas, Brasil", dedicated: "2012-06-10", area: 32246, imageUrl: "imagens/manaus_brazil.jpg" },
  { templeName: "São Paulo Brazil", location: "São Paulo, São Paulo, Brazil", dedicated: "1978-10-30", area: 59246, imageUrl: "imagens/sao_paulo_brazil.jpg" },
  { templeName: "Caracas Venezuela", location: "Caracas, Venezuela", dedicated: "2000-08-20", area: 15332, imageUrl: "imagens/caracas_venezuela.jpg" },
  { templeName: "Seoul Korea", location: "Seoul, Korea", dedicated: "1985-12-14", area: 28170, imageUrl: "imagens/seoul_korea.jpg" },
  { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 53997, imageUrl: "imagens/tokyo_japan.jpg" },
  { templeName: "Laie Hawaii", location: "Laie, Hawaii, Estados Unidos", dedicated: "1919-11-27", area: 42312, imageUrl: "imagens/laie_hawaii.jpg" },
  { templeName: "Salt Lake Utah", location: "Salt Lake City, Utah, Estados Unidos", dedicated: "1893-04-06", area: 253015, imageUrl: "imagens/salt_lake_utah.jpg" },
  { templeName: "San Diego California", location: "San Diego, California, Estados Unidos", dedicated: "1993-04-25", area: 72000, imageUrl: "imagens/san_diego_california.jpg" }
];

createTempleCard(temples);

function createTempleCard(templosParaMostrar) {
  const grid = document.querySelector('.res-grid');
  grid.innerHTML = '';
  templosParaMostrar.forEach(temple => {
    const card = document.createElement("section");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Localização:</span> ${temple.location}</p>
      <p><span class="label">Dedicado:</span> ${temple.dedicated}</p>
      <p><span class="label">Tamanho:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    grid.appendChild(card);
  });
}

document.querySelector("#all").addEventListener("click", () => createTempleCard(temples));
document.querySelector("#old").addEventListener("click", () => createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)));
document.querySelector("#new").addEventListener("click", () => createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)));
document.querySelector("#large").addEventListener("click", () => createTempleCard(temples.filter(temple => temple.area > 90000)));
document.querySelector("#small").addEventListener("click", () => createTempleCard(temples.filter(temple => temple.area < 10000)));

// Pega todos os links do nav
const navLinks = document.querySelectorAll('#navmenu a');

// Função pra tirar a classe active de todos
function removeActive() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// Adiciona o evento de clique em cada link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        removeActive();
        this.classList.add('active'); // Adiciona active só no clicado
    });
});
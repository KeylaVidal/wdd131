// Array de Produtos
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Popular o select de produtos
const productSelect = document.getElementById("productName");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // value = id
        option.textContent = product.name; // texto = nome
        productSelect.appendChild(option);
    });
}

// Contador de avaliações com localStorage na página de confirmação
const reviewCountSpan = document.getElementById("reviewCount");
if (reviewCountSpan) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    reviewCountSpan.textContent = count;
}

// Última modificação no footer
const lastModified = document.getElementById("lastModified");
if(lastModified){
    lastModified.textContent = `Última Modificação: ${document.lastModified}`;
}
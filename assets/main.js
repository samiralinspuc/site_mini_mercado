// Carregar header e footer automaticamente em todas as páginas
function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Erro ao carregar " + file);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}

function aumentarFonte() {
  document.body.style.fontSize = "larger";
}

function diminuirFonte() {
  document.body.style.fontSize = "smaller";
}

function toggleContraste() {
  document.body.classList.toggle("alto-contraste");
}

// Inserir header e footer
loadHTML("header", "includes/header.html");
loadHTML("footer", "includes/footer.html");

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const resultadoSection = document.getElementById('resultado');
  const resultadoTitulo = document.getElementById('resultado-titulo');
  const resultadoInput = document.getElementById('msg');
  const modoBtn = document.getElementById('modo-btn');
  const btnCopiar = document.getElementById('btn-copiar');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('input-texto').value;
    const btnSeleccionado = document.activeElement;

    if (btnSeleccionado.id === 'btn-cripto') {
      const textoEncriptado = encriptarTexto(texto);
      resultadoInput.value = textoEncriptado;
      resultadoSection.style.display = 'block';
      resultadoTitulo.textContent = 'Mensaje cifrado:';
    } else if (btnSeleccionado.id === 'btn-descripto') {
      const textoDesencriptado = desencriptarTexto(texto);
      resultadoInput.value = textoDesencriptado;
      resultadoSection.style.display = 'block';
      resultadoTitulo.textContent = 'Mensaje descifrado:';
    }
  });

  function encriptarTexto(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
  }

  function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
  }

  modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
  });

  btnCopiar.addEventListener('click', () => {
    copiarTexto();
  });

  function copiarTexto() {
    resultadoInput.select();
    document.execCommand('copy');
    btnCopiar.textContent = 'Copiado';
    setTimeout(() => {
      btnCopiar.textContent = 'Copiar';
    }, 3000);
  }
});

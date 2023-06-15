window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const resultadoInput = document.getElementById('msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('input-texto').value;
    const textoEncriptado = encriptarTexto(texto);
    resultadoInput.value = textoEncriptado;
  });

  function encriptarTexto(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
  }
});

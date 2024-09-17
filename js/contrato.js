// Cria um objeto SignaturePad a partir do canvas
const canvas = document.getElementById('signature-pad');
const signaturePad = new SignaturePad(canvas);
const ctx = canvas.getContext('2d');
// Captura a assinatura em formato de imagem ao clicar no botão "Salvar Assinatura"
const btnSalvar = document.getElementById('btnSalvar');
btnSalvar.addEventListener('click', function () {
  const dataURL = signaturePad.toDataURL();
  const imgAssinatura = document.getElementById('assinatura');
  imgAssinatura.src = dataURL;
});

const btnLimpar = document.getElementById('limparAssinatura');
btnLimpar.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

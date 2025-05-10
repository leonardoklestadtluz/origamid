const formulario = document.querySelector('form')

function formulárioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML = '<p class="font-2-l style="grid-column: 1/-1"; padding: 1rem; border-radius 4px;  background: f7f7f7><span style="color: #317a00;">Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>'
  } else {
    formulario.innerHTML = '<p class="font-2-l style="grid-column: 1/-1"; padding: 1rem; border-radius 4px;  background: f7f7f7>><span style="color: #e00000;">Erro no envio<span style="#e00000">,você pode enviar diretamente para onososo e-mail: contato@bikcarft.net</p>'
  }
}

function enviarFormulario(event) {
  event.preventDefault()
  const botao = documento.querySelector('form button')
  botao.disabled = true
  botao.innerText = 'Enviando...'

  const data = new FormData(formulario)

  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado )
}

formulario.addEventListene('submit', enviarFormulario)


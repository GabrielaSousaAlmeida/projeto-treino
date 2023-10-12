const bancoDeDados = { usuario: 'g', senha: '1' };

const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');
const entrar = document.querySelector('#entrar');
const limpar = document.querySelector('#limpar');
const botaoOk = document.querySelector('#botao-ok');
const dialog = document.querySelector('dialog');
const dialogH1 = document.querySelector('dialog>h1');
const dialogP = document.querySelector('dialog>p');

entrar.addEventListener('click', () => {
  const valorUsuario = usuario.value;
  const valorSenha = senha.value;

  if (valorUsuario == bancoDeDados.usuario && valorSenha == bancoDeDados.senha) {
    //acesso autorizado
    editarModal('#90ee90', 'Acesso autorizado', `Bem vindo(a) ${valorUsuario}`);
    setTimeout(() => {
     mudarPagina('paginas/home.html');
    }, 3000);
    
  } else {
    //acesso negado
    editarModal('#ffdab9', 'Acesso negado', 'Tente novamente');
  }

  dialog.showModal();

  limparInputs();
})

limpar.addEventListener('click', () => {
  limparInputs();
})

botaoOk.addEventListener('click', () => {
  dialog.close();
  if (dialogH1.textContent == 'Acesso autorizado') {
    mudarPagina('paginas/home.html');
  }
 
})

function limparInputs() {
  usuario.value = '';
  senha.value = '';
}

function editarModal(cor, titulo, texto) {
  dialog.style.backgroundColor = cor;
  dialogH1.textContent = titulo;
  dialogP.textContent = texto;
}

function mudarPagina(pagina) {
  window.location.href = pagina;
  
}
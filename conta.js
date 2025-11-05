const btnConfig = document.getElementById('config');
const menu = document.getElementById('menu-config');
const fechar = document.getElementById('fechar');
const contaBtn = document.getElementById('conta-btn');
const abaConta = document.getElementById('aba-conta');

btnConfig.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

fechar.addEventListener('click', () => {
  menu.classList.remove('ativo');
  abaConta.classList.remove('ativo');
});

contaBtn.addEventListener('click', () => {
  abaConta.classList.toggle('ativo');
});

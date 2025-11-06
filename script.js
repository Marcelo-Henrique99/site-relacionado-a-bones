document.getElementById("produto").addEventListener("click", () =>{

    window.location.href = "produtos.html";
}

);


document.getElementById("botao1").addEventListener("click", () =>{

    window.location.href = "bone1.html";
}

);

document.getElementById("botao2").addEventListener("click", () =>{

    window.location.href = "bone2.html";
}

);

document.getElementById("botao3").addEventListener("click", () =>{

    window.location.href = "bone3.html";
}

);

const bones = document.querySelectorAll('.bone');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let current = 0;


function atualizaCarrossel() {
  bones.forEach((p) => {
    p.classList.remove('active', 'left', 'right');
  });

  const total = bones.length;
  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  bones[current].classList.add('active');
  bones[prevIndex].classList.add('left');
  bones[nextIndex].classList.add('right');
}


next.addEventListener('click', () => {
  current = (current + 1) % bones.length;
  atualizaCarrossel();
});


prev.addEventListener('click', () => {
  current = (current - 1 + bones.length) % bones.length;
  atualizaCarrossel();
});


atualizaCarrossel();


setInterval(() => {
  current = (current + 1) % bones.length;
  atualizaCarrossel();
}, 5000);




const btnConfig = document.getElementById('config');
const menu = document.getElementById('my-config');
const fechar = document.getElementById('fechar');
const modoEscuro = document.getElementById('modo-escuro');



btnConfig.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

fechar.addEventListener('click', () => {
  menu.classList.remove('ativo');
});

modoEscuro.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', modoEscuro.checked);
});










const voltar = document.getElementById('conta');
const historico = document.getElementById('historico');
const mensage = document.getElementById('mesage');
const compras = document.getElementById('compras')

voltar.addEventListener('click', () =>{
  
window.location.href = "conta.html";

}
);

historico.addEventListener('click', () =>{
  
window.location.href = "historico.html";

}
);

mensage.addEventListener('click', () =>{
  
window.location.href = "mensagem.html";

}
);

compras.addEventListener('click', () =>{
  
window.location.href = "compras.html";

}
);




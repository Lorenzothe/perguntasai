function criaCart (Categoria, Pergunta, Resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `   
<div class="cont-Cartao" onclick="mostrarResp(this)">
    <h3>${Categoria}</h3>
    <div class="pergunta-cartao">
        <p>${Pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${Resposta}</p>
    </div>
</div>
    `
    container.appendChild(cartao);
}
function mostrarResp(card) {
    const Resposta = card.querySelector('.resposta-cartao');
    if(Resposta.style.display === 'none'){
        Resposta.style.display = 'block'

    }
    else{
        Resposta.style.display = 'none'
    }
}
function sortear()
{
    let quantidadeDeNumerosSorteados = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    for(let i = 0; i < quantidadeDeNumerosSorteados; i++)
    {    
        let numero = numeroAleatorio(numeroInicial, numeroFinal);
           
        while(sorteados.includes(numero))
        {
            let numero = numeroAleatorio(numeroInicial, numeroFinal);
        }
        sorteados.push(numero);
        console.log(sorteados);    
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}  </label>`;
    alterarBotaoReset()
}
function alterarBotaoReset()
{
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado'))
    {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    }
    else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}
function numeroAleatorio(min , max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar()
{
    

}
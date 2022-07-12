const BOTAO_ANALISAR = document.getElementById('bt-analisar');
const BOTAO_LIMPAR = document.getElementById('bt-limpar');
const VALOR_GASOLINA = document.getElementById('inpt-gasolina');
const VALOR_ETANOL = document.getElementById('inpt-etanol');
const RESULTADO_TELA = document.getElementById('div-resultado');

function AnalisarOqueAbastecer() 
{
    let valorGasolina = VALOR_GASOLINA.value;
    let valorEtanol = VALOR_ETANOL.value;

    if(valorGasolina === '' || valorEtanol === '')
    {
        RESULTADO_TELA.textContent = "Favor preencher todos os campos!";
    }
    else if (valorGasolina === '0'|| valorEtanol === '0')
    {
        RESULTADO_TELA.textContent = "Verifique os valores informados!";
    }
    else
    {
        let resultado = parseFloat(valorEtanol) / parseFloat(valorGasolina);

        if(resultado < 0.7)
        {
            RESULTADO_TELA.innerHTML = "Abastecer:<br>ETANOL";
        }
        else
        {
            RESULTADO_TELA.innerHTML =  "Abastecer:<br>GASOLINA";
        }
    }
}

function LimparCampos() 
{
    VALOR_GASOLINA.value = "";
    VALOR_ETANOL.value = "";
    RESULTADO_TELA.textContent = "Resultado";
}

BOTAO_ANALISAR.addEventListener("click",AnalisarOqueAbastecer);
BOTAO_LIMPAR.addEventListener("click",LimparCampos);
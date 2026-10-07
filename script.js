function verificarIdade(){
    //captura o valor digitado no campo input
    const elementoInput=document.getElementById("campoIdade");
    const idadeDigitada= parseInt(elementoInput.value);
    //localiza o elemento onde o texto de resultado sera exibido
    const elementoResultado=document.getElementById("mensagemResultado");
    //validação preventiva: impede processamento se o campo estiver em branco 
    if ( isNaN(idadeDigitada)){ //not a number
        elementoResultado.innerText= 'por favor, digite uma idade numérica válida.';
        elementoResultado.style.color="#dc2626";
        return;
    }
    //tomada de decisão:bifurcação do fluxo entre maior e menor de idade
    if(idadeDigitada>=18){
     elementoResultado.innerText=`voce tem ${idadeDigitada} anos e ja é maior de idade.`;
     elementoResultado.style.color="#16a34a";
     console.log(`verificação aprovada: ${idadeDigitada}`)
    }
   else {
    elementoResultado.innerText = `Você tem ${idadeDigitada} anos e ainda é menor de idade.`;
    elementoResultado.style.color = "#d97706"
    console.log(`Verificação informativa: ${idadeDigitada} anos (Menor de idade)`);
  }
}
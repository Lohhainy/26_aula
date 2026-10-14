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
 
          if(idadeDigitada<=12)              {
      elementoResultado.innerText=`voce tem ${idadeDigitada} anos e é uma criança.`;
        elementoResultado.style.color="#cf2900ff";
  }
    if(idadeDigitada>=12 && idadeDigitada<=17){
       elementoResultado.innerText=`voce tem ${idadeDigitada} anos e é um adolescente.`;
        elementoResultado.style.color="#f08b06ff";
 
    }
    if(idadeDigitada>=18 && idadeDigitada<=59){
     elementoResultado.innerText=`voce tem ${idadeDigitada} anos e é um adulto`;
     elementoResultado.style.color="#16a34a";
     console.log(`verificação aprovada: ${idadeDigitada}`)
    }
     if(idadeDigitada>=60){
       elementoResultado.innerText=`voce tem ${idadeDigitada} anos e pertence a terceira idade`;
     elementoResultado.style.color="#16a34a";
      console.log(`verificação aprovada: ${idadeDigitada}`)
    }
} 
 
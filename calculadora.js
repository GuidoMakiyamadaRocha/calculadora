/**Nessas duas linhas, estamos utilizando o "document.getElementById" pois, o "document" é utilizado para acessar nosso HTML e o 
 * getElementById vai ser responsávle por trazer oq tiver dentro nos parenteses para o nosso js, que no caso é o 'display1' e o 'display2'*/
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');

console.log(display1, display2);

// criamos o displayAtivo. Definimos ele igual o display1 por conta que, sempre iremos começar colocando o primeiro número no display1(pelo menos é o que faria sentido) ai ele começa automaticamente ai.
//  Mas, dps fazemos uma função para poder alternar entre o display1 e o display2
let displayAtivo = display1;

//aqui estamos chamando a função selecionardisplay que criei no meu html e criando uma função para poder alternar entre o d1 e o d2. 
function selecionardisplay(numero){
    if (numero === 1){
        displayAtivo = display1;
    }
    else{
        displayAtivo = display2;
    }
}

/** escolha do display **/

// serve para colocar o número no display escolhido
function NumberDisplay(numero) {
    displayAtivo.value += numero;
}

// limpa o display selecionado
function ClearDisplay() {
    displayAtivo.value = '';
}


/** teclado **/

// nesse codigo vamos começar a fazer a logica para usar o teclado na nossa calculadora. 
document.addEventListener('keydown', function(event) {
   // aqui vamos fazer o nosso navegador pegar a informação da tecla que clicamos e "adicionar o seu valor" na calculadora.
    const tecla = event.key;

    // isso faz com que o navegador não permita a entrada de letras na nossa calculadora, utilizando o !isNaN(verifica se não é um numero)
    if (!isNaN(tecla)) {
        displayAtivo.value += tecla;
    }

    // aqui é a entrada dos nosso operadores. 
    if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        displayAtivo.value += tecla;
    }

    // Utilização de virgula e ponto para números decimais.
    if (tecla === ',' || tecla === '.') {
        displayAtivo.value += ',';
    }

    // backspace
    if (tecla === 'Backspace') {
        displayAtivo.value = displayAtivo.value.slice(0, -1);
    }

});


//aqui temos as funções principais da calculadora, efetuar o calculo kkkk 
function SetOperator(operador) {

   //aqui estamos fznd uma "correção", aqui no Brasil, os numeros decimais utilizamos virgula, mas o computador usa "." ent arrumamos isso utilizando o replace.
   //  E utilizamos o parseFloat para transformar o nosso texto em número. Pq por mais que digitamos um numero, o "valor" dele vai estar em texto, ent corrigimos isso com o parseFloat.
    const valor1 = parseFloat(display1.value.replace(',', '.'));
    const valor2 = parseFloat(display2.value.replace(',', '.'));

  // variavel que vai guardar o resultado do d1 e d2.
    let resultado;
  // aqui foi desenvolvido a "função" de cada operador. 
    if (operador === '+') {
        resultado = valor1 + valor2;
    }

    if (operador === '-') {
        resultado = valor1 - valor2;
    }

    if (operador === '*') {
        resultado = valor1 * valor2;
    }

    if (operador === '/') {
        resultado = valor1 / valor2;
    }
   // aqui é os "toques finais". Onde vai aparecer o resultado da conta.
    display1.value = resultado;
    //ela limpa o número que estava no display2, pois já foi efetuado o calculo e não tem mais necessidade de mante-lo ali.
    display2.value = '';
    // essa linha em especial é importante pois permite o calculo em sequencia,
    //  pois depois de efetuar a primeira conta, ela já vai deixar selecionado o display 1, permitindo que eu efetue calculos em sequencia com o resultado que nos foi dado.
    displayAtivo = display1;
}
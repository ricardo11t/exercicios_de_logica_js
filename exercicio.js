// 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
// três e que se encontram no conjunto dos números de 1 até 500.
 let soma = 0;
 for(i = 1; i <= 500; i++){
     if(i % 3 == 0 && i % 2 != 0){
         soma += i;
     }
 }

 console.log(soma);

// 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let alturas = [1.60, 1.72, 1.88, 1.57, 1.64, 1.90, 1.92, 1.49, 1.55, 2.11, 2.02, 1.77, 1.61, 1.52, 1.97];
let maior_altura = 0
let menor_altura = 3.00
for(let i = 0; i < alturas.length; i++){
    if(alturas[i] < menor_altura){
        menor_altura = alturas[i]
    }
    else if(alturas[i] > maior_altura){
        maior_altura = alturas[i]
    }
}
console.log(`A maior altura é ${maior_altura}m.`);
console.log(`A menor altura é ${menor_altura}m.`);

// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// negativos e o percentual de valores negativos e positivos.

function n_indeterminados(){
    let n = parseInt(prompt("Digite um número."));
    let sum = 0;
    let i = 0;
    let numerosNegativos = 0;
    let numerosPositivos = 0;

    while (!isNaN(n)) {
        sum += n;
        if(n < 0){
            numerosNegativos++;
        } else if(n > 0){
            numerosPositivos++;
        }
        i++;
        n = parseInt(prompt("Digite um número. (ao enviar uma letra, o loop para.)"));
    }

    if (numerosNegativos > 0 || numerosPositivos > 0){
        const media = sum / i;
        const total = numerosNegativos + numerosPositivos;
        const percentualNegativo = (numerosNegativos * 100) / total;
        const percentualPositivo = (numerosPositivos * 100) / total;

        console.log(`A média dos números informados é igual a: ${media}`);
        console.log(`O percentual dos números positivos informados é de: ${percentualPositivo}%`);
        console.log(`O percentual dos números negativos informados é de: ${percentualNegativo}%`);
    }
}

// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.
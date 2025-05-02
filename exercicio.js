// // 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
// // três e que se encontram no conjunto dos números de 1 até 500.
//  let soma = 0;
//  for(i = 1; i <= 500; i++){
//      if(i % 3 == 0 && i % 2 != 0){
//          soma += i;
//      }
//  }

//  console.log(soma);

// // 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// // mostrar :
// // a. A menor altura do grupo;
// // b. A maior altura do grupo;

// let alturas = [1.60, 1.72, 1.88, 1.57, 1.64, 1.90, 1.92, 1.49, 1.55, 2.11, 2.02, 1.77, 1.61, 1.52, 1.97];
// let maior_altura = 0
// let menor_altura = 3.00
// for(let i = 0; i < alturas.length; i++){
//     if(alturas[i] < menor_altura){
//         menor_altura = alturas[i]
//     }
//     else if(alturas[i] > maior_altura){
//         maior_altura = alturas[i]
//     }
// }
// console.log(`A maior altura é ${maior_altura}m.`);
// console.log(`A menor altura é ${menor_altura}m.`);

// // 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// // média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// // negativos e o percentual de valores negativos e positivos.

// function n_indeterminados(){
//     let n = parseInt(prompt("Digite um número."));
//     let sum = 0;
//     let i = 0;
//     let numerosNegativos = 0;
//     let numerosPositivos = 0;

//     while (!isNaN(n)) {
//         sum += n;
//         if(n < 0){
//             numerosNegativos++;
//         } else if(n > 0){
//             numerosPositivos++;
//         }
//         i++;
//         n = parseInt(prompt("Digite um número. (ao enviar uma letra, o loop para.)"));
//     }

//     if (numerosNegativos > 0 || numerosPositivos > 0){
//         const media = sum / i;
//         const total = numerosNegativos + numerosPositivos;
//         const percentualNegativo = (numerosNegativos * 100) / total;
//         const percentualPositivo = (numerosPositivos * 100) / total;

//         console.log(`A média dos números informados é igual a: ${media}`);
//         console.log(`O percentual dos números positivos informados é de: ${percentualPositivo}%`);
//         console.log(`O percentual dos números negativos informados é de: ${percentualNegativo}%`);
//     }
// }

// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.

function lerNumerosDeNaY() {
    let n = parseInt(prompt(`Digite um número. (não negativo.)`))

    let de0A25 = 0;
    let de26A50 = 0;
    let de51A75 = 0;
    let de76A100 = 0;
    
    do {
        if(n > 0 && n <= 25) {
            de0A25++;
        } else if(n >= 26 && n <= 50) {
            de26A50++;
        } else if(n >= 51 && n <= 75) {
            de51A75++;
        } else if (n >= 76 && n <= 100) {
            de76A100++;
        }
        n = parseInt(prompt(`Digite um número. (envie um numero negativo para parar o loop)`));
    } while (n >= 0)

    console.log(`Dos números informados ${de0A25} estão de 0-25, ${de26A50} estão de 26-50, ${de51A75} estão de 51-75 e ${de76A100} estão de 76-100`);
}

// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos 
// números lidos. O número que encerrará a leitura será zero.

function qtdDeNumerosParesEImpares() {
    let n = parseInt(prompt(`Digite um número. (não negativo.)`));
    let sumNumerosPares = 0;
    let sumNumerosImpares = 0;
    let qtdNumerosPares = 0;
    let qtdNumerosImpares = 0;

    while (n >= 0) {
        if (n % 2 == 0){
            sumNumerosPares += n;
            qtdNumerosPares++;
        } else if (n % 2 != 0){
            sumNumerosImpares += n;
            qtdNumerosImpares++;
        }

        n = parseInt(prompt(`Digite um número. (envie um numero negativo para parar o loop)`))
    };

    let mediaNumerosPares = qtdNumerosPares > 0 ? (sumNumerosPares / qtdNumerosPares).toFixed(2) : "Média inválida, pois números pares não foram digitados.";
    let mediaNumerosImpares = qtdNumerosImpares > 0 ? (sumNumerosImpares / qtdNumerosImpares).toFixed(2) : "Média inválida, pois números ímpares não foram digitados.";
    let totalQtd = qtdNumerosPares + qtdNumerosImpares;
    let mediaGeral = totalQtd > 0 ? ((sumNumerosPares + sumNumerosImpares) / totalQtd).toFixed(2) : "Não há média geral, nenhum número válido foi digitado.";
    

    console.log(`Quantidade de pares: ${qtdNumerosPares}`);
    console.log(`Quantidade de ímpares: ${qtdNumerosImpares}`);
    console.log(`Média dos pares: ${mediaNumerosPares}`);
    console.log(`Média dos ímpares: ${mediaNumerosImpares}`);
    console.log(`Média geral: ${mediaGeral}`);
}

// 6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

function numerosImparesDe100A200() {
    for(let i = 0; i < 200; i++) {
        if (i > 100){
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }
}

// 7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de 
// N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.


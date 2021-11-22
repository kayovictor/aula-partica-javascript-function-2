//Atividade prática 01
//01
var valores = (n1, n2) =>{
    return `${n1} x ${n2} = ${n1 * n2}`;
}

console.log(valores(5, 5));
//02
var tresValor = (n1, n2, n3) =>{
    if(n1 > n2 && n1 > n3){
        return n1 + " é maior";
    }
    else if(n2 > n1 && n2 > n3){
        return n2 + ' é maior'
    }
    else if(n3 > n1 && n3 > n2){
        return n3 + ' é maior'
    }
}

console.log(tresValor(1, 5 , 3));
    
 //03
 var valor = (n) =>{
    if(n % 2 == 0){
        return n + ' é par'
    }
    else{
        return n + ' é ímpar'
    }
 }  
 
 console.log(valor(5));
    
//atividade 02
//01
var mediaDoAluno = function(n1, n2){
    var media = (n1 + n2)/2
    if(media >= 7){
        return 'A média é ' + media + ' Voçê está aprovado(a)'
    }
    else if(media >= 5 && media < 7){
        return 'A média é ' + media + ' Voçê está na recuperação';
    }
    else if(media < 5){
        return 'A média é ' + media + ' Você estar reprovado'
    }
}

console.log(mediaDoAluno(5,1));

//02
var tabuada = function(){
    var n = 3;
    for(let i = 0; i <= 10; i++){
        console.log(`${n} x ${i} = ${3*i}`)
    }
}

console.log(tabuada());

//03
var maiorIdade = (ano) =>{
    let anoAtual = new Date().getFullYear();
   var idade = anoAtual - ano;
   if(idade >= 18){
       return 'Você é de maior';
   }
   else{
       return 'Você é de menor';
   }
}

console.log(maiorIdade(2000));
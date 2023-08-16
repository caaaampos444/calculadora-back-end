/****************************************************
* Objetivo: Criar uma calculadora
* Data: 16/08/23
* Autor: Gustavo Campos
* Versão: 1.0
*****************************************************/
var readline=require("readline")
var entradaDados=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
console.log('1 - Soma')
console.log('2 - Subtração')
console.log('3 - Multiplicação')
console.log('4 - Divisão')
entradaDados.question('Digite qual operação será feita: ',function(respostaUsuario){
    let resposta=respostaUsuario
    if(resposta==''){
        console.log('ERRO: Selecione uma operação')
        entradaDados.close()
    }else if(resposta<1||resposta>4){
        console.log('ERRO: Selecione uma operação válida')
        entradaDados.close()
    }else if(isNaN(resposta)){
        console.log('ERRO: Selecione a operação utilizando os números')
        entradaDados.close()
    }
    if(resposta==1){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1
            if(v1==''){
                console.log('ERRO: Você não pode deixar este valor em branco.')
                entradaDados.close()
            }
            entradaDados.question('Digite o segundo valor: ',function(valor2){
            let v2=valor2
            let resultado=Number(v1)+Number(v2)
            console.log('O resultado da conta é: '+resultado)
            entradaDados.close()
            })
        })
    }
    if(resposta==2){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2
                let resultado=Number(v1)-Number(v2)
                console.log('O resultado da conta é: '+resultado)
                entradaDados.close()
            })
        })
    }
    if(resposta==3){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2
                let resultado=Number(v1)*Number(v2)
                console.log('O resultado da conta é: '+resultado)
                entradaDados.close()
            })
        })
    }
    if(resposta==4){
        entradaDados.question('Digite o primeiro valor: ',function(valor1){
            let v1=valor1
            entradaDados.question('Digite o segundo valor: ',function(valor2){
                let v2=valor2
                if(v1==0||v2==0){
                    console.log('ERRO: Não é possível dividir por 0.')
                }else{
                    if(resposta==2){
                        entradaDados.question('Digite o primeiro valor: ',function(valor1){
                            let v1=valor1
                            entradaDados.question('Digite o segundo valor: ',function(valor2){
                                let v2=valor2
                                let resultado=Number(v1)/Number(v2)
                                console.log('O resultado da conta é: '+resultado)
                                entradaDados.close()
                            })
                        })
                    }
                }
            })
        })
    }
})
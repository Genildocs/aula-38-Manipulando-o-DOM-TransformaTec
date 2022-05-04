

function limpar(){
    document.getElementById("n1").value = "";

    document.getElementById("n2").value = "";

    document.getElementById("result").innerHTML = "Resultado: "
}


function sum(){
    var n1 = document.getElementById("n1").value

    var n2 = document.getElementById("n2").value

    n1 = Number(n1) // CONVERTENDO A STRING EM NÚMERO.
    n2 = Number(n2)

    var result = n1 + n2;

    document.getElementById("result").innerHTML = `O Resultado é: ${result}`
}

function subtrair(){
    var n1 = document.getElementById("n1").value

    var n2 = document.getElementById("n2").value

    n1 = Number(n1) // CONVERTENDO A STRING EM NÚMERO.
    n2 = Number(n2)

    var result = n1 - n2;

    document.getElementById("result").innerHTML = `O Resultado é: ${result}`
}
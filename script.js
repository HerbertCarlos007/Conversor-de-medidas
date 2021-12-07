

const input = document.querySelector('#batata')
const result = document.getElementById('result')


let valueToConvert
let resultValue

input.addEventListener("keyup", myResult)

function myResult(){
    
    const inputType = document.getElementById('inputType').value
    const resultType = document.getElementById('resultType').value


    if(inputType === "kilometer" && resultType === "meter"){
        result.value = input.value * 1000 + ' m'

    }
    if(inputType === "meter" && resultType === "kilometer"){
        result.value = input.value / 1000 + ' Km'
    }

    if(inputType === "centimeter" && resultType === "kilometer"){
        result.value = input.value / 100000 + ' Km'
    }

    if(inputType === "centimeter" && resultType === "meter"){
        result.value = input.value / 100 + ' m'
    }

    if(inputType === "meter" && resultType === "centimeter"){
        result.value = input.value * 100  + ' cm'
    }

    if(inputType === "kilometer" && resultType === "centimeter"){
        result.value = input.value * 100000  + ' cm'
    }

    if(inputType === resultType){
        alert("Não é possivel realizar a conversão com duas unidades de medidas iguais!")
    }
}



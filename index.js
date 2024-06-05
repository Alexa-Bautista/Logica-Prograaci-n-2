const gradosC = document.getElementById("gradosC")
const botonConvertir = document.getElementById("botonConvertir")
const error = document.getElementById("error")
error.textContent = ""
const f = document.getElementById("fahrenheit") 
const k = document.getElementById("kelvin")

botonConvertir.addEventListener("click", ()=>{
    
    const celcius = gradosC.value
    if(isNaN(celcius)){
        error.textContent= "Por favor ingrese un valor númerico"
    }else{
        error.textContent = ""
    }
    
    const gradosCelcius = parseFloat(celcius) 

    const fahrenheit= (1.8 * celcius) + 32
    const kelvin = gradosCelcius + 273.15  

f.textContent = fahrenheit + " " + "grados fahrenheit"
k.textContent = `${kelvin} grados kelvin`         
})

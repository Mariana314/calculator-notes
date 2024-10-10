// const username = document.getElementById('username')
// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great() {
//     //Capturar valor de la variable - .value
//     alert(username.value)
// }

// great()

const username = document.getElementById('nombre');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');

const buttonCalcular = document.querySelector('#calcularButton');
const buttonPredecir = document.querySelector('#buttonPrede');

const result = document.getElementById('resultado');

buttonCalcular.addEventListener('click', calculateNote);
buttonPredecir.addEventListener('click', predecirNote);

function calculateNote(event) {

    event.preventDefault()

    let not1 = parseFloat(nota1.value); //cambiar el tipode dato string -> float
    let not2 = parseFloat(nota2.value);
    let not3 = parseFloat(nota3.value);
  //Tipo de dato - console.log(typeof not1);
    
    let resultado = ((not1*0.3)+(not2*0.3)+(not3*0.4)).toFixed(2);

    // result.style.color = 'green';
    // result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado}`;
 
    if (resultado <= 3.5) {
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado} usted ha perdido la materia`;
    }else if (resultado > 3.5 && resultado <= 4.5){
        result.style.color = 'orange';
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado} usted ha ganado la materia`;
     
    }else if (resultado > 4.5) {
        result.style.color = 'green';
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado} su nota es sobresaliente `;
     
    }

    }
    function predecirNote(event) {
      event.preventDefault();
  
      let not1 = parseFloat(nota1.value);
      let not2 = parseFloat(nota2.value);
  
      let notaMinima = ((3.5 - (not1 * 0.3) - (not2 * 0.3)) / 0.4).toFixed(2);
  
      nota3.value = notaMinima;
  
       result.textContent = `Para obtener una nota definitiva de 3.5, necesita sacar al menos ${notaMinima} en la Nota 3.`;
  }

let nombre = prompt("Por favor, Identifiquese con un Nombre").toUpperCase();

// Array de objetos que contiene la totalidad de ejericios a realizar
const ejerciciosTotales = [{parte:"Pectoral", ejercicio:"Press Plano"},
                          {parte:"Pectoral", ejercicio:"Press Inclinado"},
                          {parte:"Pectoral", ejercicio:"Press Declinado"},
                          {parte:"Pectoral", ejercicio:"Press Plano con Mancuernas"},
                          {parte:"Pectoral", ejercicio:"Press Inclinado con Mancuernas"},
                          {parte:"Pectoral", ejercicio:"Press Declinado con Mancuernas"},
                          {parte:"Pectoral", ejercicio:"Apertura Plana"},
                          {parte:"Pectoral", ejercicio:"Apertura Inclinada"},
                          {parte:"Pectoral", ejercicio:"Apertura Declinada"},
                          {parte:"Pectoral", ejercicio:"Peck Deck"},
                          {parte:"Pectoral", ejercicio:"Cruces con Polea Baja"},
                          {parte:"Pectoral", ejercicio:"Cruces con Polea Alta"},
                          {parte:"Pectoral", ejercicio:"Fondos en Paralelas"},
                          {parte:"Pectoral", ejercicio:"Flexiones de brazo"},
                          {parte:"Pectoral", ejercicio:"Mancuerna al pectoral"},
                          {parte:"Espalda", ejercicio:"Remo bajo con polea"},
                          {parte:"Espalda", ejercicio:"Remo con Barra"},
                          {parte:"Espalda", ejercicio:"Remo 1 Brazo"},
                          {parte:"Espalda", ejercicio:"Remo T"},
                          {parte:"Espalda", ejercicio:"Remo Caballo"},
                          {parte:"Espalda", ejercicio:"Dominadas"},
                          {parte:"Espalda", ejercicio:"Tirones con polea"},
                          {parte:"Espalda", ejercicio:"Tirones con Hummer"},
                          {parte:"Espalda", ejercicio:"Pull Over con mancuerna"},
                          {parte:"Espalda", ejercicio:"Pull Over con polea "},
                          {parte:"Espalda", ejercicio:"Remo bajo con polea"},
                          {parte:"Hombros", ejercicio:"Press Militar con Barra"},
                          {parte:"Hombros", ejercicio:"Press Militar con Mancuerna"},
                          {parte:"Hombros", ejercicio:"Press Militar en MultiPower"},
                          {parte:"Hombros", ejercicio:"Press Arnold"},
                          {parte:"Hombros", ejercicio:"Vuelos Laterales"},
                          {parte:"Hombros", ejercicio:"Vuelos Frontales"},
                          {parte:"Hombros", ejercicio:"Vuelos Frontales con Barra"},
                          {parte:"Hombros", ejercicio:"Vuelos Frontales con Polea"},
                          {parte:"Hombros", ejercicio:"Vuelos Posteriores"},
                          {parte:"Hombros", ejercicio:"Posteriores con Soga"},
                          {parte:"Biceps", ejercicio:"Curl con Barra"},
                          {parte:"Biceps", ejercicio:"Curl con Mancuerna"},
                          {parte:"Biceps", ejercicio:"Curl 45 grados"},
                          {parte:"Biceps", ejercicio:"Curl Scott"},
                          {parte:"Biceps", ejercicio:"Curl Polea"},                    
                          {parte:"Biceps", ejercicio:"Curl Concentrado"},                    
                          {parte:"Biceps", ejercicio:"Curl Alternado"},                    
                          {parte:"Biceps", ejercicio:"Martillo"},
                          {parte:"Biceps", ejercicio:"Braquial con barra"},
                          {parte:"Triceps", ejercicio:"Empujes"},
                          {parte:"Triceps", ejercicio:"Fondos entre bancos"},
                          {parte:"Triceps", ejercicio:"Frances con barra"},
                          {parte:"Triceps", ejercicio:"Frances 1 Brazo"},
                          {parte:"Triceps", ejercicio:"Frances con Mancuernas"},
                          {parte:"Triceps", ejercicio:"Frances con Soga"},
                          {parte:"Triceps", ejercicio:"Extension con Polea"},
                          {parte:"Piernas", ejercicio:"Sentadillas"},
                          {parte:"Piernas", ejercicio:"Sentadillas Sumo"},
                          {parte:"Piernas", ejercicio:"Sentadillas Sissy"},
                          {parte:"Piernas", ejercicio:"Estocadas"},
                          {parte:"Piernas", ejercicio:"Estocadas para atras"},
                          {parte:"Piernas", ejercicio:"Prensa 45"},
                          {parte:"Piernas", ejercicio:"Sillon de Cuadriceps"},
                          {parte:"Piernas", ejercicio:"Camilla Izquiotibiales"},
                          {parte:"Piernas", ejercicio:"Gemelos de Pie"},
                          {parte:"Piernas", ejercicio:"Gemelos en Maquina"},
                          {parte:"Piernas", ejercicio:"Prensa 45"},
                          {parte:"Piernas", ejercicio:"Hack"},
                          {parte:"Piernas", ejercicio:"Hack Invertido"},
                          {parte:"Piernas", ejercicio:"Peso Muerto"},
                          {parte:"Piernas", ejercicio:"Peso Muerto 1 pie"},
                          {parte:"Piernas", ejercicio:"Puentes"},
                          {parte:"Piernas", ejercicio:"Patada de Gluteos"},
                          {parte:"Piernas", ejercicio:"Soleo Sentado"},
                          {parte:"Abdominales", ejercicio:"Crunch con carga"},
                          {parte:"Abdominales", ejercicio:"Crunch Oblicuo"},
                          {parte:"Abdominales", ejercicio:"Hips"},]

// Array Vacio en el que se va a Pushear para la rutina improvisada
const rutinaImprovisada = []; 

const totalPectoral = ejerciciosTotales.filter((valor) => valor.parte.includes('Pectoral'));
const totalEspalda = ejerciciosTotales.filter((valor) => valor.parte.includes('Espalda'));
const totalHombros = ejerciciosTotales.filter((valor) => valor.parte.includes('Hombros'));
const totalBiceps = ejerciciosTotales.filter((valor) => valor.parte.includes('Biceps'));
const totalTriceps = ejerciciosTotales.filter((valor) => valor.parte.includes('Triceps'));
const totalPiernas = ejerciciosTotales.filter((valor) => valor.parte.includes('Piernas'));
const totalAbs = ejerciciosTotales.filter((valor) => valor.parte.includes('Abdominales'));
// Se utiliza el constructor para usarlo como MOLDE, para ser utilizado cuando interese agregar ejercicios NEW
class Ejercicio {
  constructor(ejercicio){
    this.parte = ejercicio.parte;
    this.ejercicio = ejercicio.ejercicio;
  }
}
  
// Esta funcion me permite mostrar la totalidad de ejercicios que conozco ya sea para armar rutinas o para medir el peso del ejercicio
function mostrarEjercicios(){
  let salida = "";
  let i = 1
  for (let ejercicio of ejerciciosTotales){
    salida += i + " Parte a trabajar: " + ejercicio.parte + " - Ejercicio: " + ejercicio.ejercicio + "\n";
    i++;
  }
  return salida;
}

// Cuando aplique esta funcion usando de base el constructor agregare nuevos ejercicios al array de ejercicios
function agregarEjercicio () {
  consultaNuevoEjercicio = prompt('Desea agregar un nuevo ejercicio a la base de datos? SI/NO').toLowerCase();
  if (consultaNuevoEjercicio === 'si') {
  let nuevoEjercicio = new Ejercicio({parte:prompt("Ingrese la parte muscular a trabajar (Espalda, Pectoral, Piernas, Biceps, Triceps u Hombro"), ejercicio:prompt("Ingrese el Ejercicio")});
  ejerciciosTotales.push(nuevoEjercicio);
  }else{alert(`Hasta luego,${nombre}!`)}
}

function agregarRutinaImprovisada(rutina) {
   rutinaImprovisada.push(rutina);
}




// Esta funciones me pertime recorrer el Array que dejo de estar vacio al cargarle los ejercicios
function mostrarRutinaImprovisada() {
  let salida = "Ejercicios Seleccionados:\n\n";
  for (let ejercicio of rutinaImprovisada) {
      salida += "Parte a trabajar: " + ejercicio.parte + " - Ejercicio: " + ejercicio.ejercicio + "\n";
  }
      alert(salida);
     
  
}

// Funcion que le permite al Usuario seleccionar objetos de un array general y pushearlo a otro array vacio.
function seleccionarEjercicios(){
  consultaSeleccion = prompt('Desea generar una rutina a su gusto con los ejercicios preestablecidos en el programa? SI/NO').toLowerCase();
  if (consultaSeleccion === 'si') {
    let salir = "";
  while (salir != "ESC") {
    let listaEjercicios= mostrarEjercicios();
    let ejercicioSeleccionado = parseInt(prompt("Ingrese el Numero de Ejercicio que desea realizar:\n\n" + listaEjercicios));
    let ejercicio = ejerciciosTotales[(ejercicioSeleccionado - 1)];
    agregarRutinaImprovisada(ejercicio);
    alert("Se agrego el Ejercicio a la Rutina!");
    salir = (prompt("Desea Seleccionar otro Ejercicio? (ESC para salir)")).toUpperCase();
    mostrarRutinaImprovisada()
  }
  } else {alert(`Okei! ${nombre}!`)};
}
 


// Esta funcion me permite realizar un aumento progresivo del peso KG de algun ejercicio
function calculoPeso (){
  consultaCalculo = prompt('Desea calcular el peso de algun ejercicio? SI/NO').toLowerCase();
  if (consultaCalculo === 'si') {
  mostrarEjercicios();
  nombreEjercicio = prompt(`Digame el nombre del ejercicio que quiere calcular de forma mensual \n ${mostrarEjercicios()} `);
  resultadoPeso = parseInt(prompt('coloque el peso (numero entero) que usted utiliza para realizar en: ' + nombreEjercicio));
  semana1 = resultadoPeso;
  semana2 = Math.round(semana1 * 1.10);
  semana3 = Math.round(semana2 * 1.05);
  semana4 = Math.round(semana1 / 1.20);
  alert(`Si usted actualmente esta semana realiza ${nombreEjercicio} con ${resultadoPeso}kg \n procure un aumento progresivo de la carga en las dos siguientes semanas \n y un descanso en la cuarta semana \n en la semana 2: debera hacer ${nombreEjercicio} con ${semana2}kg,\n en la semana 3: debera hacer ${nombreEjercicio} con ${semana3}kg \n en la semana 4: debera hacer ${nombreEjercicio} con ${semana4}kg`);
  document.write(`<br>Si usted actualmente esta semana realiza ${nombreEjercicio} con ${resultadoPeso}kg <br>procure un aumento progresivo de la carga en las dos siguientes semanas y un descanso en la cuarta semana<br> en la semana 2: debera hacer ${nombreEjercicio} con ${semana2}kg,<br> en la semana 3: debera hacer ${nombreEjercicio} con ${semana3}kg <br> en la semana 4: debera hacer ${nombreEjercicio} con ${semana4}kg`);
}
else {alert(`Sigamos!, ${nombre}!`)};

}

// Funcion de Saludo!
function saludar() {
    alert(
      `Bienvenido a mi programa de rutinas ${nombre}, a continuacion debera colocar su peso y altura ejemplo (75 , 1.75)`
    );
  }
  saludar()

  // Funcion de calculo de IMC, con .toFixed aplico metodo de dos decimales
function imcCalculo (peso, altura){
    return (peso / (altura * altura)).toFixed(2)

}

// Variables y Constantes Globales
let peso = parseFloat(prompt(`${nombre}, coloque su peso (ejemplo: 65)`));
let altura = parseFloat(prompt(`${nombre}, coloque su altura (ejemplo: 1.75)`));
const resultadoImc = imcCalculo(peso, altura)
alert(`${nombre}, tu Indice de Masa Corporal es: ${resultadoImc} kg/m2`)
document.write(`${nombre}, tu Indice de Masa Corporal es: ${resultadoImc} kg/m2`)

function conclusion (){
  if (resultadoImc < 18.5){
    document.write(', por lo tanto tenes Bajo Peso. </br> Te recomiendo una dieta rica en carbohidratos y Rutinas orientadas a la Fuerza');
  } else if(resultadoImc >= 18.5 && resultadoImc <= 29.9) {
    document.write(', por lo tanto tenes Peso Normal. </br> Te recomiendo una dieta rica en Proteinas y carbohidratos, Rutinas orientadas a la Fuerza Resistencia');
  } else{
    document.write(', por lo tanto tenes Sobre Peso. </br> Te recomiendo una dieta rica en Proteinas y pocos carbohidratos, Rutinas orientadas al Metabolismo');
  }
}
conclusion()


// Clase Molde
class rutina {
  constructor(tipoRutina, dia, ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5, ejercicio6, series1, series2, series3, repeticiones1, repeticiones2, repeticiones3){
    this.tipoRutina = tipoRutina;
    this.dia = dia;
    this.ejercicio1 = ejercicio1;
    this.ejercicio2 = ejercicio2;
    this.ejercicio3 = ejercicio3;
    this.ejercicio4 = ejercicio4;
    this.ejercicio5 = ejercicio5;
    this.ejercicio6 = ejercicio6;
    this.series1 = series1;
    this.series2 = series2;
    this.series3 = series3;
    this.repeticiones1 = repeticiones1;
    this.repeticiones2 = repeticiones2;
    this.repeticiones3 = repeticiones3;
    this.info = `</br>Tipo de Rutina orientada a la ${tipoRutina}, </br> El dia ${dia} toca realizar: </br> ${ejercicio1} con series: ${series1} y repeticiones: ${repeticiones1};</br> ${ejercicio2} con series: ${series1} y repeticiones: ${repeticiones1};</br> ${ejercicio3} con series: ${series1} y repeticiones: ${repeticiones1};</br> ${ejercicio4} con series: ${series2} y repeticiones: ${repeticiones2}; </br> ${ejercicio5} con series: ${series3} y repeticiones: ${repeticiones3}; </br> ${ejercicio6} con series: ${series3} y repeticiones: ${repeticiones3}`;
    }
    // Aplico un metodo en la clase
   verInfo(){
     document.write(this.info + '<br>')
   } 
}

  let lunesPechoFuerza = new rutina('Pecho (Fuerza)','Lunes','Press Plano','Press Inclinado con Mancuernas', 'Press Declinado', 'Apertura Inclinada',' Apertura Plana', 'Cruces con Polea', 3, 4 , 4, 8, 10, 12)
  let miercolesEspaldaFuerza = new rutina('Espalda (Fuerza)','Miercoles','Remo Bajo','Dominadas', 'Tirones', 'Pull Over',' Remo 1 Brazo', 'Remo T', 3, 4 , 4, 8, 10, 12)
  let viernesPiernasFuerza = new rutina('Piernas (Fuerza)','Viernes','Sentadilla','Estocadas 1 Pierna', 'Peso Muerto', 'Prensa 45',' Sillon Cuadriceps', 'Camilla Izquio', 3, 4 , 4, 8, 10, 12)
  let LunesPechoFuerzaResistencia = new rutina('Pecho (Fuerza Resistencia)','Lunes','Press Plano Inclinado','Press Inclinado con Mancuernas', 'Press Plano', 'Fondos',' Apertura Plana', 'PeckDeck', 4, 4, 4, 10, 12, 12)
  let miercolesEspaldaFuerzaResistencia  = new rutina('Espalda (Fuerza Resistencia)','Miercoles','Remo con Barra','Remo T', 'Dominadas', 'Tirones',' Pull Over Mancuerna', 'Tirones Con Soga', 4, 4, 4, 10, 12, 12)
  let viernesPiernasFuerzaResistencia  = new rutina('Piernas (Fuerza Resistencia)','Viernes','Peso Muerto','Peso Muerto 1 Pierna', 'Sentadilla', 'Sentadilla Sumo',' Sillones Cuadriceps', 'Camilla Izquio', 4, 4, 4, 10, 12, 12)
  let LunesPechoMetabolico  =new rutina('Pecho (Metabolico)','Lunes','Press Plano','Press Declinado con Mancuernas', 'Press Declinado', 'Apertura Declinada',' Peck Deck', 'Cruces con Polea', 4, 4, 4, 10, 12, 15)
  let miercolesEspaldaMetabolico = new rutina('Espalda (Metabolico)','Miercoles','Remo Caballo','Dominadas Maquina', 'Pull Over Maquina', 'Remo Bajo',' Dominadas reales', 'Remo 1 Brazo', 4, 4, 4, 10, 12, 15)
  let viernesPiernasMetabolico  = new rutina('Piernas (Metabolico)','Viernes','Prensa','Subidas al Cubo', 'Sentadilla sumo', 'Sillon Cuadricep',' Camilla Izquio', 'Pantorrillas', 4, 4, 4, 10, 12, 15)
  let sabadoMixAerobico = new rutina('Mix Muscular (Dia Agregado)','Opcional','Abdominales','Pantorrillas', 'Flexiones de Brazo', 'Peso Muerto',' Planchas', 'Planchas laterales', 4, 4, 4, 10, 12, '15seg')

  
  let totalDiasEntrenamiento = 0
  function diasEntrenamiento (){
    totalDiasEntrenamiento = prompt('cuantos dias vas a entrenar? elija 3 o 4');
      }
  diasEntrenamiento()

  // Array Vacio que espera el push del tipo de rutina

  const rutinaSugerida =[]

  function tipoRutina() {
    expresionFuerza = prompt(
      "Coloque el Numero (1, 2 o 3) para obtener una rutina \n 1: Fuerza  \n 2: Fuerza Resistencia \n 3: Metabolico"
    );
      if ((expresionFuerza === "1") && (totalDiasEntrenamiento === "3")) {
      rutinaSugerida.push(` </br> ${lunesPechoFuerza.info} </br> ${miercolesEspaldaFuerza.info} </br> ${viernesPiernasFuerza.info}<br>`);
    } else if ((expresionFuerza === "2") && (totalDiasEntrenamiento === "3")){
      rutinaSugerida.push(` </br> ${LunesPechoFuerzaResistencia.info} </br> ${miercolesEspaldaFuerzaResistencia.info} </br> ${viernesPiernasFuerzaResistencia.info}<br>`);
    } else if ((expresionFuerza === "3") && (totalDiasEntrenamiento === "3")) {
      rutinaSugerida.push(` </br> ${LunesPechoMetabolico.info} </br> ${miercolesEspaldaMetabolico.info} </br> ${viernesPiernasMetabolico.info}<br>`);
    } else if ((expresionFuerza === "1") && (totalDiasEntrenamiento === "4")) {
      rutinaSugerida.push(` </br> ${lunesPechoFuerza.info} </br> ${miercolesEspaldaFuerza.info} </br> ${viernesPiernasFuerza.info} </br> ${sabadoMixAerobico.info}<br> `);
    } else if ((expresionFuerza === "2") && (totalDiasEntrenamiento === "4")){
      rutinaSugerida.push(` </br> ${LunesPechoFuerzaResistencia.info} </br> ${miercolesEspaldaFuerzaResistencia.info} </br> ${viernesPiernasFuerzaResistencia.info} </br> ${sabadoMixAerobico.info} <br>`);
    } else if ((expresionFuerza === "3") && (totalDiasEntrenamiento === "4")) {
      rutinaSugerida.push(` </br> ${LunesPechoMetabolico.info} </br> ${miercolesEspaldaMetabolico.info} </br> ${viernesPiernasMetabolico.info} </br> ${sabadoMixAerobico.info} <br>`);
    }
    else {alert('Vuelva cuando tome alguna decision!')};
  
  }
 
  tipoRutina()

  // Metodo para recorrer el Array
  rutinaSugerida.forEach( rutina => {
      document.write(`</br> ${rutinaSugerida}`);
  }
  );
 
  
  calculoPeso();
  
  seleccionarEjercicios();  
  agregarEjercicio();
  
  // Pruebas del dom
const pruebaDOM = document.querySelector('#pruebaDOM');

let salude= prompt('Bienvenido al DOM, coloque algo que quiera visualizar')

let bienvenida = document.createElement("h2");
bienvenida.innerHTML = `<b>${salude}</b>`;
pruebaDOM.append(bienvenida)

function probamo (){

  consultaFiltro = prompt('Desea filtrar una seleccion de ejercicios? (SI/NO)').toLowerCase();
  if (consultaFiltro === 'si') {
    let consulta = prompt('Escriba la parte que desea filtrar (Ej: Pectoral, Espalda, Biceps, Triceps, Hombros o Piernas').toLowerCase();
    if (consulta === 'pectoral') {
      for (let ejercicio of totalPectoral){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
    } else if (consulta ==="espalda"){
      for (let ejercicio of totalEspalda){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
   } else if (consulta === "biceps"){
     for (let ejercicio of totalBiceps){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
  } else if (consulta ==="triceps"){
    for (let ejercicio of totalTriceps){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
  } else if (consulta === "piernas"){
     for (let ejercicio of totalPiernas){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
    alert(salida) ;
  } else if (consulta === "hombros"){
    for (let ejercicio of totalHombros){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
    pruebaDOM.append(salida);
  } else if (consulta === "abdominales"){
    for (let ejercicio of totalAbs){
      let contenedor = document.createElement("div");
      contenedor.innerHTML = `<p>Parte:<b>${ejercicio.parte}</b></p>
  <p>Ejercicio:<b>${ejercicio.ejercicio}</b></p>`
       
  pruebaDOM.append(contenedor)
  ;
  }
  }}

}

probamo()
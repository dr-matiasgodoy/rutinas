
let nombre = prompt("Por favor, Identifiquese con un Nombre").toUpperCase();

function saludar() {
    alert(
      `Bienvenido a mi programa de rutinas ${nombre}, a continuacion debera colocar su peso y altura ejemplo (75 , 1.75)`
    );
  }
  saludar()

function imcCalculo (peso, altura){
    return peso / (altura * altura)

}
let peso = parseFloat(prompt(`${nombre}, coloque su peso (ejemplo: 65)`));
let altura = parseFloat(prompt(`${nombre}, coloque su altura (ejemplo: 1.75)`));
const resultadoImc = imcCalculo(peso, altura)

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

  


  totalDiasEntrenamiento = 0
  function diasEntrenamiento (){
    totalDiasEntrenamiento = prompt('cuantos dias vas a entrenar? elija 3 o 4');
    if (totalDiasEntrenamiento === 3){
      
    }
  }
  diasEntrenamiento()

  const rutinaSugerida =[]

  function tipoRutina() {
    expresionFuerza = prompt(
      "Coloque el Numero (1, 2 o 3) para obtener una rutina \n 1: Fuerza  \n 2: Fuerza Resistencia \n 3: Metabolico"
    );
      if ((expresionFuerza === "1") && (totalDiasEntrenamiento === "3")) {
      rutinaSugerida.push(` </br> ${lunesPechoFuerza.info} </br> ${miercolesEspaldaFuerza.info} </br> ${viernesPiernasFuerza.info}`);
    } else if ((expresionFuerza === "2") && (totalDiasEntrenamiento === "3")){
      rutinaSugerida.push(` </br> ${LunesPechoFuerzaResistencia.info} </br> ${miercolesEspaldaFuerzaResistencia.info} </br> ${viernesPiernasFuerzaResistencia.info}`);
    } else if ((expresionFuerza === "3") && (totalDiasEntrenamiento === "3")) {
      rutinaSugerida.push(` </br> ${LunesPechoMetabolico.info} </br> ${miercolesEspaldaMetabolico.info} </br> ${viernesPiernasMetabolico.info}`);
    } else if ((expresionFuerza === "1") && (totalDiasEntrenamiento === "4")) {
      rutinaSugerida.push(` </br> ${lunesPechoFuerza.info} </br> ${miercolesEspaldaFuerza.info} </br> ${viernesPiernasFuerza.info} </br> ${sabadoMixAerobico.info} `);
    } else if ((expresionFuerza === "2") && (totalDiasEntrenamiento === "4")){
      rutinaSugerida.push(` </br> ${LunesPechoFuerzaResistencia.info} </br> ${miercolesEspaldaFuerzaResistencia.info} </br> ${viernesPiernasFuerzaResistencia.info} </br> ${sabadoMixAerobico.info}`);
    } else if ((expresionFuerza === "3") && (totalDiasEntrenamiento === "4")) {
      rutinaSugerida.push(` </br> ${LunesPechoMetabolico.info} </br> ${miercolesEspaldaMetabolico.info} </br> ${viernesPiernasMetabolico.info} </br> ${sabadoMixAerobico.info}`);
    }
    else {alert('Vuelva cuando tome alguna decision!')}
  
  }
 
  tipoRutina()

  for (rutina of rutinaSugerida){
    document.write(`</br> ${rutinaSugerida}`)
  }


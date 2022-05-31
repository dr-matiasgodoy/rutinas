cargarEjerciciosSelec()
actualizarBotonLista();



let boton1 = document.getElementById("cartButtons");
  boton1.onclick= () => {
    const resultado2 = document.querySelector('#ejercicios_seleccionados2');
    let ejerciciosR = cargarEjerciciosLista();
    if (ejerciciosR.length == 0){
    Swal.fire({
    icon: "error",
    title: "Error!",
    text:"No has Seleccionado",
    confirmButtonText: "Aceptar"
  })

    } else {  
      resultado2.innerHTML = "";
      ejerciciosR.forEach((ejercicio, indice) => {
      const altura = document.getElementById(`series${ejercicio.id}`).value;
      const peso = document.getElementById(`repeticiones${ejercicio.id}`).value;
       
      let parrafon = document.createElement("div");
      parrafon.classList.add("justify-content-center")
      let html = `<tr>
      <td class='text-start'> Ejercicio: <b>${ejercicio.ejercicio}</b> Musculatura: <b>${ejercicio.parte}</b></td>
      <td class='text-center'> Series: ${altura}</td>
      <td class='text-center'> Repeticiones: ${peso}</td>
      </tr>`;
      parrafon.innerHTML = html;
      resultado2.appendChild(parrafon);
      });

    }
  
  }

document.getElementById("eliminar_lista1").addEventListener('click', eliminarLista);

let boton99 = document.getElementById("limpiar");
boton99.onclick= () => {
  resultado2 = document.querySelector('#ejercicios_seleccionados2');
  if(resultado2.innerHTML=="") {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text:"No hay rutina para borrar",
      confirmButtonText: "Aceptar"
    })
  } else{
    resultado2.innerHTML="";
  }
}


let boton2 = document.getElementById("cartButtons2");
boton2.onclick= () => {
const modos = document.getElementById("modos");
modos.innerHTML = "";
fetch('./modos.json')
.then((response) => response.json())
.then((data) => {
  data.forEach(valor => {
      let div_padre = document.createElement("div");
      div_padre.className = "card";
      let div_hijo1 = document.createElement("div");
      div_hijo1.className = "card-header";
      let div_hijo2 = document.createElement("div");
      div_hijo2.className = "card-body";
      let parrafo = document.createElement("p");
      div_hijo1.innerHTML = `<b>${valor.titulo}</b> (${valor.descripcion})`;
      parrafo.innerText = valor.ejemplo;
      div_hijo2.appendChild(parrafo);
      div_padre.appendChild(div_hijo1);
      div_padre.appendChild(div_hijo2);
      modos.appendChild(div_padre);
  });
})
}
let boton5 = document.getElementById('seleccionar2');
  boton5.onclick =() => {
    let progresivo =document.querySelector('#progresivo')
    let progre = (progresivo.options[progresivo.selectedIndex].value)
    if (progre === 'Leve') {
      let kilos = document.getElementById('kilos').value;
      console.log(kilos)
      const resultado4 = document.querySelector('#resultado4');
      let semanaA = kilos;
      let semanaB = Math.round(semanaA * 1.05);
      let semanaC = Math.round(semanaB * 1.05);
      let semanaD = Math.round(semanaB / 1.20);
      resultado4.innerHTML = `<br>Semana 1:${semanaA}kg<br>Semana 2:${semanaB}kg <br> Semana 3:${semanaC}kg <br> Semana 4 (Descanso): ${semanaD} `
    }else if (progre === 'Moderado') {
      let kilos = document.getElementById('kilos').value;
      console.log(kilos)
      const resultado4 = document.querySelector('#resultado4');
      let semanaA = kilos;
      let semanaB = Math.round(semanaA * 1.10);
      let semanaC = Math.round(semanaB * 1.10);
      let semanaD = Math.round(semanaB / 1.15);
      resultado4.innerHTML = `<br>Semana 1:${semanaA}kg<br>Semana 2:${semanaB}kg <br> Semana 3:${semanaC}kg <br> Semana 4 (Descanso): ${semanaD} `
    } else if (progre === 'Fuerte') {
      let kilos = document.getElementById('kilos').value;
      console.log(kilos)
      const resultado4 = document.querySelector('#resultado4');
      let semanaA = kilos;
      let semanaB = Math.round(semanaA * 1.15);
      let semanaC = Math.round(semanaB * 1.15);
      let semanaD = Math.round(semanaB / 1.15);
      resultado4.innerHTML = `<br>Semana 1:${semanaA}kg<br>Semana 2:${semanaB}kg <br> Semana 3:${semanaC}kg <br> Semana 4 (Descanso): ${semanaD} `
    }


  }

  let borrar4 = document.getElementById("borrar4");
  borrar4.onclick =() => {
    const resultado4 = document.querySelector('#resultado4');
      resultado4.innerHTML = "";
      Swal.fire({
        icon: 'success',
        title: 'Se ha eliminado satisfactoriamente',
        showConfirmButton: false,
        });
  }

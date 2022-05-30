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
  resultado2.innerHTML="";
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


function buscarEjercicio(id){
    let ejercicios = cargarEjerciciosLS();
    return ejercicios.find(x => x.id == id);
  }

function cargarEjerciciosLista(){
    if (localStorage.getItem("lista")) {
      return JSON.parse(localStorage.getItem("lista"));
    }
    return[];
  }

  function agregarLista(id){
    let ejercicio = buscarEjercicio(id);
    let ejercicios_lista = cargarEjerciciosLista();
    ejercicios_lista.push(ejercicio);
    localStorage.setItem("lista", JSON.stringify(ejercicios_lista));
    actualizarBotonLista();
  }

  function eliminarLista (){
    localStorage.removeItem('lista');
    actualizarBotonLista();
    cargarEjerciciosSelec();
  }


  function actualizarBotonLista() {
    let ejercicios_lista = cargarEjerciciosLista();
    let contenido = `<button type="button" class="btn btn-warning position-relative"><img src="images/basket.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${ejercicios_lista.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}



function eliminarEjercicio(id) {
  let ejercicios_lista = cargarEjerciciosLista();
  let ejercicios_lista_actualizado = ejercicios_lista.filter(x => x.id != id);
  localStorage.setItem("lista", JSON.stringify(ejercicios_lista_actualizado));
  

  actualizarBotonLista();
  cargarEjerciciosSelec()
  
  
}

const contenedor2 = document.getElementById("ejercicios_seleccionados");


function cargarEjerciciosSelec(){
  contenedor2.innerHTML = ``;
  let ejerciciosR = cargarEjerciciosLista();
  ejerciciosR.forEach((ejercicio, indice) => {
    let parrafon = document.createElement("div");
    parrafon.classList.add("container")
    let html = `<tr>
    <td><img src='images/${ejercicio.imagen}' width='30' alt='${ejercicio.ejercicios}' title='${ejercicio.ejercicios}'></td>
    <td class='text-start'> Ejercicio: <b>${ejercicio.ejercicio}</b> Musculatura: <b>${ejercicio.parte}</b></td>
    <br><td class='text-center'> <label for="Series">Series:</label>
    <input class="vemos" type="number" name="" id="series${ejercicio.id}"></td>
    <td class='text-center'> <label for="Repeticiones">Repeticiones:</label>
    <input class="vemos" type="number" name="" id="repeticiones${ejercicio.id}"></td>
    <td class='text-end'><button class='btn btn-danger' onclick='eliminarEjercicio(${ejercicio.id});'><img src='images/trash3.svg' alt='Eliminar' width='24'></button></td>
    </tr>`;
    parrafon.innerHTML = html;
    contenedor2.appendChild(parrafon);
  });
}












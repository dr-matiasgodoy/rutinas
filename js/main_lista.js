cargarEjerciciosSelec()
actualizarBotonLista();



let botonete = document.getElementById("cartButtons");
botonete.onclick= () => {
const resultado2 = document.querySelector('#ejercicios_seleccionados');


  
      let ejerciciosR = cargarEjerciciosLista();
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

document.getElementById("eliminar_lista1").addEventListener('click', eliminarLista);

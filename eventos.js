let comentarios =
JSON.parse(localStorage.getItem("comentarios")) || [];

function mostrarComentarios(){

    const contenedor =
    document.getElementById("comentarios");

    contenedor.innerHTML = "";

    comentarios.forEach((comentario, index) => {

        contenedor.innerHTML += `

        <div class="comentario">

            <div class="nombre">
                🐾 ${comentario.nombre}
            </div>

            <div>
                ${comentario.mensaje}
            </div>

            <div class="fecha">
                ${comentario.fecha}
            </div>

            <button
            class="eliminar"
            onclick="eliminarComentario(${index})">
            Eliminar
            </button>

        </div>
        `;
    });
}

function agregarComentario(){

    const nombre =
    document.getElementById("nombre").value;

    const mensaje =
    document.getElementById("mensaje").value;

    if(nombre.trim() === "" || mensaje.trim() === ""){
        alert("Completa todos los campos");
        return;
    }

    const nuevoComentario = {
        nombre: nombre,
        mensaje: mensaje,
        fecha: new Date().toLocaleString()
    };

    comentarios.unshift(nuevoComentario);

    localStorage.setItem(
        "comentarios",
        JSON.stringify(comentarios)
    );

    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";

    mostrarComentarios();
}

function eliminarComentario(index){

    comentarios.splice(index,1);

    localStorage.setItem(
        "comentarios",
        JSON.stringify(comentarios)
    );

    mostrarComentarios();
}

mostrarComentarios();






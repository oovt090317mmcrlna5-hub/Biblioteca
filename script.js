// ======================================
// INFORMACIÓN DE LOS LIBROS
// ======================================

const libros = {

    "El Principito":
        "Novela corta de literatura que presenta una historia sobre la amistad, la imaginación y la forma de ver el mundo.",

    "Cien años de soledad":
        "Obra literaria que cuenta la historia de varias generaciones de la familia Buendía.",

    "Don Quijote de la Mancha":
        "Una de las obras más importantes de la literatura española.",

    "La Odisea":
        "Relato clásico sobre el viaje y las aventuras de Odiseo.",

    "1984":
        "Novela que presenta una sociedad controlada por un gobierno totalitario.",

    "Ciencia y Tecnología":
        "Material de consulta relacionado con ciencia, tecnología e investigación.",

    "Historia de México":
        "Libro de consulta sobre acontecimientos importantes de la historia de México.",

    "Diccionario":
        "Material de consulta para buscar significados y definiciones."
};


// ======================================
// BUSCADOR
// ======================================

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function () {

    const texto = buscador.value.toLowerCase();

    const librosHTML =
        document.querySelectorAll(".libro");

    librosHTML.forEach(function (libro) {

        const nombre =
            libro.dataset.nombre.toLowerCase();

        if (nombre.includes(texto)) {

            libro.style.display = "";

        } else {

            libro.style.display = "none";

        }

    });

});


// ======================================
// VER LIBRO
// ======================================

function verLibro(nombre) {

    const modal =
        document.getElementById("modal");

    const titulo =
        document.getElementById("modalTitulo");

    const texto =
        document.getElementById("modalTexto");

    titulo.textContent = nombre;

    texto.textContent =
        libros[nombre] ||
        "Información disponible en la biblioteca.";

    modal.style.display = "flex";
}


// ======================================
// CATEGORÍAS
// ======================================

function mostrarCategoria(categoria) {

    const modal =
        document.getElementById("modal");

    const titulo =
        document.getElementById("modalTitulo");

    const texto =
        document.getElementById("modalTexto");


    titulo.textContent =
        "Categoría: " + categoria;


    if (categoria === "Literatura") {

        texto.textContent =
            "En esta categoría encontrarás novelas, cuentos, poesía y diferentes obras literarias.";

    }

    else if (categoria === "Ciencia") {

        texto.textContent =
            "Aquí encontrarás libros relacionados con ciencia, tecnología, investigación y conocimiento.";

    }

    else if (categoria === "Historia") {

        texto.textContent =
            "Esta sección contiene libros sobre acontecimientos históricos de México y del mundo.";

    }


    modal.style.display = "flex";
}


// ======================================
// CERRAR MODAL
// ======================================

function cerrarModal() {

    document.getElementById("modal").style.display =
        "none";
}


// ======================================
// CERRAR AL HACER CLICK AFUERA
// ======================================

document
    .getElementById("modal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            cerrarModal();

        }

    });


// ======================================
// FORMULARIO
// ======================================

document
    .getElementById("formularioContacto")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();


        if (
            nombre === "" ||
            email === "" ||
            mensaje === ""
        ) {

            alert(
                "Por favor completa todos los campos."
            );

            return;
        }


        alert(
            "Mensaje enviado correctamente.\n\n" +
            "Gracias por comunicarte con la biblioteca, " +
            nombre + "."
        );


        document
            .getElementById("formularioContacto")
            .reset();

    });
/*Validacion form turnero*/ 

document.querySelector(".form__turnero").addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const servicio = document.getElementById("servicio").value;
    const profesional = document.getElementById("profesional").value;

    const serviciosValidos = ["Depilación", "Manicura", "Pedicura", "Masajes", "Tratamientos faciales"];
    const profesionalesValidos = ["Andrea Rodriguez", "Micaela Mérida", "Susana Smith", "Joe Doe", "Jane Doe"];

    const hoy = new Date();

    // Validaciones
    if (!/^[a-zA-Z\s]+$/.test(nombre) || nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres y solo puede contener letras y espacios.");
        event.preventDefault();
        return;
    }

    if (!/^\d{10}$/.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos.");
        event.preventDefault();
        return;
    }

    const fechaSeleccionada = new Date(fecha);
    if (fechaSeleccionada < hoy) {
        alert("La fecha no puede ser en el pasado.");
        event.preventDefault();
        return;
    }

    const horaSeleccionada = hora.split(":");
    const horas = parseInt(horaSeleccionada[0], 10);
    const minutos = parseInt(horaSeleccionada[1], 10);
    if (horas < 9 || horas > 18 || (horas === 18 && minutos > 0)) {
        alert("El horario debe estar entre las 9:00 y las 18:00.");
        event.preventDefault();
        return;
    }

    if (!serviciosValidos.includes(servicio)) {
        alert("Por favor, selecciona un servicio válido.");
        event.preventDefault();
        return;
    }

    if (!profesionalesValidos.includes(profesional)) {
        alert("Por favor, selecciona un profesional válido.");
        event.preventDefault();
        return;
    }

    alert("Formulario enviado con éxito.");
});

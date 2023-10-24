// Selecciona los elementos de entrada y el elemento donde se mostrará el resultado.
const inputCantidad = document.getElementById('cantidad');
const inputPrecio = document.getElementById('precio');
const resultado = document.getElementById('importe');

const importeElements = document.querySelectorAll('.importe');
const subtotalInput = document.getElementById('subtotal');
const ivaInput = document.getElementById('iva');
const totalInput = document.getElementById('total');

// Agrega un evento de escucha a ambos campos de entrada.
inputCantidad.addEventListener('input', calcularMultiplicacion);
inputPrecio.addEventListener('input', calcularMultiplicacion);
importeElements.forEach((element) => {
    element.addEventListener('input', calcularSubTotal);
});

// Función para calcular la multiplicación y mostrar el resultado.
function calcularMultiplicacion() {
    const numCantidad = parseFloat(inputCantidad.value) || 0;
    const numPrecio = parseFloat(inputPrecio.value) || 0;

    const multiplicacion = numCantidad * numPrecio;
    resultado.value = multiplicacion.toFixed(2);
    calcularSubTotal();
}

// Función para calcular el subtotal a partir de los elementos de importe.
function calcularSubTotal() {
    let subtotal = 0;
    let iva = 0;

    importeElements.forEach((element) => {
        subtotal += parseFloat(element.value) || 0;
    });

    subtotalInput.textContent = subtotal.toFixed(2);
    
    // Calcula el IVA (puedes personalizar esta parte según tu tasa de IVA).
    iva = subtotal * 0.16; // Ejemplo: IVA al 16%.
    ivaInput.textContent = iva.toFixed(2);

    // Calcula el total sumando el subtotal y el IVA.
    const total = subtotal + iva;
    totalInput.textContent = total.toFixed(2);
}

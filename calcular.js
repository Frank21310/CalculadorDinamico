
        // Función para calcular los totales
        function calcularTotales() {
            const campos = document.querySelectorAll('.campo');
            let subtotal = 0;

            campos.forEach(campo => {
                const valor = parseFloat(campo.value) || 0;
                subtotal += valor;
            });

            const iva = subtotal * 0.16; // Calculamos el 16% de IVA
            const total = subtotal + iva;

            document.getElementById('subtotal').textContent = subtotal.toFixed(2);
            document.getElementById('iva').textContent = iva.toFixed(2);
            document.getElementById('total').textContent = total.toFixed(2);
        }

        // Agregar campo al hacer clic en el botón "Agregar Campo"
        const agregarCampoBtn = document.getElementById('agregarCampo');
        agregarCampoBtn.addEventListener('click', () => {
            const contenedorCampos = document.getElementById('contenedorCampos');
            const nuevoCampo = document.createElement('input');
            nuevoCampo.className = 'campo';
            nuevoCampo.type = 'number';
            nuevoCampo.placeholder = 'Ingrese un valor';
            nuevoCampo.addEventListener('input', calcularTotales);
            contenedorCampos.appendChild(nuevoCampo);
        });

        // Calcular los totales iniciales
        calcularTotales();

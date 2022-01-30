class Factura {
    constructor(cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        // contiene la pseudoclase (objeto interno) informacion
        this.informacion = {
            baseImponible: 0,
            iva : 21,
            total: 0,
            formaPago: "efectivo",
        }
        // vamos a hacer métodos dentro de las clase factura ya que será donde lo recivamos
        this.calculoTotal = function() {
            for (let i = 0; i<this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
            this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
        }
        this.mostrarTotal = function(){
            this.calculoTotal();
            alert("El total de los productos es: " + this.informacion.total);
        }
    }
}
class Cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}
class Elemento {
    constructor(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// Vamos ahora a pasarle los datos, para ello creamos una variable con el cliente
const primerCliente = new Cliente("Ana", "Madrid", "665988888888", "278344");
const arrayElementos = [new Elemento("Objeto 1", 1, 5), new Elemento("Obeto2", 3, 4)];
const facturaDelTotal = new Factura(primerCliente, arrayElementos);
// declaramos el alert
facturaDelTotal.mostrarTotal();
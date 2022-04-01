/*
* las variables son dinamicas 
*/


// cadena
var variable = "Carlos";
console.log(typeof(variable));


// numerico
variable = 1000;
console.log(typeof(variable));

variable = 10.5;
console.log(typeof(variable));


// objeto
variable = {
    nombre: "Daniel",
    apellido: "Morales Londono",
    edad: 25
};
console.log(variable);
console.log(typeof(variable));


// boolean
variable = true;
console.log(typeof(variable));


// function
function miFuncion() {};
console.log(miFuncion);
console.log(typeof(miFuncion));


// symbol
variable = Symbol("mi simbolo");
console.log(variable);
console.log(typeof(variable));


// clases: function
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.nombre = apellido;
    }
}
console.log(Persona);
console.log(typeof(Persona));


// no definida
variable = undefined;
console.log(variable);
console.log(typeof(variable));


// null
variable = null;
console.log(variable);
console.log(typeof(variable));


// arrays
variable = ['A', 'B', 'c'];
console.log(variable);
console.log(typeof(variable));

var obj = {a: 'a de objeto'};
var a = 'a de afuera';

function whatsThis() {
    console.log('---------');
    console.log(a);
    console.log(this.a);
    console.log('********');
    return this.a;  // The value of this is dependent on how the function is called
}
whatsThis()
whatsThis.call(obj);
whatsThis.apply(obj);
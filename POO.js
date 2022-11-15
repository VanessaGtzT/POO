/*
Programiacjon Orientada a Objetos (POO)

Paradigma  = Manera en la que se puede hacer algo especifico. 
Paradigma de programacion: Forma o manera en la que pedeo programar algo. 

POO en JAVA, en JS, C#

Otras formas de programar: 
Programacion funcional 
PRogramacion imperativa 
Programacion declarativa. 

Pilares fundamentales de la programacion:
    - Polomorfismo (muchas formas de hacer algo (VIsual, blog de notas, nano, etc))
    - Herencia
    - Encapsulamiento (Encapsulas la informacion ya sea por seguridad, o por ocultar algo o que solo se ve lo que queremos o que no se modifiquen los datos, la forma se guardan los objetos )
    - Abstraccion (la forma que hacemos algo general, establecer un metodo-funcion muy general)

(Condicion con reglas
Algo que cambia o revoluciona
Algo ya establecido. 
Instrucciones)


- Clases
- Objetos
    - Atributos (lo que tengo - ojitos pispiretos)
    - Metodos (lo que puedo hacer con lo que tengo - mirar lo bello de la vida)
*/

//Ejemplo del gatito

//Propiedades = variables o constantes
const color = "Gris"; 
var tamaño = "chiquito"; 
var edad = 5; 
var cicatrices = true; 
const raza = "Angora"; 
var caracter = "Agresivo"; 

//Metodo o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array
var gatito = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito']; 
console.log(typeof(gatito)); 

//Evolucion dde los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5, 
    caracter: "Agresivo", 
    raza: "angora",
}

var Peregil = {
    nombre: "Peregil",
    edad: 10,
    caracter: "Feliz", 
    raza: "Siames",
}

var Cebollita = {
    nombre: "Cebollita",
    edad: 5, 
    caracter: "Timida", 
    raza: "Esfinge",
}

var Limon = {
    nombre: "Limon",
    edad: 2, 
    caracter: "Agrio", 
    raza: "Egipcio",
}

console.log(typeof(Cilantro));
console.log(Cilantro.nombre);
console.log(Limon.nombre);


/*
Clases para agiloizar este proceso (plantillas)


*/

//1. Defino mi clase con la palabra reservada class
class gato {
    //2. PAra definir mis propiedades o atributos como variables, para despues ponerle valores
nombre = "";  //es con = 
edad = 0; 
raza = ""; 
caracter = ""; 

//4. Agregar constructores
constructor(nombre, edad, raza, caracter){//Funcion especial para construir donde necesito esos parametros

    //THIS, es para especificar para quien "gato" (definir para cada elemento)
    this.nombre = nombre; //utilizamos el material para construir
    this.edad = edad;
    this.raza = raza; 
    this.caracter = caracter; 
}

//3. DEfinir los metodos que sera definidos como funciones o acciones
maullar(){
    console.log("Miau");
} 
dormir(){
    console.log("Zzzzz");
} 
ronronear(){
    console.log("Rrrrrr");
}

}

//5. para empezar a crear o instanciar objetos (gatos), vamos  a utilizar la palabra reservado new

var Primo = new gato("Primo", 9, "Rayado", "Dormilon"); 
var Amlovich = new gato ("Amlovich", 4, "Seria", "Amorosa"); 
var Dua = new gato ("Dua", 1, "kawaii", "tranquila"); 
var Lipa = new gato ("Lipa", 6, "Dorada", "Cazadora");
var Miauricio = new gato("Miauricio", 2, "Blanco", "Razguñador"); 
var Nezuko = new gato("Nezuko", 12, "Blanca", "Dormilona"); 
var Michi = new gato("Michi", 3, "Negro", "Enojon"); 
var Bonni = new gato("Bonni", 10, "Negro", "bonita"); 


console.log(Dua); 
Dua.ronronear();
Bonni.maullar(); 



//////////////////////

/* 
JSON (JavaScript Object Notation)

Es un formato estandar (que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS


*/


var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}


//objeto JSON

var CebollitaJSON ={
    "nombre": "Cebollita",
    "edad": 1,
    "caracter" : "Timida",
    "raza" : "Esfinge",
}

console.log(CebollitaJSON);
console.log(typeof(CebollitaJSON));

const objetoDeserealizado = {"nombre": "Cebollita", "edad": 5};
const objetoSerealizado = `{"nombre": "Cebollita", "edad": 5};`


console.log(typeof(objetoDeserealizado));
console.log(typeof(objetoSerealizado));


console.log("JSON");
//Para poder hacer esas conversiones lo mas rapido posible podemos usar los metodos

//Objeto de JSON
var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

//JSON.stringify (Objeto a string para que el servidor lo lea)

const PerejilSerializado = JSON.stringify(Perejil);

//JSON.parse

const PerejilDeserializado = JSON.parse(PerejilSerializado);

console.log("Este es perejil como string ",PerejilSerializado);
console.log("Este es perejil como objeto ",PerejilDeserializado);
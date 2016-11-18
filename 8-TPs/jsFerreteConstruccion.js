/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var nLargo = parseInt(document.getElementById('Largo').value);
	var nAncho = parseInt(document.getElementById('Ancho').value);
	alert("La cantidad de alambre necesario es: " + (3*((2*nLargo) + (2*nAncho))) + "m");
}
function Circulo () 
{
	var nRadio = parseInt(document.getElementById('Radio').value);
	alert("La cantidad de alambre necesario es: " + (2 * Math.PI * nRadio * 3));
}
function Materiales () 
{
	var nLargo = parseInt(document.getElementById('Largo').value);
	var nAncho = parseInt(document.getElementById('Ancho').value);
	var area = nLargo * nAncho;
	alert("La cantidad de bolsas de cemento necesario es: " + (area * 2) + " y " + "La cantidad de bolsas de cal necesario es: " + (area * 3));	
}
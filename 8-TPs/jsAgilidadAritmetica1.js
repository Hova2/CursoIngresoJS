/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var respuesta;

function comenzar()
{
	var nUno;
	var nDos;
	var operacion;

	nUno = Math.floor(Math.random() * 10) + 1;
	nDos = Math.floor(Math.random() * 10) + 1;
	operacion = Math.floor(Math.random() * 4) + 1;

	document.getElementById("PrimerNumero").value = nUno;
	document.getElementById("SegundoNumero").value = nDos;
	document.getElementById("Respuesta").value = "";

	switch(operacion){
		case 1:
			document.getElementById("Operador").value = "Mas";
			respuesta = nUno + nDos;
		break;
		case 2:
			document.getElementById("Operador").value = "Menos";
			respuesta = nUno - nDos;
		break;
		case 3:
			document.getElementById("Operador").value = "Por";
			respuesta = nUno * nDos;
		break;
		case 4:
			document.getElementById("Operador").value = "Dividido";
			respuesta = nUno / nDos;
		break;
	}
	respuesta = parseInt(respuesta);
}//FIN DE LA FUNCIÓN

function Responder()
{
	if (respuesta == parseInt(document.getElementById("Respuesta").value))
		alert("Correcto!!!!");
	else
		alert("Burro!!!!");
	comenzar();
}//FIN DE LA FUNCIÓN

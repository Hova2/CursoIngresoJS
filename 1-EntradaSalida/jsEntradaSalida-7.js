/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nUno = parseInt(document.getElementById('numeroUno').value);
	var nDos = parseInt(document.getElementById('numeroDos').value);
	alert("La suma es: " + (nUno + nDos));
}

function restar()
{
	var nUno = parseInt(document.getElementById('numeroUno').value);
	var nDos = parseInt(document.getElementById('numeroDos').value);
	alert("La resta es: " + (nUno - nDos));
}

function multiplicar()
{ 
	var nUno = parseInt(document.getElementById('numeroUno').value);
	var nDos = parseInt(document.getElementById('numeroDos').value);
	alert("La multiplicacion es: " + (nUno * nDos));
}

function dividir()
{
	var nUno = parseInt(document.getElementById('numeroUno').value);
	var nDos = parseInt(document.getElementById('numeroDos').value);
	alert("La divicion es: " + (nUno / nDos));
}


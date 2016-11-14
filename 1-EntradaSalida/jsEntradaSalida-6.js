/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var nUno = parseInt(document.getElementById('numeroUno').value);
	var nDos = parseInt(document.getElementById('numeroDos').value);
	alert("La suma es: " + (nUno + nDos));
}


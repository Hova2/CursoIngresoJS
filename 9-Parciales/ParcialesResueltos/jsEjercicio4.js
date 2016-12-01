function MultiplicarRestarSumar()
{
	var numUno;
	var numDos;

	numUno = prompt("Ingrese el primer numero");
	numDos = prompt("Ingrese el segundo numero");
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	if(numUno == numDos){
		document.write("<h2>" + "La multiplicacion es: " + (numUno * numDos) + "</h2>");
	}else if(numUno > numDos){
		document.write("<h2>" + "La resta es: " + (numUno - numDos) + "</h2>");
	}else{
		document.write("<h2>" + "La suma es: " + (numUno + numDos) + "</h2>");
	}
}
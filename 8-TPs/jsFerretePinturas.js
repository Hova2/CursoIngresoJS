/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura = parseInt(document.getElementById('Temperatura').value);
	alert(temperatura + " Fahrenheit son " + (temperatura - 32) + " Centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura = parseInt(document.getElementById('Temperatura').value);
	alert(temperatura + " Centígrados son " + (temperatura + 32) + " Fahrenheit");	
}

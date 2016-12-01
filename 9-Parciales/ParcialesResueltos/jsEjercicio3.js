function CalcularMetrosAlambre ()
{
	var nLargo = parseInt(document.getElementById('Largo').value);
	var nAncho = parseInt(document.getElementById('Ancho').value);
	alert("La cantidad de alambre que se necesita es: " + ((2*nLargo) + (2*nAncho))*3 + "m");
}
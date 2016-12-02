function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);
	
	switch(mesDelAño){
		case "Enero":
		case "Marzo":
			alert("Falta para el invierno.!");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
		break;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	}
}//FIN DE LA FUNCIÓN
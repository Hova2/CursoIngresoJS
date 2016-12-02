function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
		case "Febrero":
			alert(mesDelAño + " tiene 28 dias");
		break;
		case "Noviembre":
		case "Abril":
		case "Junio":
		case "Septiembre":
			alert(mesDelAño + " tiene 30 dias");
		break;
		default:
			alert(mesDelAño + " tiene 31 dias");
		break;
	}
}//FIN DE LA FUNCIÓN
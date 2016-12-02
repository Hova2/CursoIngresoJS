function mostrarDiaSemana ()
{
	var dia = document.getElementById('Dia').value;
	
	switch(dia){
		case "Sabado":
			alert("Hoy se sale fuerte!!!");
		break;
		case "Domingo":
			alert("Destroy!!!");
		break;
		default:
			alert("Sos pobre, labura!!!!");
		break;
	}
}

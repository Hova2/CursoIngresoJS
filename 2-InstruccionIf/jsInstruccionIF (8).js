function Mostrar(){

	var edad = document.getElementById('edad').value; //tomo la edad  
	var estadoCivil = document.getElementById('estadoCivil').value; //tomo el estado civil

	if (edad >= 18 && estadoCivil == "Soltero") {
		alert("Es soltero y no es menor.")
	}	

}//FIN DE LA FUNCIÓN
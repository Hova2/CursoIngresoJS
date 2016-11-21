function Mostrar(){
	
	var edad = document.getElementById('edad').value; //tomo la edad  
	var estadoCivil = document.getElementById('estadoCivil').value; //tomo el estado civil

	if (edad < 18 && (estadoCivil == "Casado" || estadoCivil == "Divorciado")) {
		alert("Es muy pequeño para NO ser soltero.")
	}	

}//FIN DE LA FUNCIÓN
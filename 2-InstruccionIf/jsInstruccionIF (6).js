function Mostrar(){
	
	var edad = document.getElementById('edad').value; //tomo la edad  
	if (edad>=18) {
		alert("La persona es mayor de edad");
	}else if(edad>=13 && edad<=17){
		alert("La persona es adolescente");
	}else{
		alert("La persona es un niño");
	}

}//FIN DE LA FUNCIÓN
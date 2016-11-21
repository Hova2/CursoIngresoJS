function Mostrar()
{
	var nota = Math.floor((Math.random() * 10) + 1); //Genero el número RANDOM entre 1 y 10 

	if (nota >= 9) {
		alert("Su nota es: " + nota + " EXCELENTE");
	}else if(nota >=4 && nota <=8){
		alert("Su nota es: " + nota + " APROBÓ");
	}else{
		alert("Su nota es: " + nota + " Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;

	// declarar variables
	
	var respuesta='si';
	var numero;
	var max;
	var min;

	while(respuesta!='no')
	{
		numero = parseInt(prompt("Ingrese un numero"));
		if(contador==0){
			max = numero;
			min = numero;
		}
		else{
			if(numero > max){
				max = numero;
			}else if(numero < min){
				min = numero;
			}
		}
		respuesta = prompt("¿Quiere continuar?");
		contador++;
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}//FIN DE LA FUNCIÓN
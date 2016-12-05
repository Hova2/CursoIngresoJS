function Mostrar()
{

	
	//declarar contadores y variables 
	
	var respuesta="si";
	var negativos;
	var positivos;
	var contNeg;
	var contPos;
	var contCeros;
	var contPares;

	negativos = 0;
	positivos = 0;
	contNeg = 0;
	contPos = 0;
	contCeros = 0;
	contPares = 0;

	while(respuesta!="no"){
		
		numero = parseInt(prompt("Ingrese un numero"));

		if (numero < 0){
			negativos = negativos + numero;
			contNeg++;
		}else if(numero > 0){
			positivos = positivos + numero;
			contPos++;
		}else{
			contCeros++;
		}

		if(numero % 2 || numero==0)
			contPares++;

		respuesta = prompt("¿Quiere continuar?");
	}

	document.write("La suma de los negativos es: " + negativos);
	document.write("<br>La suma de los positivos es: " + positivos);
	document.write("<br>La cantidad de los positivos es: " + contPos);
	document.write("<br>La cantidad de los negativos es: " + contNeg);
	document.write("<br>La cantidad de los ceros es: " + contCeros);
	document.write("<br>La cantidad de los pares es: " + contPares);
	document.write("<br>El promedio de los positivos es: " + (positivos / contPos));
	document.write("<br>El promedio de los negativos es: " + (negativos / contNeg));
	document.write("<br>La diferencia entre los positivos y negativos es: " + (positivos - negativos));

}//FIN DE LA FUNCIÓN
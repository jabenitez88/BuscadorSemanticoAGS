    
	function mostrar_bucle(bucle){
		for(var i=0;i<bucle.length;i++){
			bucle[i] =  bucle[i].replace(/[^a-zA-Z 0-9.]+/g,'');
			console.log("\n"+bucle[i]);	
		}
	}
	
	/*
		function eliminarDuplicados(arr)
		
		Función que recibe un array y elimina los elementos que sean exactamente iguales dentro del array.
		De esta forma, si insertamos en un array de cadenas de texto la misma cadena varias veces, gracias
		a esta función se eliminaran las cadenas repetidas.
	*/
	function eliminarDuplicados(arr) {
	 var i,
		 len=arr.length,
		 out=[],
		 obj={};
	
	 for (i=0;i<len;i++) {
		obj[arr[i]]=0;
	 }
	 for (i in obj) {
		out.push(i);
	 }
	 return out;
	}
	
	/*
		remover_acentos(str)
		
		Función que recibe una cadena de texto y elimina los acentos.
		Utiliza un array (map) que contiene los elementos con tilde y su equivalente sin tilde.
		Va a ser muy útil para convertir cadenas en cadenas sin tilde.
	*/
	function remover_acentos(str) {

		var map={
		'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'AE','Ç':'C','È':'E','É':'E','Ê':'E','Ë':'E','Ì':'I','Í':'I','Î':'I','Ï':'I','Ð':'D','Ñ':'N','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','Ù':'U','Ú':'U','Û':'U','Ü':'U','Ý':'Y','ß':'s','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'ae','ç':'c','è':'e','é':'e','ê':'e','ë':'e','ì':'i','í':'i','î':'i','ï':'i','ñ':'n','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','ù':'u','ú':'u','û':'u','ü':'u','ý':'y','ÿ':'y','Ā':'A','ā':'a','Ă':'A','ă':'a','Ą':'A','ą':'a','Ć':'C','ć':'c','Ĉ':'C','ĉ':'c','Ċ':'C','ċ':'c','Č':'C','č':'c','Ď':'D','ď':'d','Đ':'D','đ':'d','Ē':'E','ē':'e','Ĕ':'E','ĕ':'e','Ė':'E','ė':'e','Ę':'E','ę':'e','Ě':'E','ě':'e','Ĝ':'G','ĝ':'g','Ğ':'G','ğ':'g','Ġ':'G','ġ':'g','Ģ':'G','ģ':'g','Ĥ':'H','ĥ':'h','Ħ':'H','ħ':'h','Ĩ':'I','ĩ':'i','Ī':'I','ī':'i','Ĭ':'I','ĭ':'i','Į':'I','į':'i','İ':'I','ı':'i','Ĳ':'IJ','ĳ':'ij','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','Ĺ':'L','ĺ':'l','Ļ':'L','ļ':'l','Ľ':'L','ľ':'l','Ŀ':'L','ŀ':'l','Ł':'L','ł':'l','Ń':'N','ń':'n','Ņ':'N','ņ':'n','Ň':'N','ň':'n','ŉ':'n','Ō':'O','ō':'o','Ŏ':'O','ŏ':'o','Ő':'O','ő':'o','Œ':'OE','œ':'oe','Ŕ':'R','ŕ':'r','Ŗ':'R','ŗ':'r','Ř':'R','ř':'r','Ś':'S','ś':'s','Ŝ':'S','ŝ':'s','Ş':'S','ş':'s','Š':'S','š':'s','Ţ':'T','ţ':'t','Ť':'T','ť':'t','Ŧ':'T','ŧ':'t','Ũ':'U','ũ':'u','Ū':'U','ū':'u','Ŭ':'U','ŭ':'u','Ů':'U','ů':'u','Ű':'U','ű':'u','Ų':'U','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','ź':'z','Ż':'Z','ż':'z','Ž':'Z','ž':'z','ſ':'s','ƒ':'f','Ơ':'O','ơ':'o','Ư':'U','ư':'u','Ǎ':'A','ǎ':'a','Ǐ':'I','ǐ':'i','Ǒ':'O','ǒ':'o','Ǔ':'U','ǔ':'u','Ǖ':'U','ǖ':'u','Ǘ':'U','ǘ':'u','Ǚ':'U','ǚ':'u','Ǜ':'U','ǜ':'u','Ǻ':'A','ǻ':'a','Ǽ':'AE','ǽ':'ae','Ǿ':'O','ǿ':'o'
		};
			var res=''; //Está variable almacenará el valor de str, pero sin acentos y tildes
			for (var i=0;i<str.length;i++)
			{
				c=str.charAt(i);res+=map[c]||c;
			}
		return res;
	}
		
	/*
		eliminaSignos(frase)
		
		Función que recibe una cadena de texto y elimina los signos.
	*/
	function eliminaSignos(frase){
			frase =frase.toLowerCase();
			frase.replace("+", " ");
			frase.replace(".", " ");
			frase.replace(/,/g, "");
			return frase;
	} 
	
	/*
		eliminaStopWords(palabra)
		
		Función que recibe una cadena de texto y convierte todas las palabras en minúsculas.
		Una vez convertida, busca las coincidencias entre la cadena y las palabras stopwords
		que habíamos definido anteriormente. En el caso de encontrar alguna, la elimina de la
		cadena inicial insertada y devuelve finalmente la cadena sin esas stopwords.
	*/
	
	function eliminaStopWords(palabra){
			palabra = palabra.toLowerCase();
			for(var i=0;i<stopwords.length;i++)	palabra = palabra.replace(stopwords[i], "");
			palabra.replace("+", "");
			return palabra;
	} 
	
	/*
		detectaTipo(palabra,claveBusqueda,claveSolr,separador)
		
		Función que recibe una palabra, un array bidimensional que contiene claves
		de búsqueda, un array con claves para apache solr y una cadena de sparación.
		
		Esta función es uno de los pilares del buscador, gracias a ella, enviando
		por parámetro las variables correspondientes, el buscador será capaz de analizar
		qué datos necesita realmente obtener el usuario y qué datos son los que envía.
		
		Si el usuario escribe una consulta como la siguiente:
		
		Qué mapas se hicieron en el año 1639 por Galvarreta
		
		Mediante esta función, analizará la frase y será capaz de llegar a la conclusión 
		de que el usuario necesita obtener la información de las obras de tipo "mapas"
		que se hicieron en el año 1639 y que fueron hechas por el autor Galvarreta.
		
		Todo ello es posible mediante diferentes llamadas a esta función con diversos parámetros
		que están definidos en este código más adelante.
		
	*/
	
	function detectaTipo(palabra,claveBusqueda,claveSolr,separador){
			var primera = 0;
			var abuscar = "";
			palabra = palabra.toLowerCase();
			for(var i=0;i<claveBusqueda.length;i++)	{
				for(var j=0;j<claveBusqueda[i].length;j++){
					var n = palabra.match(claveBusqueda[i][j]);
					if(n != null) { 
						if(primera != 0) abuscar = abuscar + separador; 
						abuscar = abuscar +  claveSolr[i]; 
						primera++;
						break;
					}
				}
			}
			if(primera == 0) abuscar = claveSolr[claveSolr.length-1];
			
			abuscar = abuscar + "+AND+";
			
			//document.write(abuscar);
			return abuscar;
	}  
	
	function detectaTipo2(palabra,claveBusqueda,separador,campo,usaAux,rLike){
			
			var primera = 0;
			var abuscar = "";  
			var auxiliar = "";
			var cadenaCortada = "";
			
			palabra = palabra.toLowerCase();
			simbolo1 = "%3a";
			simbolo2 = "";
			
			
			if(rLike){
				simbolo1 = "%3a*";
				simbolo2 = "*";	
			}
			
			//document.write(claveBusqueda[1]);
			for(var i=0;i<claveBusqueda.length;i++)	{
					
					auxiliar = claveBusqueda[i].replace(/[^a-zA-Z 0-9.]+/g,'');
					
					auxiliar = auxiliar.toLowerCase();
					
					
					/*
					auxiliar = eliminaStopWords(auxiliar);

					cadenaCortada = auxiliar.split(" ");
				
					for(var j=0;j<cadenaCortada.length;j++)	{	
						auxiliar = cadenaCortada[j].replace(/[^a-zA-Z 0-9.]+/g,'');
						auxiliar = auxiliar.toLowerCase();
						
						var n = palabra.match(auxiliar);
						if(n != null) { 
							
							if(primera == 0) abuscar = "+AND+";
							if(primera != 0) abuscar = abuscar + separador; 
							
							
							
							if(usaAux) abuscar = abuscar + campo + simbolo1 + auxiliar + simbolo2; 
							else abuscar = abuscar + campo + simbolo1 + cadenaCortada[j] + simbolo2; 
							
							console.log("\n\n Palabra = "+palabra+" \n Aux = "+auxiliar);
							
							primera++;
							
						}				
					}
					*/
					
					
					var n = palabra.match(auxiliar);
					if(n != null) { 
						
						//if(primera == 0) abuscar = "+AND+";
						if(primera != 0) abuscar = abuscar + separador; 
						
						if(usaAux) abuscar = abuscar + campo + simbolo1 + auxiliar + simbolo2; 
						else abuscar = abuscar + campo + simbolo1 + claveBusqueda[i] + simbolo2; 
						
						
						
						primera++;
						
					}
				
			}
			
			//document.write(abuscar);
			return abuscar;
	}  
	/*
		function dameLoQueQuiero(datosQueNecesito,indiceNecesidad)
		Función que recibe una palabra que indica qué campo de nuestra base de datos necesitamos
		y su índice de necesidad correspondiente.
		
		Esta función la utilizaremos a lo largo de nuestra aplicación para poder obtener y 
		almacenar en un array los distintos valores de un campo determinado de la misma.
		
		Es decir, si necesitamos obtener todos los autores que están almacenados actualmente
		en las distintas obras en Solr, gracias a esta función obtenemos un array con 
		todos los autores.
	*/
	
	function dameLoQueQuiero(datosQueNecesito,indiceNecesidad)
	{
		// En función de la cadena que recibamos como parámetro en datosQueNecesito
		// y en relación al indiceNecesidad que pidamos, realizaremos una consulta
		// a nuestro servidor de Apache Solr, almacenando en un array todos los valores
		// únicos de un campo concreto de cada una de las obras.
		
		// Índices de campos:
		// 1 - id
		// 2 - titulo
		// 3 - creador
		// 4 - tematica
		// 5 - notas
		// 6 - materia
		// 7 - referencias
		// 8 - idioma
		// 9 - publicador
		// 10 - publicacion
		var datosAgrupadosSinTilde2 = "";
		var datosAgrupados2 = new Array(10000);
		$.ajax({  
                url: 'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q=*%3A*&fq=&start=0&rows=10000&fl='+datosQueNecesito+'&wt=json&explainOther=&hl=on&hl.fl=titulo',
                type: 'GET',
                dataType: 'json',
				async: false,
                success: function(datos){
                    //$('#resultados').html(JSON.stringify(datos, null, 4)).fadeIn('slow');
                    
					var datosAgrupados = new Array(datos.response.docs.length);
					var datosAgrupadosSinTilde = "";
					
					
								
							switch(indiceNecesidad)
							{
								case 1:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].id;
									}
								break;
								
								case 2:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].titulo;
									}
								break;
								
								case 3:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].creador;					
									}
								break;
								
								case 4:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].tematica;
									}
								break;
								
								case 5:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].notas;
									}
								break;
								
								case 6:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].materia;
									}
								break;
								
								case 7:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].referencias;
									}
								break;
								
								case 8:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].idioma;
									}
								break;
								
								case 9:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].publicador;
									}
								break;
								
								case 10:
									for(var i=0;i<datos.response.docs.length;i++){
										datosAgrupados[i] = datos.response.docs[i].publicacion;
									}
								break;
								
								default:
							}
					
					datosAgrupados = eliminarDuplicados(datosAgrupados);
					for(var i=0;i<datosAgrupados.length;i++){
							datosAgrupadosSinTilde += "<p>" + datosAgrupados[i] + "</p>";	
											
					}
					
					datosAgrupadosSinTilde = remover_acentos(datosAgrupadosSinTilde);
					datosAgrupadosSinTilde = eliminaSignos(datosAgrupadosSinTilde); 
					
					datosAgrupadosSinTilde2 = datosAgrupadosSinTilde;
					datosAgrupados2 = datosAgrupados;
					//$('#respuesta').html(datosAgrupadosSinTilde).fadeIn('slow');
					//return datosAgrupados;
					//console.log(datosAgrupadosSinTilde);
					//return datosAgrupadosSinTilde;
                }
            });
			return datosAgrupados2;
			//return datosAgrupadosSinTilde2;
	
	}
	
	
	
	
	
	
	
	
	
	var respuestasBusqueda1 = Array("Los mapas que fueron realizados","Los planos que fueron realizados","Los dibujos que fueron realizados","Los autores que realizaron las obras","Las técnicas utilizadas para las obras","El lugar donde se realizaron las obras","La técnica utilizada para realizar las obras","Las fechas en las que se realizaron las obras");
	var respuestasBusqueda2 = Array("con título","en el idioma","en los idiomas","con los colores","entre las fechas","en la época","con la temática","sobre el soporte","por el autor","sobre la ciudad","sobre el país","sobre el continente","mediante la técnica");
	
	var stopwords = Array("un "," una "," unas "," unos "," uno "," sobre "," todo "," también "," tras "," otro "," algún "," alguno "," alguna "," algunos "," algunas "," ser "," es "," soy "," eres "," somos "," sois "," estoy "," esta "," estamos "," estais "," estan "," en "," para "," atras "," porque "," por qué "," estado "," estaba "," ante "," antes "," siendo "," ambos "," pero "," poder "," puede "," puedo "," podemos "," podeis "," pueden "," fui "," fue "," fuimos "," fueron "," hacer "," hago "," hace "," hacemos "," haceis "," hacen "," cada "," fin "," incluso "," primero "," conseguir "," consigo "," consigue "," consigues "," conseguimos "," consiguen "," ir "," voy "," va "," vamos "," vais "," van "," vaya "," gueno "," ha "," tener "," tengo "," tiene "," tenemos "," teneis "," tienen "," el "," la "," lo "," las "," los "," su "," aqui "," mio "," tuyo "," ellos "," ellas "," nos "," nosotros "," vosotros "," vosotras "," si "," dentro "," solo "," solamente "," saber "," sabes "," sabe "," sabemos "," sabeis "," saben "," ultimo "," largo "," bastante "," haces "," muchos "," aquellos "," aquellas "," sus "," entonces "," tiempo "," verdad "," VERDADERO "," verdadera "," ciertos "," cierta "," ciertas "," intentar "," intento "," intenta "," intentas "," intentamos "," intentais "," intentan "," dos "," bajo "," arriba "," encima "," usar "," uso "," usas "," usa "," usamos "," usais "," usan "," emplear "," empleo "," empleas "," emplean "," ampleamos "," empleais "," valor "," muy "," era "," eras "," eramos "," eran "," modo "," bien "," cual "," mientras "," con "," entre "," sin "," trabajo "," trabajar "," trabajas "," trabaja "," trabajamos "," trabajais "," trabajan "," podria "," podrias "," podriamos "," podrian "," podriais "," yo "," aquel "," textobusqueda="," de ", " a "," ante ", " bajo ", " cabe ", " con ");
	
	var stopwordsDominio = Array("por","hizo","realizó","realizo","ha realizado","fue realizada","fue hecha","se hizo","para");
	
	
	/**************************************************************/
	/**************************************************************/
	/*					TIPOS DE PREGUNTAS						  */
	/**************************************************************/
	/**************************************************************/
	/*
		En función de si el usuario escribe "qué, quién, cómo, dónde o cuándo"
		nosotros deberemos proporcionarle la información contenida en uno u otro campo.
		
		Si la pregunta es "Qué autor realizó alguna obra en el año 1639"
		Nuestra aplicación mostrará entre uno de los campos el autor que realizó
		una obra en ese año.
	
	*/
	var preguntasClave = Array("titulo%2Ccreador%2Ctematica","creador%2Cpublicador%2C","notas","materia","fecha%2Cnotas");
	var datosAMostrarQue = Array("que","qué","qu\u00e9","quÃ©");
	var datosAMostrarQuien = Array("quien"); 
	var datosAMostrarComo = Array("como");
	var datosAMostrarDonde = Array("donde");
	var datosAMostrarCuando = Array("cuando");
	var datosAMostrarTotal = Array(datosAMostrarQue,datosAMostrarQuien,datosAMostrarComo,datosAMostrarDonde,datosAMostrarCuando);
	
	var sujetoClave = Array("mapa","plano","dibujo","autor","tecnica","epoca","tematica","idioma","fecha","tematica","soporte","ciudad","pais","continente");
	
	var tecnicasClave1 = Array("tinta","tinta negra","tinta aguada","lapiz negro","lápiz negro","rotulación","rotulaciones","rotulacion");
	var tecnicasClave2 = Array();
	var tecnicasClave3 = Array("a pluma");
	

	
	
	
	
	/**************************************************************/
	/**************************************************************/
	/*					TIPOS DE OBRAS							  */
	/**************************************************************/
	/**************************************************************/
	/*
		Si el usuario escribe la palabra "obras" los resultados a obtener serán
		todas las obras, ya sean de tipo ilustración, manuscrito, mapa, libro u otros.
		
		Pero si el usuario únicamente desea ver obras que son de tipo "mapas" la aplicación
		gracias a estas variables, haciendo uso de una de las funciones anteriores,
		lograremos obtener las obras que pertenecen al tipo Mapas.
	
	*/
	
	var tiposClaveA = Array("tipo%3aIlust*","tipo%3aMapas","tipo%3aManuscritos","tipo%3aLibros","tipo%3aOtros","tipo%3a*Rev*","tipo%3a*");
	var tiposClaveA_Ilustraciones = Array("ilustraciones","ilustracion","ilustración");
	var tiposClaveA_Mapas = Array("mapa","mapas","plano","planos");
	var tiposClaveA_Manuscritos = Array("manuscrito","manuscritos");
	var tiposClaveA_Libros = Array("libro","libros");
	var tiposClaveA_Otros = Array("otro","otros");
	var tiposClaveA_Periodicos = Array("periódicos","periódico","periodico","periodicos","revista","revistas");
	var tiposClaveA_Obras = Array("obra","obras");
	var tiposClaveASolr = new Array(tiposClaveA_Ilustraciones,tiposClaveA_Mapas,tiposClaveA_Manuscritos,tiposClaveA_Libros,tiposClaveA_Otros,tiposClaveA_Periodicos,tiposClaveA_Obras);
	
	/**************************************************************/
	/**************************************************************/
	/*							IDIOMAS							  */
	/**************************************************************/
	/**************************************************************/
	/*
		En función del idioma que inserte el usuario en el cuadro de búsqueda
		nuestro buscador será capaz de detectar el idioma y buscar las obras
		relacionadas con dicho lenguaje.
	
	*/
	var idiomasClaveA = Array("idioma%3aspa","idioma%3afra","idioma%3aeng","idioma%3alat","idioma%3ager","idioma%3aita","idioma%3aport","idioma%3adut","idioma%3acat","idioma%3a*");
	var idiomasClaveA_1 = Array("español","castellano","espanol");
	var idiomasClaveA_2 = Array("frances","francés");
	var idiomasClaveA_3 = Array("ingles","inglés");
	var idiomasClaveA_4 = Array("latin","latín");
	var idiomasClaveA_5 = Array("alemán","aleman");
	var idiomasClaveA_6 = Array("italiano");
	var idiomasClaveA_7 = Array("portugues","portugués");
	var idiomasClaveA_8 = Array("holandes","holandés");
	var idiomasClaveA_9 = Array("catalan","catalán");

	var idiomasClaveASolr = new Array(idiomasClaveA_1,idiomasClaveA_2,idiomasClaveA_3,idiomasClaveA_4,idiomasClaveA_5,idiomasClaveA_6,idiomasClaveA_7,idiomasClaveA_8,idiomasClaveA_9);
	
	
	
	/*
		Haciendo uso de la anterior función explicada, almacenamos en cuatro variables
		los autores, las temáticas, los lugares y las fechas existentes en nuestra base
		de datos actual.
	*/
	var autoresExistentes = dameLoQueQuiero("creador",3);
	var tematicasExistentes = dameLoQueQuiero("tematica",4);
	var lugaresExistentes = dameLoQueQuiero("materia",6);
	var fechasExistentes = dameLoQueQuiero("publicacion",10);

	
	
	
	function encode_utf8( s )
	{
	  return unescape( encodeURIComponent( s ) );
	}

	function decode_utf8( s )
	{
	  return decodeURIComponent( escape( s ) );
	}
	
	$(document).ready(function(){
		
		
		
		//console.log(remover_acentos(autoresExistentes[1]).toLowerCase());
        $('#respuesta').hide();
		//$('#tuto-ajax-form').encoding = "UTF-8";
        $('#buscador').submit(function(evento){
            $('#respuesta').hide();         
            evento.preventDefault();
			
			//mostrar_bucle(autoresExistentes);
			//mostrar_bucle(autoresExistentes);
			//mostrar_bucle(tematicasExistentes);

            var datos_formulario = $(this).serialize();
				datos_formulario = encode_utf8(datos_formulario);
			var datos_buscar = eliminaStopWords(datos_formulario);    
			var busqueda  = detectaTipo(datos_buscar,tiposClaveASolr,tiposClaveA,"+OR+",true);
				
				busqueda  += detectaTipo(datos_buscar,idiomasClaveASolr,idiomasClaveA,"+OR+",true);
				
				// Comprobamos qué datos inserta, si desea buscar indicando una temática
				// una fecha, un autor.... etc, debemos ir uno por uno.
				// Índices de campos:
				// 1 - id
				// 2 - titulo
				// 3 - creador
				// 4 - tematica
				// 5 - notas
				// 6 - materia
				// 7 - referencias
				// 8 - idioma
				// 9 - publicador
				// 10 - publicacion (es el campo date o fecha)
				
				busqueda += detectaTipo2(datos_buscar,autoresExistentes,"+OR+","creador",false,false);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,fechasExistentes,"+OR+","publicacion",true,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,fechasExistentes,"+OR+","titulo",true,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,tematicasExistentes,"+OR+","tematica",true,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,tematicasExistentes,"+OR+","tematica",false,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,lugaresExistentes,"+OR+","titulo",true,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,lugaresExistentes,"+OR+","materia",true,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				busqueda += detectaTipo2(datos_buscar,lugaresExistentes,"+OR+","materia",false,true);
				if((busqueda != null) && (busqueda[busqueda.length-1] != "+")) busqueda = busqueda + "+OR+";
				
				if(busqueda[busqueda.length-1] == '+') busqueda = busqueda + "tipo%3aM";
				
				
				console.log(busqueda); 
				
				
			//document.write(datos_buscar);
			var datos_mostrar = eliminaStopWords(datos_formulario);
				datos_mostrar = detectaTipo(datos_mostrar,datosAMostrarTotal,preguntasClave,",");
				//document.write(datos_mostrar);
			//document.write(remover_acentos(datos_formulario));
			
			
			
			
			
            $.ajax({  
                url: 'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q='+busqueda+'&fq=&start=0&rows=10&fl='+datos_mostrar+'%2Cscore%2Cid&wt=json&explainOther=&hl=on&hl.fl=titulo',
                data: "",
                type: 'POST',
                dataType: 'json',
                success: function(datos){
					 //document.write('http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q='+busqueda+'&fq=&start=0&rows=10&fl='+datos_mostrar+'%2Cscore&wt=json&explainOther=&hl=on&hl.fl=titulo');
                    //$('#resultados').html(JSON.stringify(datos, null, 4)).fadeIn('slow'); 
                    
					var idsAgrupadas = "<p>Se encontraron "+datos.response.numFound+" resultados</p>";
					
					for(var i=0;i<datos.response.docs.length;i++){
						idsAgrupadas += "<div id='obra-"+i+"' class='nuevaObra-"+(i%2)+"'>";
						if(datos_formulario.match("autor")){
							idsAgrupadas += "<p>" + datos.response.docs[i].creador+"</p>";
						}else{
							idsAgrupadas += "<p class='id'> Obra con id: " +	datos.response.docs[i].id+"</p>";
							idsAgrupadas += "<p class='id'> Titulo: " +	datos.response.docs[i].titulo+"</p>";
							idsAgrupadas += "<p class='id'> Autor: " +	datos.response.docs[i].creador+"</p>";
						}
						idsAgrupadas += "</div>";
						//idsAgrupadas += "<p>" + datos.response.docs[i].creador+"</p>";
					}
					$('#resultados').html(idsAgrupadas).fadeIn('slow');
					$('#respuesta').html("URL ejecutada: "+'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q='+busqueda+'&fq=&start=0&rows=10&fl='+datos_mostrar+'%2Cscore&wt=json&explainOther=&hl=on&hl.fl=titulo').fadeIn('slow');
                }
            });
			
             
        });
    });
    var respuestasBusqueda1 = Array("Los mapas que fueron realizados","Los planos que fueron realizados","Los dibujos que fueron realizados","Los autores que realizaron las obras","Las técnicas utilizadas para las obras","El lugar donde se realizaron las obras","La técnica utilizada para realizar las obras","Las fechas en las que se realizaron las obras");
	var respuestasBusqueda2 = Array("con título","en el idioma","en los idiomas","con los colores","entre las fechas","en la época","con la temática","sobre el soporte","por el autor","sobre la ciudad","sobre el país","sobre el continente","mediante la técnica");
	
	// Listado de stopwords que utilizaremos para que sean elimanadas de la consulta realizada por el usuario
	// gracias a una función auxiliar que recorrerá el array buscando cada una de las palabras
	// y borrándolas de la cadena insertada por el usuario.
	
	var stopwords = Array("un "," una "," unas "," unos "," uno "," sobre "," todo "," también "," tras "," otro "," algún "," alguno "," alguna "," algunos "," algunas "," ser "," es "," soy "," eres "," somos "," sois "," estoy "," esta "," estamos "," estais "," estan "," en "," para "," atras "," porque "," por qué "," estado "," estaba "," ante "," antes "," siendo "," ambos "," pero "," poder "," puede "," puedo "," podemos "," podeis "," pueden "," fui "," fue "," fuimos "," fueron "," hacer "," hago "," hace "," hacemos "," haceis "," hacen "," cada "," fin "," incluso "," primero "," conseguir "," consigo "," consigue "," consigues "," conseguimos "," consiguen "," ir "," voy "," va "," vamos "," vais "," van "," vaya "," gueno "," ha "," tener "," tengo "," tiene "," tenemos "," teneis "," tienen "," el "," la "," lo "," las "," los "," su "," aqui "," mio "," tuyo "," ellos "," ellas "," nos "," nosotros "," vosotros "," vosotras "," si "," dentro "," solo "," solamente "," saber "," sabes "," sabe "," sabemos "," sabeis "," saben "," ultimo "," largo "," bastante "," haces "," muchos "," aquellos "," aquellas "," sus "," entonces "," tiempo "," verdad "," VERDADERO "," verdadera "," ciertos "," cierta "," ciertas "," intentar "," intento "," intenta "," intentas "," intentamos "," intentais "," intentan "," dos "," bajo "," arriba "," encima "," usar "," uso "," usas "," usa "," usamos "," usais "," usan "," emplear "," empleo "," empleas "," emplean "," ampleamos "," empleais "," valor "," muy "," era "," eras "," eramos "," eran "," modo "," bien "," cual "," mientras "," con "," entre "," sin "," trabajo "," trabajar "," trabajas "," trabaja "," trabajamos "," trabajais "," trabajan "," podria "," podrias "," podriamos "," podrian "," podriais "," yo "," aquel ","textoBusqueda="," de ", " a "," ante ", " bajo ", " cabe ", " con ");
		
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
			//palabra = palabra.toLowerCase();
			for(var i=0;i<stopwords.length;i++)	palabra = palabra.replace(stopwords[i], "");
			palabra.replace("+", "");
			return palabra;
	} 
	
	
	
	$(document).ready(function(){
	
		// En primer lugar mantenemos escondido el div que contendrá la respuesta.
        $('#respuesta').hide();
		
		// Asignamos al botón con la id tuto-ajax-form
        $('#buscador').submit(function(evento){
            $('#respuesta').hide();         
            evento.preventDefault();
			
			// Recogemos los datos escritos en el formulario y los almacenamos en la variable
			// datos_formulario
            var datos_formulario = $(this).serialize();
			
			// Eliminamos las palabras stopwords de la búsqueda.
			var datos_buscar = eliminaStopWords(datos_formulario);    
			var datos_buscar2 = datos_buscar.split(" ");
				
			var busqueda = "";
			
			// Generamos la búsqueda específica para ejecutar en Solr desde Ajax.
			for(var i=0;i<datos_buscar2.length-1;i++){
				if(i==0) busqueda = "fichas%3a*" + datos_buscar2[i]+ "*";
				else busqueda = busqueda + "fichas%3a*" + datos_buscar2[i]+ "*+OR+";
			}
			busqueda = busqueda + "fichas%3a*" + datos_buscar2[datos_buscar2.length-1]+ "*";
	
			
			// Creamos un objeto de tipo Ajax de jQuery en el que le indicamos la url
			// que debe ejecutar para poder recibir los datos que necesitamos desde 
			// nuestro servidor de Apache Solr.
			//
			// En este caso, al ser una búsqueda textual, todos los elementos tienen un
			// único campo llamado "fichas". Es aquí donde realizará la búsqueda de lo que
			// escriba el usuario en el recuadro.
            $.ajax({  
                url: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q='+busqueda+'&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl=on&hl.fl=titulo',
                data: datos_formulario,
                type: 'GET',
                dataType: 'json',
                success: function(datos){
                    var resultadosParaMostrar = "<p>Se encontraron "+datos.response.numFound+" resultados</p>";
					
					for(var i=0;i<datos.response.docs.length;i++){
						resultadosParaMostrar += "<div id='obra-"+i+"' class='nuevaObra-"+(i%2)+"'>";
						
							resultadosParaMostrar += "<p class='fichas'> Información de la obra:<br/> " +	datos.response.docs[i].fichas+"</p>";
					
						
						resultadosParaMostrar += "</div>";
						//resultadosParaMostrar += "<p>" + datos.response.docs[i].creador+"</p>";
					}
					$('#resultados').html(resultadosParaMostrar).fadeIn('slow');
					$('#respuesta').html("URL ejecutada: "+'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q='+busqueda+'&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl=on&hl.fl=titulo').fadeIn('slow');
                }
            });
			
             
        });
    });
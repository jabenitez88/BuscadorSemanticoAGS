
	
	
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
			
						
			// Creamos un objeto de tipo Ajax de jQuery en el que le indicamos la url
			// que debe ejecutar para poder recibir los datos que necesitamos desde 
			// nuestro servidor de Apache Solr.
			//
			// En este caso, al ser una búsqueda textual, todos los elementos tienen un
			// único campo llamado "fichas". Es aquí donde realizará la búsqueda de lo que
			// escriba el usuario en el recuadro.
			
			/*
			
				FACETADAS:
				01:'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q=titulo%3A*1950*+or+materia%3A*1950*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json'
				02: 'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q=notas%3A*pergamino*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json'
				03: 'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q=notas%3A*Tinta*+AND+notas%3A*rotulacion*&fq=&start=0&rows=140&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				04: 'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q=creador%3A*Juan*+AND+creador%3A*Baptista*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl=on&hl.fl='
				05: 'http://casa.jabenitez.com/solr/fichasFacetadas/select?indent=on&version=2.2&q=idioma%3A*spa*+&fq=&start=0&rows=7145&fl=*%2Cscore&wt=json'
				06: 'http://casa.jabenitez.com/solr/fichasFacetadas/select/?q=tematica%3A*Ballenas*+OR+tematica%3A*ballenas*&version=2.2&start=0&rows=10&indent=on&wt=json&fl=*%2Cscore'
				07: 'http://casa.jabenitez.com/solr/fichasFacetadas/select/?q=%20notas%3A*varas*&version=2.2&start=0&rows=470&indent=on&wt=json&fl=*%2Cscore'
				08: 'http://casa.jabenitez.com/solr/fichasFacetadas/select/?q=materia%3A*Ceuta*&version=2.2&start=0&rows=260&indent=on&wt=json&fl=*%2Cscore'
				09: 'http://casa.jabenitez.com/solr/fichasFacetadas/select/?q=titulo%3A*cartogr*fico*&version=2.2&start=0&rows=5500&indent=on&wt=json&fl=*%2Cscore'
				
			SIN FACETAR:
				01:'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*1950*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl=on&hl.fl=fichas'
				02: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*pergamino*&fq=&start=0&rows=30&fl=*%2Cscore&wt=json&explainOther=&hl=on&hl.fl=fichas'
				03: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*Tinta*+AND+fichas%3A*rotulacion*&fq=&start=0&rows=140&fl=*%2Cscore&wt=json&explainOther=&hl=on&hl.fl=fichas'
				04: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*Juan*+AND+fichas%3A*Baptista*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				05: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*spa*&fq=&start=0&rows=7200&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				06: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*Ballenas*+OR+fichas%3A*ballenas*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				07: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*varas*&fq=&start=0&rows=1700&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				08: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*ceuta*&fq=&start=0&rows=10&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				09: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*cartogr*fico*&fq=&start=0&rows=5500&fl=*%2Cscore&wt=json&explainOther=&hl.fl='
				
			*/
			
            $.ajax({  
                url: 'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q=fichas%3A*cartogr*fico*&fq=&start=0&rows=5500&fl=*%2Cscore&wt=json&explainOther=&hl.fl=',
                data: '',
                type: 'POST',
                dataType: 'json',
                success: function(datos){
                    var resultadosParaMostrar = "<p>Se encontraron "+datos.response.numFound+" resultados</p><p>QREL.TXT<br />QUERY_ID    ITER   DOCNO    RD</p>";
					
					for(var i=0;i<datos.response.docs.length;i++){
						//resultadosParaMostrar += "001 0 "+datos.response.docs[i].id+" 1<br />";
						resultadosParaMostrar += "009 0 "+datos.response.docs[i].fichas.substring(20,35)+" 1<br />";
						
					}
					resultadosParaMostrar += "<br/><br/><hr><br/><br/>DATA.DAT <br/>QUERY_ID    ITER   DOCNO  RANK  SCORE  RUN_ID<br/>";
					for(var i=0;i<datos.response.docs.length;i++){
						//resultadosParaMostrar += "001 Q0 "+datos.response.docs[i].id+" "+i+" "+datos.response.docs[i].score+" 0<br />";
						
						resultadosParaMostrar += "009 Q0 "+datos.response.docs[i].fichas.substring(20,35)+" "+i+" "+datos.response.docs[i].score+" 0<br />";
					}
					$('#resultados').html(resultadosParaMostrar).fadeIn('slow');
					$('#respuesta').html("URL ejecutada: "+'http://casa.jabenitez.com/solr/fichas/select?indent=on&version=2.2&q='+datos_formulario+'&fq=&start=0&rows=7500&fl=id%2Cscore&wt=json&explainOther=&hl=on&hl.fl=titulo').fadeIn('slow');
                }
            });
			
             
        });
    });
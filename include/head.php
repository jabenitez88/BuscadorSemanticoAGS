
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Buscador textual y ontológico de mapas, planos y dibujos del AGS</title>
    <!--[if IE]>
      <script src="js/html5.js">
      </script>
    <![endif]-->
    <link rel="stylesheet" href="css/estilo.css" media="screen" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <?php if($modo == 0){ ?>
	<script type="text/javascript" src="js/buscador.js"></script>
    <?php }else if($modo == 1){ ?>
    <script type="text/javascript" src="js/buscadorTextual.js"></script>
    <?php }else if($modo == 2){ ?>
    <script type="text/javascript" src="js/buscadorSimple.js"></script>
    <?php } ?>
    
    <script type="text/javascript">
	$(document).ready(function() {
    // if text input field value is not empty show the "X" button
    $("#textoBusqueda").keyup(function() {
        $("#x").fadeIn();
        if ($.trim($("#textoBusqueda").val()) == "") {
            $("#x").fadeOut();
        }
    });
    // on click of "X", delete input field value and hide "X"
    $("#x").click(function() {
        $("#textoBusqueda").val("");
        $(this).hide();
    });
}); 
	</script>
    
    
  </head>



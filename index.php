<!DOCTYPE html>
<html lang="es">
<?php 

	$modo = $_GET["modo"];
	if($modo == NULL) $modo = 0;
	if($modo == '') $modo = 0;
	
?>
<?php include_once("include/head.php");?>
<?php 
	
	$textoBuscador = array("SEMÁNTICO","TEXTUAL","SIMPLE");

?>

<body>

<div class="item100">
	<nav id="selectorBuscador">
    	<ul>
        	<li><a href="index.php?modo=0" <?php if($modo==0) echo "class='activo'";?>>BUSCADOR SEMÁNTICO</a></li>
            <li><a href="index.php?modo=1" <?php if($modo==1) echo "class='activo'";?>>BUSCADOR TEXTUAL</a></li>
            <li><a href="index.php?modo=2" <?php if($modo==2) echo "class='activo'";?>>BUSCADOR SIMPLE</a></li>
        </ul>
    </nav>
</div>

<div class="item100">

    <section id="contenedor-formulario">
    <h1>TIPO DE BUSCADOR ACTIVADO: BUSCADOR <?php echo $textoBuscador[$modo];?></h1>
        <form id="buscador" accept-charset="UTF-8">
            <input type="text" id="textoBusqueda" name="textoBusqueda" placeholder="Búsqueda" />
            
            <button type="submit" id="submit">Buscar</button>
        </form>
        <section id="respuesta"></section>
    </section>

</div>
<div class="item100">

    <section id="resultados"> 
     
    </section>
</div>

</body>

</html>

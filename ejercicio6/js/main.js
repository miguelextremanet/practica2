
function cambiar(panel,clase_actual,texto_link){
	localStorage.setItem("panel_"+panel,clase_actual) ;
	document.getElementById('panel_'+panel).className = clase_actual;
	document.getElementById('link_'+panel).innerHTML = texto_link + ' ' + panel;
}
function mostrar_ocultar(panel){
	if  (localStorage.getItem("panel_"+panel) === "parrafos hidden"){
		cambiar(panel,"parrafos visible","Ocultar contenidos");
	}else{
		cambiar(panel,"parrafos hidden","Mostrar contenido");		
	}

}
//se borran las variables cuando se entra para inicializar
localStorage.clear();
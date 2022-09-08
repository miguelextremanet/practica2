var Socialistas=0;
var Liberales=0;
var Animalistas=0;
var Centristas=0;
var Ecologistas=0;
var myChart;
var partidos =['Socialistas','Liberales','Animalistas','Centristas','Ecologistas'];
var colores=['red','blue','yellow','pink','green']
var votos = [0,0,0,0,0];
function reset(){
	for (i=0;i<5;i++){
		votos[i] = 0;
	}
	 pintar();
}
function vote(que_partido){
	votos[que_partido]+=1;
	pintar();
}
var opciones = {
	responsive: true,
	plugins: {
		legend: {
		  position: 'top',
		},
		title: {
		  display: true,
		  text: 'Reparto de Votos por partidos'
		}
	  }
    
  };

  var datos = {
    labels: partidos,
    datasets: [
      {        
        data: votos,
        backgroundColor:colores,
        borderColor:colores
      }
    ]
  };


const config = {
	type: 'pie',
	data: datos,
	options: opciones
};
function pintar(){
	if (myChart) {
        myChart.destroy();
    }	
	 myChart = new Chart(
		document.getElementById('myChart'),
		config
	);
	

}




pintar();
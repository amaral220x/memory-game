function gerarBaralho1(){
    var baralho = [];
	for(var i=0; i<8; i++){
        var j = i + 1;
        baralho[i] = "..\\cards\\stage1\\card" + j + ".png";
        baralho[15-i] ="..\\cards\\stage1\\card" + j + ".png" ;
	}
	console.log(baralho);
	embaralha(baralho);
	console.log(baralho);

	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
    var img5 = document.getElementById("img5");
    var img6 = document.getElementById("img6");
    var img7 = document.getElementById("img7");
    var img8 = document.getElementById("img8");
    var img9 = document.getElementById("img9");
    var img10 = document.getElementById("img10");
    var img11 = document.getElementById("img11");
    var img12 = document.getElementById("img12");
    var img13 = document.getElementById("img13");
    var img14 = document.getElementById("img14");
    var img15 = document.getElementById("img15");
    var img16 = document.getElementById("img16");

    

	img1.setAttribute("src", baralho[0]);
	img2.setAttribute("src", baralho[1]);
	img3.setAttribute("src", baralho[2]);
	img4.setAttribute("src", baralho[3]);
    img5.setAttribute("src", baralho[4]);
    img6.setAttribute("src", baralho[5]);
    img7.setAttribute("src", baralho[6]);
    img8.setAttribute("src", baralho[7]);
    img9.setAttribute("src", baralho[8]);
    img10.setAttribute("src", baralho[9]);
    img11.setAttribute("src", baralho[10]);
    img12.setAttribute("src", baralho[11]);
    img13.setAttribute("src", baralho[12]);
    img14.setAttribute("src", baralho[13]);
    img15.setAttribute("src", baralho[14]);
    img16.setAttribute("src", baralho[15]);

    

}

function gerarBaralho2(){


}

function gerarBaralho3(){


}

function aleatorioInt(min, max){
		return min+(~~(Math.random()*(max-min)));
}

function embaralha(a){
	for(var i=0; i<a.length; i++){
		var indice = aleatorioInt(0,a.length);
		var aux = a[i];
		a[i] = a[indice];
		a[indice] = aux;
	}
}

function gerarBaralho1() {
    addDivs()
    addImgs();
}

function gerarBaralho2() {


}

function gerarBaralho3() {


}

function aleatorioInt(min, max) {
    return min + (~~(Math.random() * (max - min)));
}

function embaralha(a) {
    for (var i = 0; i < a.length; i++) {
        var indice = aleatorioInt(0, a.length);
        var aux = a[i];
        a[i] = a[indice];
        a[indice] = aux;
    }
}

//vveslunho

function addDivs() {
    let divBox = document.getElementById("box")
    console.log(divBox)
    let qntd = 16
    for (let indexI = 0; indexI < qntd; indexI++) {
        let divAdd = document.createElement('div')
        divAdd.className = 'card';
        let divUm = document.createElement('div')
        let divDois = document.createElement('div')
        divUm.className = 'front'
        divDois.className = 'back'  
        divBox.appendChild(divAdd)
        divAdd.appendChild(divDois)
        divAdd.appendChild(divUm)
        console.log('add divs')

    }
}

function addImgs(){
    
    let newImg = document.createElement('img');
    let qntd = 16;

    var baralho = [];
    for (var i = 0; i < 8; i++) {
        var j = i + 1;
        baralho[i] = "..\\cards\\stage1\\card" + j + ".png";
        baralho[15 - i] = "..\\cards\\stage1\\card" + j + ".png";
    }
    console.log(baralho);
    embaralha(baralho);
    console.log(baralho);

    for (let indexI = 0; indexI < qntd; indexI++) {
        let imgAdd = document.createElement('img');
        let backDiv = document.getElementsByClassName('back');
        imgAdd.setAttribute('src',baralho[indexI]);
        backDiv[indexI].appendChild(imgAdd);
    }
}
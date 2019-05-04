function game() {
    addDivs();
    addImagesAndEvents();
}

function aleatorioInt(min, max) {
    return min + (~~(Math.random() * (max - min)));
}

function mix(a) {
    // mix the deck
    for (var i = 0; i < a.length; i++) {
        var indice = aleatorioInt(0, a.length);
        var aux = a[i];
        a[i] = a[indice];
        a[indice] = aux;
    }
}

//vveslunho

function addDivs() {
    let classBox = document.getElementsByClassName("box")
    let qnt = 12
    for (let indexI = 0; indexI < qnt; indexI++) {//this loop create automatically all divs and class of the stage, with DOM
        let divAdd = document.createElement('div')
        divAdd.className = 'card';
        let divUm = document.createElement('div')
        let divDois = document.createElement('div')
        divUm.className = 'front'
        divDois.className = 'back'  
        classBox[0].appendChild(divAdd)
        divAdd.appendChild(divUm)
        divAdd.appendChild(divDois)
    }
}

//end of vveslinho's help thx bro

let flipped = false; //if the card flip
let fCard, sCard; // firstcard and secundcard
let block = false; //block cardflip

function cardFlip(){
    if(block) return;
    if(this === fCard) return;
    this.classList.add('flip');
    if(!flipped){
        //first card
        flipped = true;
        fCard = this;
    }
    else{
        //secund card
        sCard = this; 
        testCards();
    }
}

function testCards(){
    if(fCard.id === sCard.id){
        //the cards are equals 
        removeEvent();
    }  
    else{
        //the cards are different 
        restaureCards();
    }
}

function restaureCards(){
    //turn back to the back face
    block = true;
    setTimeout(() =>{
        fCard.classList.remove('flip');
        sCard.classList.remove('flip');
        resetCards();
    }, 1500);   
}

function resetCards(){
    //reset all conditions to work
    flipped = false;
    block = false;
    fCard = null;
    sCard = null;
}

function removeEvent(){
    //the card equals dont flip never again
    fCard.removeEventListener('click',cardFlip);
    sCard.removeEventListener('click', cardFlip);
    resetCards();
    console.log('ponto');
}


function addImagesAndEvents(){   
    
    let qnt = 12;//quantity of cards. quantity = pairs * 2
    var deck = [];//deck array

    for (var i = 0; i < 8; i++) {// the deck array will be fill with the source of all images 
        var j = i + 1;
        deck[i] = "..\\cards\\stage1\\card" + j + ".svg";
        deck[11 - i] = "..\\cards\\stage1\\card" + j + ".svg";
    }
    mix(deck);

    for (let indexI = 0; indexI < qnt; indexI++) {//this loop assign automatically all the imgs, with DOM
        let imgAdd = document.createElement('img');
        let imgFront = document.createElement('img');
        let frontDiv = document.getElementsByClassName('front') ;
        let backDiv = document.getElementsByClassName('back');
        imgAdd.setAttribute('src',deck[indexI]);
        imgFront.setAttribute('src', "..\\cards\\stage1\\frontcard.svg");
        frontDiv[indexI].appendChild(imgFront);
        backDiv[indexI].appendChild(imgAdd);
    }
    var classCard = document.querySelectorAll('.card');
    classCard.forEach(card => card.addEventListener('click',cardFlip));// this loop add a event click in all cards

    for(let i = 0; i < 12; i++){//this loop add the atribute id for a possible comparation,with Dom 
        classCard[i].setAttribute('id', deck[i]);
    }
}
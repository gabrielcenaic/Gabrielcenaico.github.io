let tela;

let ctx;

let proxX=0;

let proxY=0;

let tamanhoCobraPadrao = 3;

let tamanhoCobra = tamanhoCobraPadrao;

let caminhoCobra = [];

let cobraX = cobraY = 10;

let comidaX = comidaY = 15;

let tamanhoQuadradinho = tamanhoCaminho = 20;

let tamanhoTela = tamanhoCaminho;

window.onload = function() {
    tela = document.getElementById("canvas");

    ctx = tela.getContext("2d");

    let vel = 8;

    document.addEventListener("keydown", keyDownEvent);

    setInterval(desenharJogo, 1000 / vel);

};

function keyDownEvent(tecla) {
    if (tecla.keyCode == 37) {
        proxX = -1;
        proxY = 0;
    }
    if (tecla.keyCode == 38) {
        proxX = 0;
        proxY = -1;
    }
    if (tecla.keyCode == 39) {
        proxX = 1;
        proxY = 0;
    }
    if (tecla.keyCode == 40) {
        proxX = 0;
        proxY = 1;
    }
}

function desenharJogo() {

    cobraX = cobraX+proxX;
    cobraY = cobraY+proxY;

    if (cobraX<0) {
        cobraX = tamanhoTela-1;
    }
    if(cobraY<0){
        cobraY = tamanhoTela-1;
    }
    if (cobraX>tamanhoTela-1) {
     cobraX=0;   
    } 
     if (cobraY>tamanhoTela-1) {
        cobraY=0;   
       }
       if (cobraX==comidaX&&cobraY==comidaY) {
        tamanhoCobra++;
        comidaX=Math.floor(Math.random()*tamanhoTela);   
        comidaY=Math.floor(Math.random()*tamanhoTela);   
       }

    ctx.fillStyle = "#d1e0de";

    ctx.fillRect(0 , 0, tela.width, tela.height);

    ctx.fillStyle = "#28abd7";

    for(let i = 0; i<caminhoCobra.length;i++){
        ctx.fillRect(
            caminhoCobra[i].x*tamanhoCaminho,
            caminhoCobra[i].y*tamanhoCaminho,
            tamanhoCaminho,
            tamanhoCaminho
        );
        if(caminhoCobra[i].x==cobraX && caminhoCobra[i].y == cobraY){
            tamanhoCobra = tamanhoCobraPadrao;
        }
    }
    
    ctx.fillStyle="#000000";
    ctx.fillRect(
        comidaX*tamanhoCaminho,
        comidaY*tamanhoCaminho,
        tamanhoCaminho,
        tamanhoCaminho
    )
    caminhoCobra.push({
        x:cobraX,
        y:cobraY
    });
    
    while(caminhoCobra.length>tamanhoCobra){
        caminhoCobra.shift();
    }
}
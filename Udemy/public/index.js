$(document).ready(function(){
    
    $('#staticBackdrop').modal('show');


    $('#button-start-game').click(function(){
        capturaDadosplayers();

    });
});

function capturaDadosplayers(){	

    var firstPlayer = $('input[name="input-p1"]').val();

    var secondPlayer = $('input[name="input-p2"]').val();

    var startGame = true;

    if(firstPlayer == ''){
        alert("Preencha o Campo com o nome do primeiro jogador");
        startGame = false;
    } 

    if(secondPlayer == ''){
        alert("Preencha o Campo com o nome do segundo jogador");
        startGame = false;
    }

    if(startGame == true){
        $('#staticBackdrop').modal('hide');
        preenchernomejogadores();
        $('#game').show('slow');
    }
}

function preenchernomejogadores(){

    var firstPlayer = $('input[name="input-p1"]').val();

    var secondPlayer = $('input[name="input-p2"]').val();

    $('#span-p1').html(firstPlayer);

    $('#span-p2').html(secondPlayer);

}


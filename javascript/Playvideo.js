document.addEventListener('DOMContentLoanded', function(){
    var video=document.getElementsById('myVideo');

    //*Defian o tempo específico (em Segundos)
    var startTime= 10; /**Por exemplo, iniciar no 10s */

    //*Garanta que o vídeo comece do tempo especifico*//
    video.addEventListener('loadedmetada', function() {

    });
    
    //*Opcional:inicar o vídeo automaticamente*//
    video.play();
    
    
});
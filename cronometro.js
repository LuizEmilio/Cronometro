window.onload = function(){
    let segundos = 0;
    let milisegundos = 0;

    let seg  = document.querySelector('#seg')
    let mseg = document.querySelector('#mseg')
    let btnI = document.querySelector('#inicio')
    let btnP = document.querySelector('#para')
    let btnZ = document.querySelector('#zerar')
    let intervalo 

    btnI.onclick = function () { 
        clearInterval(intervalo)
        intervalo = setInterval(iContagem,10)
    }
    btnP.onclick = function () {
        clearInterval(intervalo)
    }
    btnZ.onclick = function () {  /*zerar todos os elementos*/
        clearInterval(intervalo)
        milisegundos="00"  /*zerar variavel*/
        milisegundos="00"
        seg.innerHTML = milisegundos    /*escrever na tela no local dos milisegundos*/
        mseg.innerHTML = milisegundos /*escreve na tela no local dos segundos*/
    }

    function iContagem() {
        milisegundos++

        if(milisegundos<=9)
        mseg.innerHTML = "0"+milisegundos;

        if(milisegundos>9){
        mseg.innerHTML = milisegundos
        }

        if(milisegundos >99){
            segundos++
            milisegundos = 0
            seg.innerHTML = "0" +segundos
            mseg.innerHTML = "0" + milisegundos;
    }
    if(segundos>9){
        seg.innerHTML = segundos
    }
    }
}
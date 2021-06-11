function tempo() {
    var clock = new Date();

    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();



    document.getElementById('clock').innerHTML = 
        hours + " : " + minutes + " : " + seconds;

    var t = setTimeout(tempo,500);

}
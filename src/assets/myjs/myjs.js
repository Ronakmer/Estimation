function changeBgWhite() {
    document.getElementById("btn_U").style.backgroundColor = '#503dc2';
    document.getElementById("btn_U").style.color = 'white';
    document.getElementById("btn_I").style.backgroundColor = 'white';
    document.getElementById("btn_I").style.color = '#503dc2';
    $("#rup").val("1");
}

function changeBgBlue() {
    document.getElementById("btn_U").style.backgroundColor = 'white';
    document.getElementById("btn_U").style.color = '#503dc2';
    document.getElementById("btn_I").style.backgroundColor = '#503dc2';
    document.getElementById("btn_I").style.color = 'white';
    $("#rup").val("2");
}

function changeHour() {
    document.getElementById("btn_M").style.backgroundColor = 'white';
    document.getElementById("btn_M").style.color = '#503dc2';


    document.getElementById("btn_H").style.backgroundColor = '#503dc2';
    document.getElementById("btn_H").style.color = 'white';
    $("#hourly").val("1");
}

function changeMonth() {
    document.getElementById("btn_H").style.backgroundColor = 'white';
    document.getElementById("btn_H").style.color = '#503dc2';
    document.getElementById("btn_M").style.backgroundColor = '#503dc2';
    document.getElementById("btn_M").style.color = 'white';
    $("#hourly").val("2");

}

 




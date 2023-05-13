let output = document.getElementsByTagName('p')[0];

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multi = document.getElementById('multi');
let divison = document.getElementById('divison');
let equal = document.getElementById('equal');

let fnum=''
let sign = true
function concat(num) {
    if (sign) {
        fnum = fnum + num
        output.innerText = fnum;
    }else{
        fnum = fnum + num
        output.innerText = '-' +fnum;

    }
}
function empty(){
    fnum=''
    output.innerText = '0';
}
function plusMin(){
    if (sign) {
        output.innerText = '-' + fnum;
        sign = false
    }else{
        output.innerText = fnum;
        sign = true
    }
}
function percent() {
    fnum = fnum / 100;
    output.innerText = fnum;
    
}
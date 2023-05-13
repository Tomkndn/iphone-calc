let output = document.getElementsByTagName('p')[0];

let ac = document.getElementById('ac');
let divison = document.getElementById('divison');

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
        output.innerText = '0';
        fnum = ''
        sign = true
    }
}
function percent() {
    fnum = fnum / 100;
    output.innerText = fnum;
    
}
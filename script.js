let output = document.getElementsByTagName('p')[0];

let equal = document.getElementById('equal');

let fnum=''
let sign = true
let result = 0
let rnum
function concat(num) {
    // rnum = parseInt(num)
    fnum = fnum + num
    output.innerText = fnum;
}
function expression(oper,final) {
    if (oper.includes('+')) {
        result = parseInt(final[0]) + result + parseInt(final[1]);
    }else if (oper.includes('-')) {
        result = parseInt(final[0]) - parseInt(final[1]) - result;
        plusMin()
    }else if (oper.includes('x')){
        if (!result) {
            result = parseInt(final[0]) * parseInt(final[1]) * 1;
        }else{
            result = parseInt(final[0]) * parseInt(final[1]) * result;
        }
    }else if (oper.includes('/')) {
        if (!result) {
            result = (parseInt(final[0]) / parseInt(final[1])) / 1;
        }else{
            result = (parseInt(final[0]) / parseInt(final[1])) / result;
        }
    }
    // fnum = fnum + oper
    // output.innerText = fnum;
    // operator = oper
}
function empty(){
    fnum=''
    output.innerText = '0';
    result=0
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
equal.addEventListener('click',()=>{

    let final = fnum.split(/[+-/x]/)
    expression(fnum,final)
    fnum = result
    result=0
    output.innerText = fnum;
    console.log(fnum)
})
function clr() {
    let len = fnum.length;
    fnum = fnum.slice(0,len-1)
    output.innerText = fnum;

}
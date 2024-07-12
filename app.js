const display = document.getElementById('display');

function appendToDispaly(input){
display.value += input;
}

function claerDispaly(){
display.value = '';
}

function calculate(){
try{
    display.value = eval(display.value);
}
catch(eror){
    display.value = 'Eror';

}
}
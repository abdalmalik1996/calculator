let screen = document.getElementById("scren");
var prevNum=0;
var operType = "";
var values ={prev:null,new:null};
var number ={num1:null,num2:null};
var one =[];
function getNumbers(num){
    document.getElementById("scren").value+=num;
}


function Clear() {
    document.getElementById("scren").value="";
    console.log("claer");
    values.prev=null;
    values.new =null;
}
function getOperators(oper){
    operType = oper;
    values.prev = document.getElementById("scren").value;
    console.log(values);
    document.getElementById("scren").value ="";
}
function calulait(){
    values.new = document.getElementById("scren").value ;
    document.getElementById("scren").value ="";
if (!values.new){
    return;
}if (values.new && values.prev && operType) {

    if (operType === '+') {
        var newvalue = Number(values.prev) + Number(values.new);
        document.getElementById("scren").value = values.prev + " + " + values.new + " = " + newvalue ;
        values.prev = newvalue ;
    }; 
    if (operType === '-') {
        var newvalue = values.prev - values.new;
        document.getElementById("scren").value = values.prev + " - " + values.new + " = " + newvalue ;
        values.prev = newvalue ;
};
if (operType === '×' ) {
    var newvalue= values.new * values.prev;
    document.getElementById("scren").value = values.prev + " × " + values.new + " = " + newvalue ;
        values.prev = newvalue ;
};
if (operType === '÷') {
    var newvalue= values.prev / values.new;
    document.getElementById("scren").value = values.prev + " ÷ " + values.new + " = " + newvalue ;
    values.prev = newvalue ;
};
}
console.log(operType);
}

function clearOne(){
    document.getElementById("scren").value = document.getElementById("scren").value.slice(0,-1);
}

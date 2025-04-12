let symbol, results = null;
function input(value) {
    var output = document.getElementById("output");   
    output.value+=value;
}
function calcualte(){
    var output = document.getElementById("output");   
    try{
        output.value = eval(output.value); // Evaluate the expression
    }
    catch(e){
        output.val="Error"
    }
}
function Clear(){
    var output = document.getElementById("output");   
    output.value = ""; 
    
}

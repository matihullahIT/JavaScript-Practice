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

// // let symbol, results = null;

// function input(value) {
//     var output = document.getElementById("output");
//     output.value += value; // Append the button value to the output
// }
// function clear(){
    
// }
// function calculate() {
//     var output = document.getElementById("output");
//     try {
//         output.value = eval(output.value); // Evaluate the expression
//     } catch (e) {
//         output.value = "Error"; // Handle invalid expressions
//     }
// }

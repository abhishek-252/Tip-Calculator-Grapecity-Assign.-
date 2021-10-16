// defining variables and extracting values from their respective htmlo elements
var bill = document.getElementById("bill"); 
var tip_percent = document.getElementById("range1");
var noofPeople = document.getElementById("range2"); 
var submit = document.getElementById("submit");
var variable = document.getElementById("variable");
var variable_ppl = document.getElementById("variable_ppl");
var tipPerPerson ;
var totalPerPerson ;

//assigning the text values (displayed by label) of slider
tip_percent.addEventListener('input', function(e) {
    variable.textContent = tip_percent.value;
});


noofPeople.addEventListener('input', function(e) {
    variable_ppl.textContent = noofPeople.value;
});

//function to manage counter 
tip_percent.stepUp();
noofPeople.stepUp();

//function to do calculations based on values entered by user
function myFunction() {
    
    try{
        // validating our inputs
        if(noofPeople.value == 0 ||  bill.value<=0 || !(bill.value.match(/^(?!0\d)\d*(\.\d+)?$/))){ 
            throw new Error("Error");   
        }
            tipPerPerson = ((tip_percent.value)/100 * bill.value)/noofPeople.value;
            totalPerPerson = (bill.value/noofPeople.value) + tipPerPerson ;
            tip.textContent = '$'+(tipPerPerson.toFixed(2)).toString();
            total.textContent = '$'+ (totalPerPerson.toFixed(2)).toString();
        
    }catch(e){
        window.alert('Bill amount or number of people is incorrect');
    }
   

}
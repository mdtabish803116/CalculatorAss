
var divElements = document.querySelectorAll("#container #calBtns > div");

var inputCal = document.getElementById("inputCal");

 // console.log(divElements);
    var totalVal = "";

 divElements.forEach(function(ele , index){
        // ele.setAttribute("id" , `div${index + 1}`);
         ele.addEventListener("click" , function(e){
             addBtnText(e)
         })
 })

 function addBtnText(e){

    var buttonText = e.target.innerText;

    if(buttonText == "X"){
        buttonText = "*";

    
        try{  

        totalVal = eval(totalVal);
         totalVal += buttonText;
         inputCal.value = totalVal;
        }catch{
            inputCal.value = totalVal;
 
        }
 

    }else if(buttonText == "C"){
         totalVal = "";
        inputCal.value = totalVal;
    }else if (buttonText == "="){

       
 
    if(totalVal[totalVal.length-1] == "+" || totalVal[totalVal.length-1] == "-" || totalVal[totalVal.length-1] == "/" || totalVal[totalVal.length-1] == "*"){ 
        totalVal = totalVal.slice(0 , -1); 
     }
        totalVal = eval(totalVal)
       // totalVal = totalVal.slice(0 , -1); // for deleting from last one by one for testing purpose;
        inputCal.value = totalVal;


    }else if(buttonText == "+" || buttonText == "-" || buttonText == "/") {
       try{  
           totalVal = eval(totalVal);
        totalVal += buttonText;
        inputCal.value = totalVal;
       }catch{
           inputCal.value = totalVal;

       }

     }else {  
        totalVal += buttonText;
        inputCal.value = totalVal;

     }
        
    }
  

   

 
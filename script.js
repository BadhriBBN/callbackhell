

function ten(callback){
    tick("10");
    setTimeout(callback,1000);

}
function nine(callback){
    tick("9");
    setTimeout(callback,1000);
   }
   function eigth(callback){
    tick("8");
    setTimeout(callback,1000);
   }
   function seven(callback){
    tick("7");
    setTimeout(callback,1000);
   }
   function six(callback){
    tick("6");
    setTimeout(callback,1000);
   }
   function five(callback){
    tick("5");
    setTimeout(callback,1000);
   }
   function forth(callback){
    tick("4");
    setTimeout(callback,1000);
   }
   function third(callback){
    tick("3");
    setTimeout(callback,1000);
   }
   function two(callback){
    tick("2");
    setTimeout(callback,1000);
   }
   function one(callback){
    tick("1");
    setTimeout(callback,1000);
   }
   function zero(callback){
    tick("Happy Independence Day");
    setTimeout(callback,1000);
   }

   function tick (value){
    const messageElement=document.getElementById("message");
    messageElement.innerText=value;
   } 
   

    ten(()=>{

        nine(()=>{
            eigth(()=>{
                seven(()=>{
                    six(()=>{
                        five(()=>{
                            forth(()=>{
                                third(()=>{
                                    two(()=>{
                                       one(()=>{
                                         zero();
                                       });

                                       
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
   
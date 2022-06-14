

//functions for number operations also soud everything to 1 decimal point//

function add (a,b){
    a = Math.floor(a*10)/10;
    b = Math.floor(b*10)/10;
    return +a + +b;
}

function substract (a,b){
    a = Math.floor(a*10)/10;
    b = Math.floor(b*10)/10;
    return +a - +b;
}

function multiply (a,b){
    a = Math.floor(a*10)/10;
    b = Math.floor(b*10)/10;
    return +a * +b;
}

function divide (a,b){
    a = Math.floor(a*10)/10;
    b = Math.floor(b*10)/10;
    if (b==0){
        return "error";
    }
    return +a/+b;
}

function power (a,b){
    a = Math.floor(a*10)/10;
    b = Math.floor(b*10)/10;
    return a**b;
}

function sqrt (a){
    a = Math.floor(a*10)/10;
    if (a<0) {
        return "error";
    }
    return Math.sqrt(a);
}



//function that takes a string and caculates a result, inputs must have a space between 
//acomplished by giving operation inputs the structure " "operator" " .
//recursive parentesis implementation.

function calculate (expresion) {

    

    let separated = [];
    if (typeof(expresion)== "string"){
        separated = expresion.split(" ");
    } else {
        separated = expresion;
    }
    
    if (separated[0]=="-"&&typeof(separated[1]=="number")){
        separated.shift();
        separated[0]=separated[0]*-1;
        console.log(separated[0]);
    }
    for(let i=1; i<separated.length;i++){
        if  ((separated[i]=="-"&&!(typeof(separated[i-1])=="number"))&&typeof(separated[i+1]=="number")&&(separated[i+1]!="+")){
            console.log(separated);
            console.log(i);
            separated.splice(i,1);
            console.log(separated);
            separated[i]=separated[i]*-1;
            console.log(separated[i]);
            console.log(separated);
        }
    }

    let counter = 0;
    let check = 0;
    for(let i=0; i<separated.length;i++){
        if (separated[i]=="("){
            let init = i;
            check = 1;
            for(let j = i; j<separated.length;j++){
                if (separated[j]=="("){
                    counter++;
                }
                if (separated[j]==")" && counter > 0){
                    counter--;
                }
                if (separated[j]==")" && counter == 0){
                    let fin = j-init;
                    const temp = separated;
                    const toCalc = separated.splice(init,fin);
                    toCalc.shift();
                    temp.splice(init,1,calculate(toCalc));
                    temp[init]=temp[init][0]
                    separated  = temp;
                    break;
                    
                }
            }
        }
    }

    for (let i = 0 ; i<separated.length;i++){
        if (separated[i]=="("){
            check = 1;
        }
        else{
            check = 0 ;
        }
    }
    
    

    if (!check){
        for(let i=0; i<separated.length;i++){
            if (separated[i]=="s"){
                separated.splice(i,2, sqrt(separated[i+1]));
            }
        }
        for(let i=0; i<separated.length;i++){
            if (separated[i]=="^"){
                separated.splice(i-1,3, power(separated[i-1],separated[i+1]));
            }
        }
        for(let i=0; i<separated.length;i++){
            if (separated[i]=="x"){
                separated.splice(i-1,3, multiply(separated[i-1],separated[i+1]));
            }
        }
        for(let i=0; i<separated.length;i++){
            if (separated[i]=="/"){
                separated.splice(i-1,3, divide(separated[i-1],separated[i+1]));
            }
        }
        for(let i=0; i<separated.length;i++){
            if (separated[i]=="+"){
                separated.splice(i-1,3, add(separated[i-1],separated[i+1]));
            }
        }
        for(let i=0; i<separated.length;i++){
            if (separated[i]=="-"){
                separated.splice(i-1,3, substract(separated[i-1],separated[i+1]));
            }
        }
        
    }
    console.log(separated);
    return separated;
    
}

console.log(calculate("- 10 x ( - 10 + - 5 - 1 ) / s ( 4 ^ 2 )"));






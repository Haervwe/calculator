

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
    let counter = 0;
    let check = 0;
    loop:for(let i=0; i<separated.length;i++){
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
                    console.log(toCalc);
                    console.log(temp);
                    temp.splice(init,1,calculate(toCalc));
                    console.log(temp[init]);
                    temp[init]=temp[init][0]
                    console.log(temp);
                    separated  = temp;
                    break;
                    
                }
            }
        }
    }

    for (let i = 0 ; i<separated.length;i++){
        if (separated[i]=="("){
            check = 1;
            console.log(check);
        }
        else{
            check = 0 ;
        }
    }
    
    if (!check){
        console.log(separated);
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
    return separated;
}

console.log(calculate("10 x ( 10 + 5 ) / s ( 4 ^ 2 )"));






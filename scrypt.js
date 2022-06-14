

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



//function that takes a string and caculates a result, inputs must have a space between//

function calculate (expresion) {
    let result = 0;
    const separated = expresion.split(" ");
    
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
        console.log(separated[i]);
        if (separated[i]=="+"){
            separated.splice(i-1,3, add(separated[i-1],separated[i+1]));
        }
    }
    return separated;
}

console.log(calculate("10 x 10 + 5 / s 4 ^ 2 "));





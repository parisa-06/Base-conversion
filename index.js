var base =parseFloat(prompt("Enter your base : "));
var power =parseFloat(prompt("Enter your power : "));
var q, r;

var numberMabna = powers(power,base)
console.log("is numberMabna ",numberMabna )


for(var count=numberMabna; count > 0; count-- ){
var quotient = count;
var test= BaseConversion( quotient)
console.log("is count : " , count ," " ,"is test: " ,test);
}

function powers (power , base){
    var result=1;
 for(var i =1; i<= power; i++){
     result = base * result;
    }
return result;
}
// following az (b*q + r) = a

function BaseConversion(quotient){
    var residue = new Array() ;
    var j = 0;
 while(quotient != 0){
     var a =quotient;
     var defaulte =0, b=0;

    for(q=0; q <= a/2 ; q++){

       for(r=0; r <base ;r++){
         if ((b + r) == a){
             residue[j] = r;
             j++;
             defaulte = 1;
             break;
            }
        }
      if(defaulte == 1){
         quotient=q;
         break;
          }

          b += base;
        }
}
var k=0;

for(var i =j-1; i> 0; i--){
    var temp =  residue[k]
     residue[k] =residue[i];
     residue[i]=temp
     k++;
    }
return residue;
}
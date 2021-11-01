//#1
var num = 10;
if ((Math.random() * 10) + 1 > 5) {
    console.log('Too High');
} else {
    console.log('Too Low');
}

//#2
var num = 0;
if((Math.random()*8)+1 >10){
 console.log('Good morning');
}else if((Math.random()* 10)+1<10){
  console.log('Good afternoon');
} else{
console.log('Good evening');
}

//#3
function multiplyNumber(numberOne, numberTwo){
console.log("Result: " + (numberOne * numberTwo));
}

multiplyNumber(40, 60);

//#4
function plate(num){
  if (num == 1){
     return "Turkey";
   }
   else if (num == 2){
     return "Stuffing";
   }
   else if (num == 3){
     return "Mashed Potatoes";
   }
   else if (num==4){
     return "Pumpkin Pie";
   }
   else if (num==5){
     return "Cranberry Sauce"
   }
   else {
       return "Do we have enough plates?";
   }
 }

 console.log(plate(1));
 console.log(plate(2));
  console.log(plate(3));
 console.log(plate(4));
 console.log(plate(5));

 //#5



var secondArray = ["Goodmorning", "Good afternon", "Goodnight", "Sleep tight", "Don't let the bed bugs bite"];
var randomIndex = Math.floor( Math.random() * secondArray.length );
 console.log(secondArray[randomIndex]);

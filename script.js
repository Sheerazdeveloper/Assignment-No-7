
// 1 Maximum between two numbers.

function number1() {


    var num11 = + document.getElementById("num11").value
    var num12 = + document.getElementById("num12").value

    if (num11 > num12) {
        result1.innerHTML = "The maximum number is:" + num11
    }
    else {
        result1.innerHTML = "The maximum number is:" + num12
    }
}

//  2  Maximum between three numbers.

function number2() {



    var num21 = + document.getElementById("num21").value
    var num22 = +document.getElementById("num22").value
    var num23 = + document.getElementById("num23").value
    if (num21 > num22 && num21 > num23) {
        result2.innerHTML = "The maximum number is:" + num21
    }
    else if (num22 > num21 && num22 > num23) {
        result2.innerHTML = "The maximum number is:" + num22
    }
    else {
        result2.innerHTML = "The maximum number is:" + num23
    }

}


// 3 check whether a number is negative, positive or zero.
function number3() {


    var a = + document.getElementById("enter3").value;
    if (a > 0) {
        result3.innerHTML = a + ",is positive"
    } else if (a < 0) {
        result3.innerHTML = a + ", is negative"
    }
    else {
        result3.innerHTML = a + ", is Zero"
    }
}

//   4-  check whether a number is divisible by 5 and 11 or not.
function number4() {


    var b = + document.getElementById("enter4").value;
    if (b % 5 == 0 && b % 11 == 0) {
        result4.innerHTML = b + ",is divisible by 5 and 11"
    }
    else {
        result4.innerHTML = b + ", is not divisible by 5 and 11"
    }
}

//  5 check whether a number is even or odd.
function number5() {
    var c = +  document.getElementById("enter5").value;
    if (c % 2 == 0) {
        result5.innerHTML = c + ", is Even"
    }
    else {
        result5.innerHTML = c + ", is Odd"
    }

}


// 6   check whether a year is leap year or not.

function number6() {
    var d = +  document.getElementById("enter6").value;
    if (d % 4 == 0) {
        result6.innerHTML = d + ",is leap";
    }
    else {
        result6.innerHTML = d + ",is not leap";
    }

}

//  7  check whether a character is alphabet or not.

function number7() {
    var character = document.getElementById("enter7").value
    if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
        result7.innerHTML = character + ",is an alphabet"

    } else {
        result7.innerHTML = character + ",is not an alphabet"
    }
}


//    8  input any alphabet and check whether it is vowel or consonant.

function number8() {


    var character8 = document.getElementById("enter8").value
    if (character8 == "a" || character8 == "e" || character8 == "i" || character8 == "o" || character8 == "u" || character8 == "A " || character8 == "E" || character8 == "I" || character8 == "O" || character8 == "U") {
        result8.innerHTML = character8 + ",is Vowel"
    }
    else {
        result8.innerHTML = character8 + ",is not Vowel"
    }
}
//  9    input any character and check whether it is alphabet, digit or special character.

function number9() {


    var character = document.getElementById("character9").value
    if ((character >= "a" || character >= "A") && (character <= "z" || character <= "Z")) {
        result9.innerHTML = character + ",is an Alphabet"
    }
    else if (character >= 0 && character <= 9) {
        result9.innerHTML = character + ",is a Digit"
    }
    else {
        result9.innerHTML = character + ", is a special character"
    }
}

// 10- character is uppercase or lowercase alphabet.
function number10() {
    var character10 = document.getElementById("enter10").value
    if (character10 >= "A" && character10 <= "Z") {
        result10.innerHTML = character10 + ",is an Uppercase alphabet"

    }
    else if (character10 >= "a" && character10 <= "z") {
        result10.innerHTML = character10 + ",is a lowercase alphabet"
    }
    else {
        result10.innerHTML = character10 + ",is not an  alphabet"
    }
}

//   11-input week number and print week day
function number11() {
    var week = + document.getElementById("enter11").value
    if (week == 1) {
        result11.innerHTML = "Monday"

    }
    else if (week == 2) {
        result11.innerHTML = "Tuesday"
    }
    else if (week == 3) {
        result11.innerHTML = "Wednesday"
    }

    else if (week == 4) {
        result11.innerHTML = "Thrusday"
    }

    else if (week == 5) {
        result11.innerHTML = "Friday"
    }

    else if (week == 6) {
        result11.innerHTML = "Saturday"
    }

    else if (week == 7) {
        result11.innerHTML = "Sunday"
    }
    else {
        result11.innerHTML = "Enter 1-7"

    }
}
//   12- input month number and print number of days in that month.
function number12() {
    var x = + document.getElementById("enter12").value
    if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
        result12.innerHTML = "Days of this month =31"
    }
    else if (x == 4 || x == 6 || x == 9 || x == 11) {
        result12.innerHTML = "Days of this month = 30"
    }
    else if (x = 2) {
        result12.innerHTML = "Days of this month = 28 or 29(When year is leap)"
    }
    else {
        result12.innerHTML = "Enter 1-12"
    }
}







//   14- input angles of a triangle and check whether triangle is valid or not.
function number14() {
    var a = + document.getElementById("value141").value
    var b = + document.getElementById("value142").value
    var c = + document.getElementById("value143").value
    if (a + b + c == 180) {
        result14.innerHTML = " Triangle is valid"
    }

    else {
        result14.innerHTML = " Triangle is not valid"
    }
}

//   15- input sides of a triangle and check whether triangle is valid or not.
function number15() {
    var a = + document.getElementById("value151").value
    var b = + document.getElementById("value152").value
    var c = + document.getElementById("value153").value
    if (a < b + c && b < a + c && c < a + b) {
        result15.innerHTML = " Triangle is valid"
    }

    else {
        result15.innerHTML = " Triangle is not valid"
    }
}
//   16- The triangle is equilateral, isosceles or scalene triangle.

function number16() {
    var a = + document.getElementById("value161").value
    var b = + document.getElementById("value162").value
    var c = + document.getElementById("value163").value
    if (a < b + c && b < a + c && c < a + b) {
        if (a == b && b == c) {
            result16.innerHTML = " Triangle is  equilateral"
        }

        else if (a != b && b != c && a != c) {
            result16.innerHTML = " Triangle is scalene"
        }
        else {
            result16.innerHTML = " Triangle is isosceles"
        }
    }
    else {
        result16.innerHTML = " Triangle is not valid"
    }

}

// 17- Find all roots of quadratic Equation 

function number17() {
    var a = parseFloat(document.getElementById("enter171").value)
    var b = parseFloat(document.getElementById("enter172").value)
    var c = parseFloat(document.getElementById("enter173").value)
    var y = Math.sqrt(b * b - 4 * a * c)
    console.log(y);
   if (y>=0) {
    var x1 = (-b + y) / (2 * a)
    console.log(x1);
    var x2 = (-b - y) / (2 * a)
    console.log(x2);
    result17.innerHTML = "x={" + x1 + ", " + x2 + "}"
}
 else {
    result17.innerHTML="x= -"+b+"±sqrt(" +b * b - 4 * a * c+ ")"
   }
   
}

// 18 Calculate Profit or loss 

function number18() {
    var a = parseFloat(document.getElementById("enter181").value)
    var b = parseFloat(document.getElementById("enter182").value)
    if (b > a) {
        var profit = (b - a) * (100 / a)
        result18.innerHTML = "Profit =" + profit + "%"

    }
    else if (a > b) {
        var loss = (a - b) * (100 / a)
        result18.innerHTML = "Loss =" + loss + "%"
    }
    else {
        result18.innerHTML = "Profit = Loss = 0%"
    }
}


// 19 Enter Marks of Five Subjects and calcuate average

function number19() {
    var a = parseFloat(document.getElementById("enter191").value)
    var b = parseFloat(document.getElementById("enter192").value)
    var c = parseFloat(document.getElementById("enter193").value)
    var d = parseFloat(document.getElementById("enter194").value)
    var e = parseFloat(document.getElementById("enter195").value)
    var f = parseFloat(document.getElementById("enter196").value)
    var g = parseFloat(document.getElementById("enter197").value)
    var h = parseFloat(document.getElementById("enter198").value)
    var i = parseFloat(document.getElementById("enter199").value)
    var j = parseFloat(document.getElementById("enter190").value)

    var m = a / b * 100
    var n = c / d * 100
    var o = e / f * 100
    var p = g / h * 100
    var q = i / j * 100

    var avg = (m + n + o + p + q) / 5
    result191.innerHTML = "Total Marks =" + avg + "%"
    if (avg >= 90) {
        result192.innerHTML = "Your grade is , A"
    } else if (avg >= 80) {
        result192.innerHTML = "Your grade is , B"
    }
    else if (avg >= 70) {
        result192.innerHTML = "Your grade is , C"
    }
        else if (avg >= 60) {
            result192.innerHTML = "Your grade is , D"

        }
        else if (avg >= 40) {
            result192.innerHTML = "Your grade is , E"

        }
        else{
            result192.innerHTML="Your grade is , F"
        }

    }


    // 20-  Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
    // Basic Salary <= 10000 : HRA = 20%, DA = 80%
    // Basic Salary <= 20000 : HRA = 25%, DA = 90%
    // Basic Salary > 20000 : HRA = 30%, DA = 95%
    
    function number20() {
        var salary=parseFloat(document.getElementById("enter20").value)
        var hra,da,grossSallary;
        if (salary<=10000) {
            hra= salary *0.20
            da=salary*0.8
        } else if(salary<=20000) {
            hra= salary *0.25;
            da=salary*0.9;
        }
         else  {
            hra= salary *0.30;
            da=salary*0.95;
        }
        grossSallary= salary+hra+da

        result20.innerHTML="Gross salary="+grossSallary
    }

    // 21-Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
    // For first 50 units Rs. 0.50/unit
    // For next 100 units Rs. 0.75/unit
    // For next 100 units Rs. 1.20/unit
    // For unit above 250 Rs. 1.50/unit
    // An additional surcharge of 20% is added to the bill
    
function number21() {
    

    var unit= parseFloat(document.getElementById("enter21").value)
    var bill;
    if (unit<=50) {
         bill = unit*0.50 
    } 
    else if(unit<=150){
        bill= 50*0.50 + (unit-50)* 0.75
    }
    else if(unit<=250){
        bill= 50*0.50 + (100)* 0.75+(unit-150)*1.20
    }
    else  {
        bill= 50*0.50 + 100* 0.75+ 100 * 1.20 + (unit-250)*1.50
    }
    var totalBill= bill+ bill*0.20
    result21.innerHTML="total Bill ="+totalBill
}
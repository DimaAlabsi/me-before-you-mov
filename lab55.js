



alert("welcome dear")

var fav = prompt ("What is your favourite movie ?")

function favfun(){

if (fav== "me before you" ){var times =prompt ("how many times do you watch it?")






for(var i=0 ; i < times ; i++){ document.write("<div>" + "<h3>" + times +"</h3>"+ "</div>" )}



while(times>10){ times=prompt("please enter the real number of watched times") }}




else if ( fav != "me before you") { alert ("I hope you watch it and tell me about your review..")}
}

favfun();


 
  var star =prompt("how many stars do you give to this movie?")


 starfun(star);

function starfun(num){

var output = ""



// // if (star "me before you") {var star = prompt ("How many stars do you give me before you? ") 


 for(var s=0 ; s < num ; s++){ output = output +"<div>" + + star + "<img src= 'https://sharlemond.com/wp-content/uploads/sites/11/2017/08/63600603059319851232991464_me-b4-you.jpg' alt = 'me before you'>"+ "</div>" }

 return output;
  }
 document.write (starfun(star))


 while ( star>5) { star =prompt("please enter the real number of stars you get to the movie! from [1-5]") }



console.log("SAI SARATH");
console.log("another line");
for(let i=0; i<10; i++) {
  console.log("increasing " + i);
}

let h1El = document.querySelector("h1");
h1El.style.color = "blue";

let content = document.createElement("p");
content.innerHTML = "Hey this is the content inside of the p tag";

document.querySelector("body h1").classList.add("huge");

function hello(myName) { // named parameter myName is treated as var
  console.log(`Hello ${myName}`);
}
hello("Kyle");
myName = "Simpson";
console.log(myName);

try {
  //someError();
}
catch (err) {
  console.log(err);
  //The err is a block-scoped variable that exists only inside the catch clause, 
  //as if it had been declared with let.
}

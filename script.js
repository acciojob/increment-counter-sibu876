//your JS code here. If required.
const number = document.getElementById("number");
const inc = document.getElementById("increment");

let count =0;
const  increment = () => {
	count++;
	number.textContent = count;
	
} 
inc.onclick = increment;
//your JS code here. If required.
const number = document.getElementById("counter");
const inc = document.getElementById("incrementBtn");

let count =0;
const  increment = () => {
	count++;
	number.textContent = count;
	
} 
inc.onclick = increment;
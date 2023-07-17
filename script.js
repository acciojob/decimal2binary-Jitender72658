function decimalToBinary(num) {
	let arr = "";
	let rem;
  while(num>0){
	  rem = num%2;
	  num = Math.floor(num/2);
	  arr = rem+arr;
  }
return arr;
  
}

window.decimalToBinary = decimalToBinary;

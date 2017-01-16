
function LoadBingoArray() {
	var binArray = Array.from(Array(76).keys());
	var binNums = binArray.slice(1);
	var shuffNums = _.shuffle(binNums);
	return shuffNums;
}
var shuffNums = LoadBingoArray();
console.log(shuffNums);


var bNums = [];
var iNums = [];
var nNums = [];
var gNums = [];
var oNums = [];
function CardNumGen() {
	for (var i = 0; i < shuffNums.length; i++) {
		var fiveNums = shuffNums[i];
		if (fiveNums <= 15 && bNums.length < 5) {
			bNums.push(fiveNums);
			bNums.sort(function(a,b){
	    	return a - b;
			})
 		}else if (fiveNums > 15 && fiveNums <= 30 && iNums.length < 5) {
 			iNums.push(fiveNums);
			iNums.sort(function(a,b){
	    	return a - b;
			})
 		}else if (fiveNums > 30 && fiveNums <= 45 && nNums.length < 4) {
 			nNums.push(fiveNums);
			nNums.sort(function(a,b){
	    	return a - b;
			})
 		}else if (fiveNums > 45 && fiveNums <=60 && gNums.length < 5) {
 			gNums.push(fiveNums);
			gNums.sort(function(a,b){
	    	return a - b;
			})
 		}else if (fiveNums > 60 && fiveNums <=75 && oNums.length < 5) {
 			oNums.push(fiveNums);
			oNums.sort(function(a,b){
	    	return a - b;
			})
 		}
	}
	document.getElementById("b1").innerHTML = bNums.slice(0,1);
	document.getElementById("b2").innerHTML = bNums.slice(1,2);
	document.getElementById("b3").innerHTML = bNums.slice(2,3);
	document.getElementById("b4").innerHTML = bNums.slice(3,4);
	document.getElementById("b5").innerHTML = bNums.slice(4,5);
	document.getElementById("i1").innerHTML = iNums.slice(0,1);
	document.getElementById("i2").innerHTML = iNums.slice(1,2);
	document.getElementById("i3").innerHTML = iNums.slice(2,3);
	document.getElementById("i4").innerHTML = iNums.slice(3,4);
	document.getElementById("i5").innerHTML = iNums.slice(4,5);
	document.getElementById("n1").innerHTML = nNums.slice(0,1);
	document.getElementById("n2").innerHTML = nNums.slice(1,2);
	document.getElementById("n4").innerHTML = nNums.slice(2,3);
	document.getElementById("n5").innerHTML = nNums.slice(3,4);
	document.getElementById("g1").innerHTML = gNums.slice(0,1);
	document.getElementById("g2").innerHTML = gNums.slice(1,2);
	document.getElementById("g3").innerHTML = gNums.slice(2,3);
	document.getElementById("g4").innerHTML = gNums.slice(3,4);
	document.getElementById("g5").innerHTML = gNums.slice(4,5);
	document.getElementById("o1").innerHTML = oNums.slice(0,1);
	document.getElementById("o2").innerHTML = oNums.slice(1,2);
	document.getElementById("o3").innerHTML = oNums.slice(2,3);
	document.getElementById("o4").innerHTML = oNums.slice(3,4);
	document.getElementById("o5").innerHTML = oNums.slice(4,5);
}
CardNumGen();


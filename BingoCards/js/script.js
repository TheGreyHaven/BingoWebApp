
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


// function PropBinNum() {
// 	var disNum = shuffNums.shift();
// 	if (disNum <= 15) {
// 		disNum = "B" + "<br>" + disNum;
// 		document.getElementById("white-square").innerHTML = disNum;
// 	} else if (disNum > 15 && disNum <= 30) {
// 		disNum = "I" + "<br>" + disNum;
// 		document.getElementById("white-square").innerHTML = disNum;
// 	} else if (disNum > 30 && disNum <= 45) {
// 		disNum = "N" + "<br>" + disNum;
// 		document.getElementById("white-square").innerHTML = disNum;
// 	} else if (disNum > 45 && disNum <=60) {
// 		disNum = "G" + "<br>" + disNum;
// 		document.getElementById("white-square").innerHTML = disNum;
// 	} else if (disNum > 60 && disNum <=75) {
// 		disNum = "O" + "<br>" + disNum;
// 		document.getElementById("white-square").innerHTML = disNum;
// 	} else {
// 		disNum = "The" + "<br>" + "End";
// 		document.getElementById("white-square").innerHTML = disNum;
// 	}
// 	BingoCard(disNum);
// }


// var colB = [];
// var colI = [];
// var colN = [];
// var colG = [];
// var colO = [];
// function BingoCard(disNum){
// 	var cardNum = disNum.slice(5);
// 	console.log(cardNum);
// 	if (cardNum <= 15) {
//     	colB.push(cardNum);
//     	colB.sort(function(a,b){
//     	return a - b;
// 		})
//     	document.getElementById("bNum").textContent = colB.join('\n');
//   	}else if (cardNum > 15 && cardNum <= 30) {
// 		colI.push(cardNum);
// 		colI.sort(function(a,b){
//     	return a - b;
// 		})
// 		document.getElementById("iNum").textContent = colI.join('\n');
// 	} else if (cardNum > 30 && cardNum <= 45) {
// 		colN.push(cardNum);
// 		colN.sort(function(a,b){
//     	return a - b;
// 		})
// 		document.getElementById("nNum").textContent = colN.join('\n');
// 	} else if (cardNum > 45 && cardNum <=60) {
// 		colG.push(cardNum);
// 		colG.sort(function(a,b){
//     	return a - b;
// 		})
// 		document.getElementById("gNum").textContent = colG.join('\n');
// 	} else if (cardNum > 60 && cardNum <=75) {
// 		colO.push(cardNum);
// 		colO.sort(function(a,b){
//     	return a - b;
// 		})
// 		document.getElementById("oNum").textContent = colO.join('\n');
// 	}
// }

// function Refresh() {
// 	window.location="index.html";
// }


function LoadBingoArray() {
	var binArray = Array.from(Array(76).keys());
	var binNums = binArray.slice(1);
	var shuffNums = _.shuffle(binNums);
	return shuffNums;
}
var shuffNums = LoadBingoArray();

function PropBinNum() {
	var disNum = shuffNums.shift();
	if (disNum <= 15) {
		disNum = "B" + "<br>" + disNum;
		document.getElementById("white-square").innerHTML = disNum;
	} else if (disNum > 15 && disNum <= 30) {
		disNum = "I" + "<br>" + disNum;
		document.getElementById("white-square").innerHTML = disNum;
	} else if (disNum > 30 && disNum <= 45) {
		disNum = "N" + "<br>" + disNum;
		document.getElementById("white-square").innerHTML = disNum;
	} else if (disNum > 45 && disNum <=60) {
		disNum = "G" + "<br>" + disNum;
		document.getElementById("white-square").innerHTML = disNum;
	} else if (disNum > 60 && disNum <=75) {
		disNum = "O" + "<br>" + disNum;
		document.getElementById("white-square").innerHTML = disNum;
	} else {
		disNum = "The" + "<br>" + "End";
		document.getElementById("white-square").innerHTML = disNum;
	}
	BingoCard(disNum);
}

// function Refresh() {
// 	window.location="index.html";
// }


var colB = [];
var colI = [];
var colN = [];
var colG = [];
var colO = [];
function BingoCard(disNum){
	var cardNum = disNum.slice(5);
	console.log(cardNum);
	if (cardNum <= 15) {
    	colB.push(cardNum);
    	colB.sort(function(a,b){
    	return a - b;
		})
    	document.getElementById("bNum").textContent = colB.join('\n');
  	}else if (cardNum > 15 && cardNum <= 30) {
		colI.push(cardNum);
		colI.sort(function(a,b){
    	return a - b;
		})
		document.getElementById("iNum").textContent = colI.join('\n');
	} else if (cardNum > 30 && cardNum <= 45) {
		colN.push(cardNum);
		colN.sort(function(a,b){
    	return a - b;
		})
		document.getElementById("nNum").textContent = colN.join('\n');
	} else if (cardNum > 45 && cardNum <=60) {
		colG.push(cardNum);
		colG.sort(function(a,b){
    	return a - b;
		})
		document.getElementById("gNum").textContent = colG.join('\n');
	} else if (cardNum > 60 && cardNum <=75) {
		colO.push(cardNum);
		colO.sort(function(a,b){
    	return a - b;
		})
		document.getElementById("oNum").textContent = colO.join('\n');
	}
}


// setTimeout(function(){ alert("Hello"); }, 4000);

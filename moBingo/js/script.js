
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



function BingoCard(disNum){
	var cardNum = disNum.slice(5);
	console.log(cardNum);
	if (cardNum <= 15) {
    	document.getElementById("bNum").innerHTML = cardNum;
  	}else if (cardNum > 15 && cardNum <= 30) {
		document.getElementById("iNum").innerHTML = cardNum;
	} else if (cardNum > 30 && cardNum <= 45) {
		document.getElementById("nNum").innerHTML = cardNum;
	} else if (cardNum > 45 && cardNum <=60) {
		document.getElementById("gNum").innerHTML = cardNum;
	} else if (cardNum > 60 && cardNum <=75) {
		document.getElementById("oNum").innerHTML = cardNum;
	}
}

// setTimeout(function(){ alert("Hello"); }, 4000);
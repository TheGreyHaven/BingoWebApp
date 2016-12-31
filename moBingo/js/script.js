
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
	} else if (disNum > 45) {
		disNum = "N" + "<br>" + disNum;
		document.getElementById("white-square").innerHTML = disNum;
	} else {
		disNum = "The" + "<br>" + "End";
		document.getElementById("white-square").innerHTML = disNum;
		document.getElementById("newGame").innerHTML = "New Game?";
	}
}

function Refresh() {
	window.location="index.html";
}
// setTimeout(function(){ alert("Hello"); }, 4000);

var dnaTranscriber = function(){

	this.toRna = function(nucleotide){
		//	var array = nucleotide.split("");
		return nucleotide.split("").map(function(letter){
					if(letter === 'C'){
						return letter.replace(letter,'G');
					} else if(letter === 'G'){
						return letter.replace(letter,'C');
					} else if(letter === 'A'){
						return letter.replace(letter,'U');
					} else if(letter === 'T'){
						return letter.replace(letter,'A');
					}
			}).join('');
	};

};









module.exports = dnaTranscriber;